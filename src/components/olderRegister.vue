<!--20-1-4老人注册---Vanilla-->
<template>
  <div v-on:touchmove.prevent>
    <vue-particles
      color="#123456"
      id="particles-js"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="star"
      :particleSize="4"
      linesColor="#203c77"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push" class="lizi">
    </vue-particles>
    <div class="wrap"  >
      <div style="">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <div style="padding: 80px 100px 0 100px">
        <div>
          <el-card class="box-card" style="background-color: #dfdedd">
            <div slot="header" class="clearfix" >
              <el-row>
                <el-col :span="3" style="float: left">
                  <el-button type="text" style="float: right;"  icon="el-icon-back" size="medium" @click="home()">去首页</el-button>
                </el-col>
              </el-row>
              <el-row style="text-align: center">
                <span>用户注册</span>
              </el-row>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
              <div v-if="active===0">
                <el-form-item label="姓名" prop="olderName" >
                  <el-input v-model="ruleForm.olderName" prefix-icon="el-icon-user-solid"  style="width: 70%;"  placeholder="请输入姓名" required>
                    <!--                  <el-button slot="prepend" icon="el-icon-user" @click="findData"></el-button>-->
                  </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="olderPassword" >
                  <el-input  type="password" prefix-icon="el-icon-lock"  placeholder="请输入密码" style="width: 70%;" v-model="ruleForm.olderPassword" required></el-input>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="10">
                      <el-button  @click="next" type="primary">下一步</el-button>
                    </el-col>
                    <el-col :span="5">
                      <el-button type="text" style="float: right;" size="medium" @click="login()">已有账号?去登录</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
              </div>
              <div v-if="active===1">
                <el-form-item label="性别" prop="olderSex" >
                  <el-radio-group v-model="ruleForm.olderSex">
                    <el-radio   :label="0">男</el-radio>
                    <el-radio   :label="1">女</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="olderAge" >
                  <el-input v-model="ruleForm.olderAge"   placeholder="请输入年龄" style="width: 70%;"  type="number"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="olderPhone" >
                  <el-input  v-model="ruleForm.olderPhone" style="width: 70%;"   placeholder="请输入手机号" ></el-input>
                </el-form-item>
                <el-form-item label="身份证" prop="olderCard" >
                  <el-input v-model="ruleForm.olderCard" style="width: 70%;"  placeholder="请输入身份证号" ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="8">
                      <el-button  @click="back" type="primary">上一步</el-button>
                    </el-col>
                    <el-col :span="8">
                      <el-button  @click="next" type="primary">下一步</el-button>
                    </el-col>
                    <el-col :span="6">
                      <el-button type="text" style="float: right;" size="medium" @click="login()">已有账号?去登录</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
              </div>
              <div v-if="active===2">
                <el-form-item label="地址" prop="olderAddress" >
                  <el-input v-model="ruleForm.olderAddress"   placeholder="请输入地址" ></el-input>
                </el-form-item>
                <el-form-item label="健康状态" prop="olderState" >
                  <el-radio-group v-model="ruleForm.olderState">
                    <el-radio  :label="0">优</el-radio>
                    <el-radio :label="1">良</el-radio>
                    <el-radio  :label="2">一般</el-radio>
                    <el-radio :label="3">差</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="备注" prop="remarks" >
                  <el-input v-model="ruleForm.remarks"   placeholder="请输入备注" ></el-input>
                </el-form-item>
                <el-form-item label="选择图片" prop="olderPhotourl" >
                  <input type="file" @change="upData($event)" ref="InputFile" name="files" placeholder="请选择头像"/>
                </el-form-item>
                <el-form-item label="图片" prop="olderPhotourl" >
                  <img :src="baseurl+ruleForm.olderPhotourl" alt=""style="width: 30%;height: 40%"/>
                </el-form-item>
                <el-form-item >
                  <el-col :span="8">
                    <el-button  @click="back" type="primary">上一步</el-button>
                  </el-col>
                  <el-col :span="8">
                    <el-button type="primary" @click="submitForm('ruleForm')" >注册</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="text" style="float: right;" size="medium" @click="login()">已有账号?去登录</el-button>
                  </el-col>

                </el-form-item>
              </div>

            </el-form>
          </el-card>
        </div>
      </div>
    </div>

  </div>



</template>

<script>
  export default {
      inject:['reload'],
      props:["id"],
    data () {
        name:"olderedit"
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
        active:0,
        baseurl:"./static/older_photourl/",
        doUpload:"/older/fileUpload",
          ruleForm:{
            olderName:"",
            olderPassword:"",
            olderPhone:"",
            olderAge:"",
            olderState:"",
            olderSex:"",
            olderCard:"",
            olderAddress:"",
            remarks:"",
            olderPhotourl:"",
          },
        older:{
          olderName:""
        },
          rules: {
            olderName: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,
            olderSex: [
                { required: true, message: '请选择姓名', trigger: 'blur' },
            ] ,
            olderPassword: [
                { required: true, message: '请输入密码', trigger: 'blur' },
            ] ,
            olderPhone: [
              { required: true, trigger: 'blur',validator: checkPhone }//设置全局变量
            ] ,
            olderCard: [
              { required: true, trigger: 'blur',validator: checkcredentialsNum }//设置全局变量
            ]
        },
        fileList:[],
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("older/getOne",(data)=>{
                this.ruleForm=data;
                console.log(this.ruleForm);
            },{id:this.id});
            this.buttonText="修改"
        }

    },

    components: {

    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        let url = "";
        this.get("older/getAll",(data)=>{
            // this.admin.name=this.ruleForm.name;
            console.log("用户姓名"+this.ruleForm.name);
            console.log("用户姓名"+data);
            if(data.length>0){
              alert("该用户已存在");
              this.$router.push('/olderRegister');
            }else {
              url="older/add";
              this.post(formName,url,this.ruleForm);
              this.$router.push('/olderLogin');
            }
          },this.older);

      },
      upData(event) {
        var reader = new FileReader();
        let fileData = this.$refs.InputFile.files[0];
        reader.readAsDataURL(fileData);
        let _this = this;
        reader.onload = function (e) {
          //这里的数据可以使本地图片显示到页面
          _this.addimg = e.srcElement.result;
        };
        // 使用formapi打包
        let formData = new FormData();
        formData.append('file', fileData);
        this.axios.post('/older/fileUpload', formData).then(function (res) {
          console.log(res);
          _this.ruleForm.olderPhotourl = res.data;
          console.log(_this.ruleForm.olderPhotourl);
          // _this.addimgtijiao = res.data.path;
        });
      },
      /*步骤条*/
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      back(){
        if (this.active-- < 0) this.active = 0;
      },
      /*登录*/
      login(){
        this.$router.push('/olderLogin');
      },
      home(){
        this.$router.push('/');
      },


    }
  }

</script>

<style scoped>
  .wrap{
    display: flex;
    flex: 1;
    flex-direction:column;
    position: relative;
    padding: 50px 400px 0px 400px;

  }
  .lizi{
    width: 100%;
    height:100%;
    display: flex;
    flex: 1;
    flex-direction:column;
    position: absolute;
    background-color: #d0dfd9;
    /*background-image: url("../assets/img/register.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100%;*/
  }
</style>
