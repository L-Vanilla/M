<!--20-1-2老人详情-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <el-form-item label="姓名" prop="olderName" >
            <el-input v-model="ruleForm.olderName" style="width:50%"  disabled></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="olderSex" >
          <el-radio-group v-model="ruleForm.olderSex" disabled>
            <el-radio  :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="olderAge" >
          <el-input v-model="ruleForm.olderAge"    style="width:50%" type="number" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="olderPhone" >
            <el-input v-model="ruleForm.olderPhone"   style="width:50%" disabled></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="olderCard" >
          <el-input v-model="ruleForm.olderCard"   style="width:50%" disabled></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="olderAddress" >
          <el-input v-model="ruleForm.olderAddress"   style="width:50%" disabled></el-input>
        </el-form-item>
        <el-form-item label="健康状态" prop="olderState" >
          <el-radio-group v-model="ruleForm.olderState" disabled >
            <el-radio  :label="0" v-model="ruleForm.olderState">优</el-radio>
            <el-radio :label="1" v-model="ruleForm.olderState">良</el-radio>
            <el-radio  :label="2" v-model="ruleForm.olderState">一般</el-radio>
            <el-radio :label="3" v-model="ruleForm.olderState">差</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remarks" >
          <el-input v-model="ruleForm.remarks"  style="width:50%" disabled></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="olderPhotourl" >
          <img :src="baseurl+ruleForm.olderPhotourl" alt=""style="width: 30%;height: 40%"/>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
      inject:['reload'],
      props:["id"],
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
    methods:{

    }
  }

</script>

<style >

</style>
