<!--2019-12-21添加新闻---Vanilla-->
<template>
  <div style="margin-top: 15px;">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="动态类型" prop="hType" style="width:90%">
        <el-select v-model="ruleForm.hType" filterable placeholder="请选择动态类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
<!--        <el-input v-model="ruleForm.title"   placeholder="请输入新闻标题"></el-input>-->
      </el-form-item>
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
      <el-form-item >
        <div >
          <el-button type="primary" @click="submitForm('ruleForm')" >{{buttonText}}</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  /*19-12-21导入富文本包*/
  import {
    Quill,
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    inject:['reload'],
    // props:["id"],
    data () {
      name:"add"
      return {
        ruleForm:{
          id:"",
          hType:"",
          title:"",
          content:"",
          publisherId:"",
          publisherName:"",
        },
        options: [{
          value: '养生保健',
          label: '养生保健'
        }, {
          value: '预防知识',
          label: '预防知识'
        }, {
          value: '健康教育',
          label: '健康教育'
        }],
        editorOption: {
        },
        rules: {
          hType: [
            {  required: true, message: '请选择动态类型', trigger: 'blur' },
          ] ,
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ]
        },
        buttonText:"发布"

      }
    },
    created(){
      this.loadUser();
    },

    components: {
      quillEditor
    },
    methods:{
      /*获取用户数据*/
      loadUser(){
        var list = JSON.parse(localStorage.getItem("admin") || '[]');
        // this.admin = list;
        this.ruleForm.publisherName=list.name;
        this.ruleForm.publisherId=list.id;
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      submitForm(formName){
          let url="";
          url="healthCare/add";
          this.post(formName,url,this.ruleForm);
      }

    }
  }

</script>

<style >

</style>
