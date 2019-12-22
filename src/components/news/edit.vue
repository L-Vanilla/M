<!--2019-12-21新聞修改-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新闻标题" prop="title" style="width:90%">
            <el-input v-model="ruleForm.title"   placeholder="请输入新闻标题"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" style="height: 500px;width:90%">
          <div >
            <quill-editor v-model="ruleForm.content" ref="myQuillEditor" style="height: 400px;" :options="editorOption">
              <!-- 自定义toolar -->
<!--              <div id="toolbar" slot="toolbar">-->
<!--                &lt;!&ndash; Add a bold button &ndash;&gt;-->
<!--                <button class="ql-bold" title="加粗">Bold</button>-->
<!--                <button class="ql-italic" title="斜体">Italic</button>-->
<!--                <button class="ql-underline" title="下划线">underline</button>-->
<!--                <button class="ql-strike" title="删除线">strike</button>-->
<!--                <button class="ql-blockquote" title="引用"></button>-->
<!--                <button class="ql-code-block" title="代码"></button>-->
<!--                <button class="ql-header" value="1" title="标题1"></button>-->
<!--                <button class="ql-header" value="2" title="标题2"></button>-->
<!--                &lt;!&ndash;Add list &ndash;&gt;-->
<!--                <button class="ql-list" value="ordered" title="有序列表"></button>-->
<!--                <button class="ql-list" value="bullet" title="无序列表"></button>-->
<!--                &lt;!&ndash; Add font size dropdown &ndash;&gt;-->
<!--                <select class="ql-header" title="段落格式">-->
<!--                  <option selected>段落</option>-->
<!--                  <option value="1">标题1</option>-->
<!--                  <option value="2">标题2</option>-->
<!--                  <option value="3">标题3</option>-->
<!--                  <option value="4">标题4</option>-->
<!--                  <option value="5">标题5</option>-->
<!--                  <option value="6">标题6</option>-->
<!--                </select>-->
<!--                <select class="ql-size" title="字体大小">-->
<!--                  <option value="10px">10px</option>-->
<!--                  <option value="12px">12px</option>-->
<!--                  <option value="14px">14px</option>-->
<!--                  <option value="16px" selected>16px</option>-->
<!--                  <option value="18px">18px</option>-->
<!--                  <option value="20px">20px</option>-->
<!--                </select>-->
<!--                <select class="ql-font" title="字体">-->
<!--                  <option value="SimSun">宋体</option>-->
<!--                  <option value="SimHei">黑体</option>-->
<!--                  <option value="Microsoft-YaHei">微软雅黑</option>-->
<!--                  <option value="KaiTi">楷体</option>-->
<!--                  <option value="FangSong">仿宋</option>-->
<!--                  <option value="Arial">Arial</option>-->
<!--                </select>-->
<!--                &lt;!&ndash; Add subscript and superscript buttons &ndash;&gt;-->
<!--                <select class="ql-color" value="color" title="字体颜色"></select>-->
<!--                <select class="ql-background" value="background" title="背景颜色"></select>-->
<!--                <select class="ql-align" value="align" title="对齐"></select>-->
<!--                <button class="ql-clean" title="还原"></button>-->
<!--              </div>-->
              <!-- You can also add your own -->
            </quill-editor>
          </div>
<!--            <el-input  type="textarea" :autosize="{ minRows: 5, maxRows: 10}" style="width:300%" placeholder="请输入新闻内容" v-model="ruleForm.content" ></el-input>-->
        </el-form-item>
        <el-form-item style="margin-top: 10%;">
          <div >
            <el-button type="primary" @click="submitForm('ruleForm')" >{{buttonText}}</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
  /*19-12-21引入富文本编译器包*/
  import {
    Quill,
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.snow.css'

  /*-----------------------------------*/
  /*------------自定义---------------*/
  // 自定义字体大小
  // let Size = Quill.import('attributors/style/size');
  // Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px'];
  // Quill.register(Size, true);
  // // 自定义字体类型
  // var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
  //   '宋体', '黑体'
  // ];
  // var Font = Quill.import('formats/font');
  // Font.whitelist = fonts;
  // Quill.register(Font, true);

  export default {
      inject:['reload'],
      props:["id"],
    data () {
        name:"newsedit"
      return {
          ruleForm:{
            id:"",
            title:"",
            content:""
          },
        editorOption: {
          // placeholder: "请输入",
          // theme: "snow", // or 'bubble'
          // modules: {
          //   toolbar: {
          //     container: '#toolbar'
          //   }
          // }
        },
          rules: {
            title: [
                { required: true, message: '请输入新闻标题', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ]
        },
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("news/getOne",(data)=>{
                this.ruleForm=data;
                console.log(this.ruleForm);
            },{id:this.id});
            this.buttonText="修改"
        }

    },

    components: {
      quillEditor //注册
    },
    methods:{
        resetForm(formName){
             this.$refs[formName].resetFields();
        },
        submitForm(formName){
            let url="";
            // if(this.id)
                url="news/update";
            // else
            //     url="news/add";
            this.post(formName,url,this.ruleForm);
        }

    }
  }

</script>

<style >

</style>
