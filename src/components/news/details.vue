<!--2019-12-21新闻详情-->
<template>
  <div style="margin-top: 15px;">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新闻标题" prop="title" style="width:700px">
        <el-input v-model="ruleForm.title"   readonly></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content" style="width:700px">
        <div class="ql-container ql-snow">
          <el-input class="ql-editor" type="textarea" :autosize="{ minRows: 5, maxRows: 10}" v-html="ruleForm.content" disabled></el-input>
<!--          <div class="ql-editor" v-html="ruleForm.content">-->
<!--          </div>-->
        </div>
<!--        <el-input  type="textarea" :autosize="{ minRows: 5, maxRows: 10}" style="width:300%"  v-model="ruleForm.content" disabled></el-input>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    props:["id"],
    data () {
      name:"newsDetails.vue"
      return {
        ruleForm:{
          id:"",
          title:"",
          content:""
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

    },
    methods:{
      // resetForm(formName){
      //   this.$refs[formName].resetFields();
      // },
      // submitForm(formName){
      //   let url="";
      //   if(this.id)
      //     url="news/update";
      //   else
      //     url="news/add";
      //   this.post(formName,url,this.ruleForm);
      // }

    }
  }

</script>

<style scoped>

</style>
