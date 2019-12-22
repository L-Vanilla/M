<!--2019-12-22公告修改-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title" >
            <el-input v-model="ruleForm.title"   placeholder="请输入标题" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" >
            <el-input  type="textarea" :autosize="{ minRows: 5, maxRows: 10}" style="width:300%"  placeholder="请输入内容" v-model="ruleForm.content" ></el-input>
        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="submitForm('ruleForm')" >{{buttonText}}</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
      inject:['reload'],
      props:["id"],
    data () {
        name:"noticeedit"
      return {
          ruleForm:{
            id:"",
            title:"",
            content:""
          },
          rules: {
            title: [
                { required: true, message: '请输入标题', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,
            content: [
                { required: true, message: '请输入内容', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ]
        },
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("notice/getOne",(data)=>{
                this.ruleForm=data;
                console.log(this.ruleForm);
            },{id:this.id});
            this.buttonText="修改"
        }

    },

    components: {

    },
    methods:{
        resetForm(formName){
             this.$refs[formName].resetFields();
        },
        submitForm(formName){
            let url="";
            if(this.id)
                url="notice/update";
            else
                url="notice/add";
            this.post(formName,url,this.ruleForm);
        }

    }
  }

</script>

<style >

</style>
