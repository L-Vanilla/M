<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新闻标题" prop="title" style="width:90%">
            <el-input v-model="ruleForm.title"   placeholder="请输入新闻标题"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" style="height: 500px;width:90%">
          <div >
            <quill-editor v-model="ruleForm.content" ref="myQuillEditor" style="height: 400px;" :options="editorOption">
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
  import {
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
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
        editorOption: {},
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
      quillEditor
    },
    methods:{
        resetForm(formName){
             this.$refs[formName].resetFields();
        },
        submitForm(formName){
            let url="";
            if(this.id)
                url="news/update";
            else
                url="news/add";
            this.post(formName,url,this.ruleForm);
        }

    }
  }

</script>

<style scoped>

</style>
