<!--20-1-5前台老人登录--Vanilla-->
<template>
  <div>
    <div style="padding: 80px 400px 50px 400px">
  </div>
    <div style="padding: 30px 500px 50px 500px">
      <div>
        <el-card class="box-card" >
          <div slot="header" class="clearfix" >
            <el-row>
              <el-col :span="3" style="float: left">
                <el-button type="text" style="float: right;"  icon="el-icon-back" size="medium" @click="home()">去首页</el-button>
              </el-col>
            </el-row>
            <el-row style="text-align: center">
                <span>用户登录</span>
            </el-row>
          </div>
          <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
              <el-form-item label="" prop="olderName" >
                <el-input v-model="loginForm.olderName" prefix-icon="el-icon-user-solid"  style="width: 70%;"  placeholder="请输入姓名" >
                </el-input>
              </el-form-item>
              <el-form-item label="" prop="olderPassword" >
                <el-input  type="password" prefix-icon="el-icon-s-goods"  placeholder="请输入密码" style="width: 70%;" v-model="loginForm.olderPassword" ></el-input>
              </el-form-item>
            <el-form-item >
              <el-row>
                <el-col :span="10">
                  <el-button type="primary" @click="olderLogin()" >登录</el-button>
                </el-col>
                <el-col :span="5">
                  <el-button type="text" style="float: right;" size="medium" @click="register()">无账号?去注册</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
  import API from '../assets/login.js';
  import { mapMutations } from 'vuex';
  export default {
    data() {
      return {
        loginForm: {
          olderName: '',
          olderPassword: ''
        },
        older: {},
        rules: {
          olderName: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          olderPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      ...mapMutations(['changeLogin']),
      /*用户登录*/
      olderLogin() {
        if (this.loginForm.olderName === '' || this.loginForm.olderPassword === '') {
          alert('账号或密码不能为空');
        } else {
          console.log(this.loginForm);
          var params = new URLSearchParams();
          params.append('olderName', this.loginForm.olderName);
          params.append('olderPassword', this.loginForm.olderPassword);
          this.axios({
            method: 'post',
            url: '/older/login',
            data: params
          }).then(res => {
            this.older = res.data;
            // console.log(res.data);
            if (res.data.olderName === this.loginForm.olderName) {
              // console.log(res.data);
              this.$router.push('/');
              localStorage.setItem('older', JSON.stringify(res.data));
              localStorage.setItem('isOlder', '1');
              alert('登陆成功');
            } else {
              alert('账号不存在');
            }
          }).catch(error => {
            alert('账号或密码错误');
            console.log(error);
          });
        }
      },
      /*注册*/
      register(){
        this.$router.push('/olderRegister');
      },
      home(){
        this.$router.push('/');
      }
    }
  };

</script>
<style scoped>
  @import "../assets/login.css";
</style>
