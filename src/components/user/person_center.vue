<!--20-1-6个人中心-Vanilla-->
<template>
  <div>
    <!--个人中心导航-->
    <el-container>
<!--      <el-aside style="width:200px;">-->
<!--            <el-menu-->
<!--              default-active="2"-->
<!--              class="el-menu-vertical-demo"-->
<!--              text-color="#fff"-->
<!--              @select="handleSelect"-->
<!--              style="height:100%;">-->
<!--              <el-menu-item index="体检管理" >-->
<!--                <router-link to="/examList" style="text-decoration: none">体检管理</router-link><br>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
<!--      </el-aside>-->
      <div style="width: 900px;margin-left: 4px">
<!--        <router-view></router-view>-->
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
        <!--诊断管理-->
        <el-card >
          <div slot="header" class="clearfix">
            <h1>诊断管理</h1>
          </div>
          <div v-for="item in diagnosiss">
            <el-card class="box-card" shadow="never" style="" >
              <div>
                <el-row>
                  <el-col :span="10">
                    <span>医&nbsp;院：{{item.diagnosisHospital}}</span>
                  </el-col>
                  <el-col :span="13" style="float: right">
                    <span style="float: right">检查日期：{{item.diagnosisDate | FormatDate('yyyy-MM-dd')}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>病情描述{{item.diagnosisRemarks}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>医嘱信息：{{item.diagnosisInformation}}</span>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <br>
          </div>
        </el-card>
        <br><br>
        <!--随访管理-->
        <el-card >
          <div slot="header" class="clearfix">
            <h1>随访管理</h1>
          </div>
          <div v-for="item in visitss">
            <el-card class="box-card" shadow="never" style="" >
              <div>
                <el-row>
                  <el-col :span="10">
                    <span>随访人：{{item.workerName}}</span>
                  </el-col>
                  <el-col :span="13" style="float: right">
                    <span style="float: right">随访日期：{{item.visitsDatetime | FormatDate('yyyy-MM-dd')}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>身体状态：{{item.bodyState}}</span>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <br>
          </div>
        </el-card>
        <br><br>
        <!--急救管理-->
        <el-card >
          <div slot="header" class="clearfix">
            <h1>急救管理</h1>
          </div>
          <div v-for="item in aids">
            <el-card class="box-card" shadow="never" style="" >
              <div>
                <el-row>
                  <el-col :span="10">
                    <span>急救原因：{{item.aidReason}}</span>
                  </el-col>
                  <el-col :span="13" style="float: right">
                    <span style="float: right">急救日期：{{item.aidDate | FormatDate('yyyy-MM-dd')}}</span>
                  </el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="10">
                    <span>备&nbsp;注：{{item.aidRemarks}}</span>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <br>
          </div>
        </el-card>
        <br><br>

      </div>
    </el-container>

  </div>

</template>

<script>
  import store from '@/vuex/store'
  import {mapMutations} from 'vuex'
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
      ...mapMutations(['SET_MENU']),
      handleSelect(key, keyPath) {
        this.SET_MENU(keyPath);
      },
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
    store
  }
</script>

<style scoped>
  .el-menu-item {
    color: #ffffff;
    background-color: #8a8783 !important;
  }
  .el-menu-item:hover {
    background-color:#333740!important;
    color: #009688;
    border-left: 3px solid #009688;
  }
  .el-menu{
    border-right: 0;
    background-color: #333744;
  }
  .el-menu--inline .el-menu-item:hover{
    padding-left:43px !important;
  }
</style>
