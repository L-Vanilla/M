<!--2019-12-21添加新闻---Vanilla-->
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
  // /*19-12-21导入富文本包*/
  import {
    quillEditor
  } from 'vue-quill-editor'
  export default {
    inject:['reload'],
    // props:["id"],
    data () {
      name:"add"
      return {
        ruleForm:{
          id:"",
          title:"",
          content:"",
          publisherId:"",
          publisherName:"",
        },
        admin:{},
        rules: {
          title: [
            { required: true, message: '请输入新闻标题', trigger: 'blur' },
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
        this.admin = list;
        this.ruleForm.publisherName=list.name;
        this.ruleForm.publisherId=list.id;
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      submitForm(formName){
        let url="";
        url="news/add";
        this.post(formName,url,this.ruleForm);
      }
    }
  }
</script>

<style >

</style>
