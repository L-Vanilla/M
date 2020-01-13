<!--20-1-5查看个人信息---Vanilla-->
<template>
  <div style="margin-left: 40px">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <el-form-item label="性 别：" prop="olderSex" >
          <span v-if="ruleForm.olderSex===0">男</span>
          <span v-if="ruleForm.olderSex===1">女</span>
        </el-form-item>
        <el-form-item label="年 龄：" prop="olderAge" >
          <span>{{ruleForm.olderAge}}</span>
        </el-form-item>
        <el-form-item label="手机号：" prop="olderPhone" >
          <span>{{ruleForm.olderPhone}}</span>
<!--            <el-input v-model="ruleForm.olderPhone"   style="width:50%" disabled></el-input>-->
        </el-form-item>
        <el-form-item label="身份证：" prop="olderCard" >
          <span>{{ruleForm.olderCard}}</span>
<!--          <el-input v-model="ruleForm.olderCard"   style="width:50%" disabled></el-input>-->
        </el-form-item>
        <el-form-item label="地 址：" prop="olderAddress" >
          <span>{{ruleForm.olderAddress}}</span>
<!--          <el-input v-model="ruleForm.olderAddress"   style="width:50%" disabled></el-input>-->
        </el-form-item>
        <el-form-item label="健康状态：" prop="olderBmi" >
          <span v-if="ruleForm.olderBmi>=1200">优</span>
          <span v-else-if="800<=ruleForm.olderBmi&&ruleForm.olderBmi<1200">良</span>
          <span v-else-if="600<=ruleForm.olderBmi&&ruleForm.olderBmi<800">一般</span>
          <span v-else-if="ruleForm.olderBmi<600">差</span>
        </el-form-item>
        <el-form-item label="备注：" prop="remarks" >
          <span>{{ruleForm.remarks}}</span>
<!--          <el-input v-model="ruleForm.remarks"  style="width:50%" disabled></el-input>-->
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
      inject:['reload'],
    data () {
        name:"olderedit"
      return {
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
            olderBmi:"",
          },
        fileList:[],
        buttonText:"创建"

      }
    },
    created(){
      // 获取首页传来的老人id
        var list = JSON.parse(localStorage.getItem("older") || '[]');
        this.ruleForm.id=list.id;
        console.log("id"+this.ruleForm.id);
           this.get("older/getOne",(data)=>{
              this.ruleForm=data;
              console.log(this.ruleForm);
          },{id:this.ruleForm.id});

    },
    components: {

    },
    methods:{

    }
  }

</script>

<style >

</style>
