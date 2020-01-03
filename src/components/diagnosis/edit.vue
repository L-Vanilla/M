<!--20-1-3诊断信息添加，修改-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <el-form-item label="老人Id" prop="olderId" >
            <el-input v-model="ruleForm.olderId"    style="width:200%" disabled></el-input>
        </el-form-item>
        <el-form-item label="老人姓名" prop="olderName" >
            <el-input v-model="ruleForm.olderName"    style="width:200%" disabled></el-input>
        </el-form-item>
        <el-form-item label="就诊医院" prop="diagnosisHospital" >
            <el-input v-model="ruleForm.diagnosisHospital"   placeholder="请输入医院名称" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="诊断时间" prop="diagnosisDate" >
          <el-date-picker
            v-model="ruleForm.diagnosisDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
<!--          <el-input v-model="ruleForm.diagnosisDate"   placeholder="请输入年龄" style="width:200%"></el-input>-->
        </el-form-item>
        <el-form-item label="病情描述" prop="diagnosisRemarks" >
            <el-input v-model="ruleForm.diagnosisRemarks"   placeholder="请输入..." style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="医嘱信息" prop="diagnosisInformation" >
          <el-input v-model="ruleForm.diagnosisInformation"   placeholder="请输入..." style="width:200%"></el-input>
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
      props:["id","olderId","olderName"],
    data () {
        name:"diagnosisedit"
      return {
        doUpload:"/diagnosis/fileUpload",
          ruleForm:{
            olderId:"",
            olderName:"",
            diagnosisHospital:"",
            diagnosisDate:"",
            diagnosisRemarks:"",
            diagnosisInformation:"",
          },
          rules: {
            diagnosisHospital: [
                { required: true, message: '请输入医院名称', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,

        },
        fileList:[],
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("diagnosis/getOne",(data)=>{
                this.ruleForm=data;
                console.log(this.ruleForm);
            },{id:this.id});
            this.buttonText="修改"
        }
        if(this.olderId){
          this.ruleForm.olderId=this.olderId;
          this.ruleForm.olderName=this.olderName;
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
                url="diagnosis/update";
            else
                url="diagnosis/add";
            this.post(formName,url,this.ruleForm);
        },
    }
  }

</script>

<style >

</style>
