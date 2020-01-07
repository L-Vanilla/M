<!--20-1-3体检信息添加，修改---Vanilla-->
<template>
  <div style="margin-top: 15px;">
      <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
          <el-col :span="10">
            <el-form-item prop="olderId" label="老人id">
              <el-input v-model="ruleForm.olderId" style="width:50%"  disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-form-item prop="olderName" label="老人姓名">
              <el-input v-model="ruleForm.olderName"  style="width:50%"  disabled></el-input>
            </el-form-item>
          </el-col>
       <el-row>
         <el-col :span="10">
           <el-form-item label="身高" prop="examHeight">
             <el-input-number v-model="ruleForm.examHeight" controls-position="right" :min="140" style="width:50%" ></el-input-number>
<!--             <el-input v-model="ruleForm.examHeight" style="width:50%" placeholder="请输入..." type="number" >-->
<!--&lt;!&ndash;               <span slot="append">cm</span>&ndash;&gt;-->
<!--             </el-input>-->
             <span  style="border: none;background-color:#ffffff;font-size: 15px">cm</span>
           </el-form-item>
         </el-col>
         <el-col class="line" :span="8"></el-col>
         <el-col :span="11">
           <el-form-item label="体重" prop="examWeight" >
             <el-input-number v-model="ruleForm.examWeight" controls-position="right" style="width:50%" :min="20"></el-input-number>
<!--             <el-input v-model="ruleForm.examWeight" style="width:50%"  placeholder="请输入..." >-->
<!--&lt;!&ndash;               <span slot="append">kg</span>&ndash;&gt;-->
<!--             </el-input>-->
             <span  style="border: none;background-color:#ffffff;font-size: 15px">kg</span>
           </el-form-item>
         </el-col>
       </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="右眼视力" prop="examRsight" >
              <el-input-number v-model="ruleForm.examRsight" :precision="1" :step="0.1" controls-position="right" style="width:50%" :min="1.0"></el-input-number>
<!--              <el-input v-model="ruleForm.examRsight"   placeholder="请输入..." style="width:50%"></el-input>-->
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-form-item label="左眼视力" prop="examLsight" >
              <el-input-number v-model="ruleForm.examLsight" :precision="1" :step="0.1" controls-position="right" style="width:50%" :min="1.0"></el-input-number>
<!--              <el-input v-model="ruleForm.examLsight"   placeholder="请输入..." style="width:50%"></el-input>-->
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="高压" prop="examHighbp" >
              <el-input-number v-model="ruleForm.examHighbp" controls-position="right" style="width:50%" :min="50" :max="220"></el-input-number>
<!--              <el-input v-model="ruleForm.examHighbp"   placeholder="请输入..." style="width:50%">-->
<!--&lt;!&ndash;                <span slot="append">mmHg</span>&ndash;&gt;-->
<!--              </el-input>-->
              <span  style="border: none;background-color:#ffffff;font-size: 15px">mmHg</span>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-form-item label="低压" prop="examLowbp" >
              <el-input-number v-model="ruleForm.examLowbp" controls-position="right" style="width:50%" :min="40" :max="120"></el-input-number>
<!--              <el-input v-model="ruleForm.examLowbp"   placeholder="请输入..." style="width:50%">-->
<!--&lt;!&ndash;                <span slot="append">mmHg</span>&ndash;&gt;-->
<!--              </el-input>-->
              <span  style="border: none;background-color:#ffffff;font-size: 15px">mmHg</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="血糖" prop="examGlu" >
              <el-input-number v-model="ruleForm.examGlu" :precision="1" :step="0.1" controls-position="right" style="width:50%" :min="1.0"></el-input-number>
<!--              <el-input v-model="ruleForm.examGlu"   placeholder="请输入..." style="width:50%"></el-input>-->
              <span  style="border: none;background-color:#ffffff;font-size: 15px">mmd/L</span>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-form-item label="心率" prop="examHr" >
              <el-input-number v-model="ruleForm.examHr" controls-position="right" style="width:50%" :min="30"></el-input-number>
<!--              <el-input v-model="ruleForm.examHr"   placeholder="请输入..." style="width:50%"></el-input>-->
<!--              <span  style="border: none;background-color:#ffffff;font-size: 15px">次/分</span>-->
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="备注" prop="remarks" >
            <el-input v-model="ruleForm.remarks"   placeholder="请输入..." style="width:50%"></el-input>
        </el-form-item>
        <el-form-item label="诊断时间" prop="examDate" >
          <el-date-picker
            v-model="ruleForm.examDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
<!--          <el-input v-model="ruleForm.examDate"   placeholder="请输入年龄" style="width:200%"></el-input>-->
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
        name:"examedit"
      return {
        doUpload:"/exam/fileUpload",
          ruleForm:{
            olderId:"",
            olderName:"",
            examHeight:"",
            examWeight:"",
            examRsight:"",
            examLsight:"",
            examHighbp:"",
            examLowbp:"",
            examGlu:"",
            examHr:"",
            remarks:"",
            examDate:"",
          },
          rules: {
           /* examHeight: [
                { required: true, message: '请输入...', trigger: 'blur'},
                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
            ] ,*/

        },
        buttonText:"创建"

      }
    },
    created(){
        if(this.id){
             this.get("exam/getOne",(data)=>{
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
                url="exam/update";
            else
                url="exam/add";
            this.post(formName,url,this.ruleForm);
        },
    }
  }

</script>

<style scoped>
  .el-input-group__append{
    padding: 0 10px;
    background-color: #ffffff;
    color: #229932;
  }

</style>
