<!--20-1-3随访信息添加，修改--Vanilla-->
<template>
  <div style="margin-top: 15px;">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="老人Id" prop="olderId" >
        <el-input v-model="ruleForm.olderId"    style="width:200%" disabled></el-input>
      </el-form-item>
      <el-form-item label="老人姓名" prop="olderName" >
        <el-input v-model="ruleForm.olderName"    style="width:200%" disabled></el-input>
      </el-form-item>
      <el-form-item label="身体状况" prop="bodyState" >
        <el-input v-model="ruleForm.bodyState"   placeholder="请输入..." style="width:200%"></el-input>
      </el-form-item>
      <el-form-item label="诊断时间" prop="visitsDatetime" >
        <el-date-picker
          v-model="ruleForm.visitsDatetime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期">
        </el-date-picker>
        <!--          <el-input v-model="ruleForm.visitsDate"   placeholder="请输入年龄" style="width:200%"></el-input>-->
      </el-form-item>
      <el-form-item label="备注" prop="remarks" >
        <el-input v-model="ruleForm.remarks"   placeholder="请输入..." style="width:200%"></el-input>
      </el-form-item>
      <el-form-item label="上传体检文件" prop="fileurl" >
        <input type="file" @change="upData($event)" ref="InputFile" name="files"  placeholder="请选择文件"/>
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
      name:"visitsedit"
      return {
        doUpload:"/visits/fileUpload",
        ruleForm:{
          olderId:"",
          olderName:"",
          bodyState:"",
          visitsDatetime:"",
          remarks:"",
          fileurl:"",
        },
        rules: {
          // visitsHospital: [
          //   { required: true, message: '请输入医院名称', trigger: 'blur' },
          //   { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          // ] ,

        },
        fileList:[],
        buttonText:"创建"

      }
    },
    created(){
      if(this.id){
        this.get("visits/getOne",(data)=>{
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
          url="visits/update";
        else
          url="visits/add";
        this.post(formName,url,this.ruleForm);
      },
      upData(event) {
        var reader = new FileReader();
        let fileData = this.$refs.InputFile.files[0];
        reader.readAsDataURL(fileData);
        let _this = this;
        reader.onload = function(e) {
          //这里的数据可以使本地图片显示到页面
          _this.addimg = e.srcElement.result;
        };
        // 使用formapi打包
        let formData = new FormData();
        formData.append('file', fileData);
        this.axios.post('/visits/fileUpload', formData).then(function(res) {
          console.log(res);
          _this.ruleForm.fileurl=res.data;
          console.log(_this.ruleForm.fileurl);
          // _this.addimgtijiao = res.data.path;
        });
      },
    }
  }

</script>

<style >

</style>
