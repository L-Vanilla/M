<!--2019-12-22公告修改-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="workerName" >
            <el-input v-model="ruleForm.workerName"   placeholder="请输入姓名" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="workerPassword" >
            <el-input  type="password" :autosize="{ minRows: 5, maxRows: 10}" style="width:300%"  placeholder="请输入密码" v-model="ruleForm.workerPassword" ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="workerSex" >
          <el-radio-group v-model="ruleForm.workerSex">
            <el-radio  label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号" prop="workerPhone" >
            <el-input v-model="ruleForm.workerPhone"   placeholder="请输入手机号" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="workerWechat" >
          <el-input v-model="ruleForm.workerWechat"   placeholder="请输入微信号" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="workerMail" >
          <el-input v-model="ruleForm.workerMail"   placeholder="请输入邮箱" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="workerCard" >
          <el-input v-model="ruleForm.workerCard"   placeholder="请输入身份证号" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="workerAddress" >
          <el-input v-model="ruleForm.workerAddress"   placeholder="请输入地址" style="width:300%"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks" >
          <el-input v-model="ruleForm.remarks"   placeholder="请输入备注" style="width:300%"></el-input>
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
        name:"workeredit"
      /*验证手机号*/
      let checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error("电话号码不能为空"))
        }
        setTimeout(() => {
          // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
          // 所以在前面加了一个+实现隐式转换
          if (!Number.isInteger(+value)) {
            callback(new Error("请输入数字值"))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error("电话号码格式不正确"))
            }
          }
        }, 100)
      };
      /*验证身份证号*/
      let checkcredentialsNum = (rule, value, callback) => {
        const credentialsNumReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (!value) {
          return callback(new Error("身份证编号不能为空"))
        }
        setTimeout(() => {
          if (credentialsNumReg.test(value)) {
            callback()
          } else {
            callback(new Error("身份证编号格式不正确"))
          }

        }, 100)
      };
      return {
          ruleForm:{
            id:"",
            workerName:"",
            workerPassword:"",
            workerPhone:"",
            workerMail:"",
            workerWechat:"",
            workerSex:"",
            workerCard:"",
            workerAddress:"",
            remarks:"",
          },
          rules: {
            workerName: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,
            workerSex: [
                { required: true, message: '请选择姓名', trigger: 'blur' },
            ] ,
            workerPassword: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ] ,
            workerPhone: [
              { required: true, trigger: 'blur',validator: checkPhone }//设置全局变量
            ] ,
            workerCard: [
              { required: true, trigger: 'blur',validator: checkcredentialsNum }//设置全局变量
            ]
        },
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("worker/getOne",(data)=>{
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
                url="worker/update";
            else
                url="worker/add";
            this.post(formName,url,this.ruleForm);
        }

    }
  }

</script>

<style >

</style>
