<!--20-1-6老人个人中心-Vanilla-->
<template>
  <div>
      <div style="margin-left: 4px">
        <!--上-->
        <el-container >
          <el-main style="height: 650px;padding: 0;background-color: #FFFFFF">
              <!--家庭成员-->
              <el-card >
                <div slot="header" class="clearfix">
                  <el-row style="height: 25px">
                    <el-col :span="12">
                      <h1><i class="icon-duoyonghu-tianchong" style="font-size: 20px"></i>&nbsp;家庭成员({{older.olderName}})</h1>
                    </el-col>
                    <el-col :span="12">
                      <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addMember()">添加</el-button>
                    </el-col>
                  </el-row>
                </div>
                <div v-for="item in members">
                  <el-card class="box-card" shadow="never" style="" >
                    <div slot="header" class="clearfix">
                      <el-row style="height: 25px">
                        <el-col :span="12">
                          <h1>{{item.memberName}}</h1>
                        </el-col>
                        <el-col :span="12">
                          <el-button style="float: right;background-color:#e4f1ff " type="small" icon="el-icon-edit" @click="editMember(item)">编辑</el-button>
                        </el-col>
                      </el-row>
                    </div>
                    <div>
                      <el-row>
                        <el-col :span="8">
                          <span>性&nbsp;别：</span>
                          <i class="el-icon-male" v-if="item.memberSex===0" style="color: #6db8d1;width: 10px;height: 10px"></i>
                          <i class="el-icon-female" v-if="item.memberSex===1" style="color: #d176ca;width: 20px;height: 20px" ></i>
                        </el-col>
                        <el-col :span="16" >
                          <span>身份证：{{item.memberCard}}</span>
                        </el-col>
                      </el-row>
                      <br>
                      <el-row>
                        <el-col :span="8">
                          <span>年&nbsp;龄：&nbsp;{{item.memberAge}}</span>
                        </el-col>
                        <el-col :span="16" >
                          <span>手机号：{{item.memberPhone}}</span>
                        </el-col>
                      </el-row>
                      <br>
                      <el-row>
                        <el-col :span="8">
                          <span>与老人关系：{{item.memberAge}}</span>
                        </el-col>
                        <el-col :span="16" >
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
          </el-main>
          <el-main style="height: 650px;padding: 0;background-color: #FFFFFF">
            <!--体检-->
            <el-card >
              <div slot="header" class="clearfix">
                <el-row style="height: 25px">
                  <el-col :span="15">
                    <h1><i class="icon-jijiu" style="font-size: 20px"></i>&nbsp;体检管理</h1>
                  </el-col>
                  <el-col :span="5">
                    <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addExam()">添加</el-button>
                  </el-col>
                  <el-col :span="4">
                    <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addSum(item)">统计</el-button>
                  </el-col>
                </el-row>
              </div>
              <div v-for="item in exams">
                <el-card class="box-card" shadow="never" >
                  <div>
                    <el-row>
                      <el-col :span="7">
                        <span>身 高：{{item.examHeight}}</span>
                      </el-col>
                      <el-col :span="7">
                        <span>左眼视力：{{item.examRsight}}</span>
                      </el-col>
                      <el-col :span="10">
                        <span>高 压：{{item.examHighbp}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="7">
                        <span>体 重：{{item.examWeight}}</span>
                      </el-col>
                      <el-col :span="7">
                        <span>右眼视力：{{item.examLsight}}</span>
                      </el-col>
                      <el-col :span="10">
                        <span>低 压：{{item.examLowbp}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="7">
                        <span>血 糖：{{item.examGlu}}</span>
                      </el-col>
                      <el-col :span="7">
                        <span>心 率：{{item.examHr}}</span>
                      </el-col>
                      <el-col :span="10">
                        <span>体检时间：{{item.examDate | FormatDate('yyyy-MM-dd')}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="8">
                        <span>备注：{{item.remarks}}</span>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
                <br>
              </div>
            </el-card>
          </el-main>
        </el-container>
        <br>
        <el-container>
          <el-main style="height: 650px;padding: 10px;background-color: #FFFFFF;width: 550px">
            <!--诊断管理-->
            <el-card >
              <div slot="header" class="clearfix">
                <el-row style="height: 25px">
                  <el-col :span="12">
                    <h1><i class="icon-zhenduan" style="font-size: 20px"></i>&nbsp;诊断管理</h1>
                  </el-col>
                  <el-col :span="12">
                    <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addDiagnosis()">添加</el-button>
                  </el-col>
                </el-row>
              </div>
              <div v-for="item in diagnosiss">
                <el-card class="box-card" shadow="never" style="" >
                  <div>
                    <el-row>
                      <el-col>
                        <span>医&nbsp;院：{{item.diagnosisHospital}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col >
                        <span >检查日期：{{item.diagnosisDate | FormatDate('yyyy-MM-dd')}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col >
                        <span>病情描述：{{item.diagnosisRemarks}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col >
                        <span>医嘱信息：{{item.diagnosisInformation}}</span>
                      </el-col>

                    </el-row>
                    <br>
                    <el-row>
                      <el-col>
                        <el-button style="background-color:#e4f1ff;line-height: 20px " type="small" icon="el-icon-edit" @click="editDiagnosis(item)">编辑</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
                <br>
              </div>
            </el-card>
          </el-main >

          <el-main style="height: 650px;padding: 10px;background-color: #FFFFFF;width: 550px">
            <!--急救管理-->
            <el-card >
              <div slot="header" class="clearfix">
                <el-row style="height: 25px">
                  <el-col :span="12">
                    <h1><i class="icon-jijiu" style="font-size: 20px"></i>&nbsp;急救管理</h1>
                  </el-col>
                  <el-col :span="12">
                    <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addAid()">添加</el-button>
                  </el-col>
                </el-row>
              </div>
              <div v-for="item in aids">
                <el-card class="box-card" shadow="never" style="" >
                  <div>
                    <el-row>
                      <el-col >
                        <span>急救原因：{{item.aidReason}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col >
                        <span >急救日期：{{item.aidDate | FormatDate('yyyy-MM-dd')}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="10">
                        <span>备&nbsp;注：{{item.aidRemarks}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col :span="10">
                        <el-button style="background-color:#e4f1ff;line-height: 20px " type="small" icon="el-icon-edit" @click="editAid(item)">编辑</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
                <br>
              </div>
            </el-card>
          </el-main>
          <el-main style="height: 650px;padding: 10px;background-color: #FFFFFF;width: 550px">
            <!--      随访管理-->
            <el-card >
              <div slot="header" class="clearfix">
                <el-row style="height: 25px">
                  <el-col :span="12">
                    <h1><i class="icon-suifanghuanzhe" style="font-size: 20px"></i>&nbsp;随访管理</h1>
                  </el-col>
                  <el-col :span="12">
                    <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addVisits()">添加</el-button>
                  </el-col>
                </el-row>
              </div>
              <div v-for="item in visitss">
                <el-card class="box-card" shadow="never" style="" >
                  <div>
                    <el-row>
                      <el-col >
                        <span>随访人：{{item.workerName}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col>
                        <span >随访日期：{{item.visitsDatetime | FormatDate('yyyy-MM-dd')}}</span>
                      </el-col>
                    </el-row>
                    <br>
                    <el-row>
                      <el-col >
                        <span>身体状态：{{item.bodyState}}</span>
                      </el-col>
<!--                      <el-col :span="10">-->
<!--                        <el-button @click="download(item)" v-if="item.fileurl!==''&&item.fileurl!==null" style="color:#b3aa05" type="text" size="medium" icon="icon-xiazai2">附件</el-button>-->
<!--                      </el-col>-->
                    </el-row>
                    <el-row>
                      <el-button @click="download(item)" v-if="item.fileurl!==''&&item.fileurl!==null" style="color:#b3aa05" type="text" size="medium" icon="icon-xiazai2">附件</el-button>
                    </el-row>
                  </div>
                </el-card>
                <br>
              </div>
            </el-card>
          </el-main >
        </el-container>
        <br>
        <!--随访管理-->
<!--        <el-card >-->
<!--          <div slot="header" class="clearfix">-->
<!--            <h1>随访管理</h1>-->
<!--          </div>-->
<!--          <div v-for="item in visitss">-->
<!--            <el-card class="box-card" shadow="never" style="" >-->
<!--              <div>-->
<!--                <el-row>-->
<!--                  <el-col :span="10">-->
<!--                    <span>随访人：{{item.workerName}}</span>-->
<!--                  </el-col>-->
<!--                  <el-col :span="13" style="float: right">-->
<!--                    <span style="float: right">随访日期：{{item.visitsDatetime | FormatDate('yyyy-MM-dd')}}</span>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--                <br>-->
<!--                <el-row>-->
<!--                  <el-col :span="10">-->
<!--                    <span>身体状态：{{item.bodyState}}</span>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </div>-->
<!--            </el-card>-->
<!--            <br>-->
<!--          </div>-->
<!--        </el-card>-->

      </div>
  </div>

</template>

<script>
  import store from '@/vuex/store'
  import {mapMutations} from 'vuex'
  import AddMember from '@/components/member/edit'/*添加成员*/
  import EditMember from '@/components/member/edit'/*编辑成员*/
  import AddDiagnosis from '@/components/diagnosis/edit'/*添加诊断*/
  import EditDiagnosis from '@/components/diagnosis/edit'/*编辑诊断*/
  import AddAid from '@/components/aid/edit'/*添加急救*/
  import EditAid from '@/components/aid/edit'/*编辑急救*/
  import AddVisits from '@/components/visits/edit'/*添加随访*/
  import EditVisits from '@/components/visits/edit'/*编辑随访*/
  import AddExam from '@/components/exam/edit'/*添加体检*/
  import AddSum from '@/components/older/exam_sum'/*统计*/
  export default {
    inject:['reload'],
    name:"person_center",
    props:["id"],
    data () {
      return {
        members:[],
        exams:[],
        diagnosiss:[],
        visitss:[],
        aids:[],
        older:{
          id:"",
          olderPhotourl:"",
          olderPhotourl:"",
        },
        url:""
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
    methods: {
      ...mapMutations(['SET_MENU']),
      handleSelect(key, keyPath) {
        this.SET_MENU(keyPath);
      },
      /*获取数据*/
      getData() {
        this.older.id = this.$route.params.id;
        // this.id=this.older.id;
        console.log("老人id" + this.older.id);
        this.get("older/getAllInformation", (data) => {
          this.members = data.members;
          this.exams = data.exams;
          this.diagnosiss = data.diagnosiss;
          this.visitss = data.visitss;
          this.aids = data.aids;
          this.older = data.older[0];
          console.log(this.older);
        }, this.older);
        this.url = "./static/older_photourl/" + this.older.olderPhotourl;
      },
      edit() {
        this.$router.push('/olderEdit/' + this.older.id);
      },
      /*添加成员*/
      addMember() {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddMember, //传递的组件对象
            parent: this,//当前的vue对象
            data: {olderId: this.older.id, olderName: this.older.olderName}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*编辑成员*/
      editMember(item) {
        console.log("成员id" + item.id);
        this.$layer.iframe({
          type: 2,
          content: {
            content: EditMember, //传递的组件对象
            parent: this,//当前的vue对象
            data: {id: item.id}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*添加诊断*/
      addDiagnosis() {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddDiagnosis, //传递的组件对象
            parent: this,//当前的vue对象
            data: {olderId: this.older.id, olderName: this.older.olderName}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*编辑诊断*/
      editDiagnosis(item) {
        this.$layer.iframe({
          type: 2,
          content: {
            content: EditDiagnosis, //传递的组件对象
            parent: this,//当前的vue对象
            data: {id: item.id}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*添加急救*/
      addAid() {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddAid, //传递的组件对象
            parent: this,//当前的vue对象
            data: {olderId: this.older.id, olderName: this.older.olderName}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*编辑急救*/
      editAid(item) {
        this.$layer.iframe({
          type: 2,
          content: {
            content: EditAid, //传递的组件对象
            parent: this,//当前的vue对象
            data: {id: item.id}//props
          },
          area: ['800px', '600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade: true
        });
      },
      /*添加随访*/
      addVisits() {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddVisits, //传递的组件对象
            parent: this,//当前的vue对象
            data: {olderId: this.older.id, olderName: this.older.olderName}//props
          },
          area: ['800px', '600px'],
          title: '添加随访信息',
          shadeClose: false,
          shade: true
        });
      },
      /*编辑随访*/
      editVisits(item) {
        this.$layer.iframe({
          type: 2,
          content: {
            content: EditVisits, //传递的组件对象
            parent: this,//当前的vue对象
            data: {id: item.id}//props
          },
          area: ['800px', '600px'],
          title: '添加随访信息',
          shadeClose: false,
          shade: true
        });
      },
      /*添加体检信息*/
      addExam() {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddExam, //传递的组件对象
            parent: this,//当前的vue对象
            data: {olderId: this.older.olderId, olderName: this.older.olderName}//props
          },
          area: ['800px', '600px'],
          title: '添加体检信息',
          shadeClose: false,
          shade: true
        });
      },
      /*统计*/
      addSum(item) {
        this.$layer.iframe({
          type: 2,
          content: {
            content: AddSum, //传递的组件对象
            parent: this,//当前的vue对象
            data: {id: this.older.id}//props
          },
          area: ['800px', '600px'],
          title: '统计',
          shadeClose: false,
          shade: true
        });
      },
      /*下载附件*/
      download(row){
        let a = document.createElement('a');
        a.href = '/./static/visits_exam/'+row.fileurl;
        a.click();
      }
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
    /*老人基本信息样式*/
    .row_style {
    margin-left: 50px;
  }
  .span_style{
    color: #2b3833;
    font-size: 20px;
    line-height: 50px
  }

</style>
