<!--后台管理员修改个人信息--Vanilla-->
<template>
  <div style="margin-top: 10px">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input   v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input   v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{buttonText}}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    inject:['reload'],
    props:["id",
      "name",
      "password",
      "phone",
      "remarks"],
    data () {
      name:"useredit"
      return {
        ruleForm:{
          id:"",
          name:"",
          password:"",
          phone:"",
          remarks:""
        },
        admins:{

        },
        rules: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        buttonText:"创建"

      }
    },
    created(){
      this.ruleForm.id=this.id;
      this.ruleForm.name=this.name;
      this.ruleForm.password=this.password;
      this.ruleForm.phone=this.phone;
      this.ruleForm.remarks=this.remarks;
        console.log("用户名"+this.ruleForm.name);

    },
    components: {

    },
    methods:{
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      submitForm(formName){
        let url="";
        if(this.id){
          this.get("admin/getAll",(data)=>{
            this.admins=data;
            // console.log(this.ruleForm);
            if(data.length>0){
              if(data[0].id!==this.id){
                alert("该用户已存在!");
              }
              else{
                url="admin/update";
                this.post(formName,url,this.ruleForm);
                localStorage.removeItem('admin');
                localStorage.removeItem('islogin');
                this.$router.push('/');
                alert("请重新登录！！");
              }
            }else{
              url="admin/update";
              this.post(formName,url,this.ruleForm);
              localStorage.removeItem('admin');
              localStorage.removeItem('islogin');
              this.$router.push('/');
              alert("请重新登录！！");
            }
          },{name:this.ruleForm.name});
        }
      }

    }
  };

</script>

<style scoped>

</style>
