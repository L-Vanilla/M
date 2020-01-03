<!--2019-12-21公告详情---Vanilla-->
<template>
  <div style="margin-top: 15px;">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新闻标题" prop="title">
        <el-input v-model="ruleForm.title" style="width:300%"   readonly></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content" >
        <el-input  type="textarea" :autosize="{ minRows: 5, maxRows: 10}" style="width:300%"  v-model="ruleForm.content" disabled></el-input>
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
    }
  }

</script>

<style scoped>

</style>
