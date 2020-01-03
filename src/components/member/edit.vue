<!--20-1-2家庭成员添加----Vanilla-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <el-form-item label="老人Id" prop="olderId" >
            <el-input v-model="ruleForm.olderId"    style="width:200%" disabled></el-input>
        </el-form-item>
        <el-form-item label="老人姓名" prop="olderName" >
            <el-input v-model="ruleForm.olderName"    style="width:200%" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="memberName" >
            <el-input v-model="ruleForm.memberName"   placeholder="请输入姓名" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="memberSex" >
          <el-radio-group v-model="ruleForm.memberSex">
            <el-radio  :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="memberAge" >
          <el-input v-model="ruleForm.memberAge"   placeholder="请输入年龄" style="width:200%" type="number"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="memberPhone" >
            <el-input v-model="ruleForm.memberPhone"   placeholder="请输入手机号" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="memberCard" >
          <el-input v-model="ruleForm.memberCard"   placeholder="请输入身份证号" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="memberAddress" >
          <el-input v-model="ruleForm.memberAddress"   placeholder="请输入地址" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="与老人关系" prop="memberRelation" >
          <el-input v-model="ruleForm.memberRelation"   placeholder="请输入与老人关系" style="width:200%"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks" >
          <el-input v-model="ruleForm.remarks"   placeholder="请输入备注" style="width:200%"></el-input>
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
        name:"memberedit"
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
        doUpload:"/member/fileUpload",
          ruleForm:{
            memberName:"",
            memberPhone:"",
            memberAge:"",
            memberSex:"",
            memberCard:"",
            memberAddress:"",
            remarks:"",
            memberRelation:"",
            olderId:"",
            olderName:"",
          },
          rules: {
            memberName: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,
            memberSex: [
                { required: true, message: '请选择姓名', trigger: 'blur' },
            ] ,
            memberPhone: [
              { required: true, trigger: 'blur',validator: checkPhone }//设置全局变量
            ] ,
            memberCard: [
              { required: true, trigger: 'blur',validator: checkcredentialsNum }//设置全局变量
            ]
        },
        fileList:[],
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("member/getOne",(data)=>{
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
                url="member/update";
            else
                url="member/add";
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
        this.axios.post('/member/fileUpload', formData).then(function(res) {
          console.log(res);
          _this.ruleForm.memberPhotourl=res.data;
          console.log(_this.ruleForm.memberPhotourl);
          // _this.addimgtijiao = res.data.path;
        });
      },
      // submitUpload() {
      //   this.$refs.upload.submit();
      //   console.log("hhfhh")
      // },
      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      // handlePreview(file) {
      //   console.log(file);
      // }


    }
  }

</script>

<style >

</style>
