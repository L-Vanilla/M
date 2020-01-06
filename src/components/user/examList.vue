<!--20-1-6体检信息-Vanilla-->
<template>
  <div>
        <!--家庭成员-->
        <el-card >
          <div slot="header" class="clearfix">
            <h1>家庭成员</h1>
          </div>
          <div v-for="item in members">
            <el-card class="box-card" shadow="never" style="" >
              <div slot="header" class="clearfix">
                <h1>{{item.memberName}}</h1>
              </div>
              <div>
                <el-row>
                  <el-col :span="10">
                    <span>性&nbsp;别：</span>
                    <i class="el-icon-male" v-if="item.memberSex===0" style="color: #6db8d1;width: 10px;height: 10px"></i>
                    <i class="el-icon-female" v-if="item.memberSex===1" style="color: #d176ca;width: 20px;height: 20px" ></i>
                  </el-col>
                  <el-col :span="10" >
                    <span>身份证：{{item.memberCard}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>年&nbsp;龄：&nbsp;{{item.memberAge}}</span>
                  </el-col>
                  <el-col :span="10" >
                    <span>手机号：{{item.memberCard}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>与老人关系：{{item.memberAge}}</span>
                  </el-col>
                  <el-col :span="10" >
                    <span>地&nbsp;址：{{item.memberAddress}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <span>备&nbsp;注：{{item.remarks}}</span>
                </el-row>
              </div>
            </el-card>
            <br>
          </div>
        </el-card>
        <br><br>
  </div>

</template>

<script>
  export default {
    inject:['reload'],
    name:"person_center",
    data () {
      return {
        members:[],
        exams:[],
        diagnosiss:[],
        visitss:[],
        aids:[],
        older:[]
        // cares:[],
        // news:[]
      }
    },
    created(){
      this.getData();
    },
    watch:{

    },
    mounted(){},
    methods:{
      /*获取数据*/
      getData(){
        /*获取老人数据*/
        var list = JSON.parse(localStorage.getItem("older") || '[]');
        this.older = list;
        // this.id=this.older.id;
        console.log("老人id"+this.older.id);
        this.get("older/getAllInformation",(data)=>{
          this.members=data.members;
          this.exams=data.exams;
          this.diagnosiss=data.diagnosiss;
          this.visitss=data.visitss;
          this.aids=data.aids;
          console.log(this.members);
        },this.older);
      },
    },
  }
</script>

<style scoped>

</style>
