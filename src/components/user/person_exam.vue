<style scoped>
  h2{
    padding: 30px;
    font-size: 18px;
  }
  #chart_example1{
    width: 500px;
    height: 400px;
    background-color: #ffffff;
    padding-top: 10px;
  }
  #chart_example2{
    width: 500px;
    height: 400px;
    background-color: #ffffff;
  }
  #chart_example3{
    width: 500px;
    height: 400px;
    background-color: #ffffff;
    padding-top: 10px;
  }
  #chart_example4{
    width: 600px;
    height: 400px;
    background-color: #ffffff;
    padding-top: 10px;
  }

</style>

<template>
  <div>
<!--    <div style="display:inline-block;margin-top: 10px">-->
<!--      <div id="chart_example3" style="display:inline-block;"></div>-->
<!--    </div>-->
<!--    <div style="display:inline-block;margin-top: 10px">-->
<!--      <div id="chart_example1" style="display:inline-block;"></div>-->
<!--      <div id="chart_example2" style="display:inline-block;margin-left: 5px;"></div>-->
<!--    </div>-->
    <!--急救管理-->
    <el-container style="background-color: #FFFFFF">
      <el-main style="height: 1300px">
        <!--体检-->
        <el-card >
          <div slot="header" class="clearfix">
            <el-row style="height: 25px">
              <el-col :span="12">
                <h1><i class="icon-jijiu" style="font-size: 20px"></i>&nbsp;体检管理</h1>
              </el-col>
              <el-col :span="12">
                <el-button style="float: right;background-color:#e4f1ff " type="small" @click="addExam()">添加</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-for="item in tabledata.list">
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
      <el-main ><!--随访-->
       <div id="chart_example2" style="margin-top: 5px;"></div>
        <!--心率变化-->
        <div id="chart_example3" style="margin-top: 5px;"></div>
        <!--高低压变化-->
        <div id="chart_example1" style="margin-top: 5px;"></div>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
      </el-main>
    </el-container>
    <div>
      <el-row>
        <el-col :span="12">
          <!--血糖变化-->
<!--          <div id="chart_example2" style="margin-top: 5px;"></div>-->
        </el-col>
        <el-col :span="12">

        </el-col>
      </el-row>
    </div>

  </div>
</template>


<script>
  import echarts from 'echarts';
  import AddExam from '@/components/exam/edit'/*添加体检*/
  export default {
    data () {
      return {
        search:{
          // roomTypeid:"",
          status:0
        },
        tabledata:{},
        visits:{

        },
        exam1:{
          olderId:"",
          pageNo:1,
          pageSize:10,
        },exam:{

        }
        // tableData:{},
        // guestTypes:{}
      }
    },
    mounted() {},
    watch: {
      search:{
        handler:function(){
          this.getData();
        },
        deep:true
      }
    },
    created(){
      this.getData();
      /*加载登录老人信息*/
      this.loadUser();
    },
    methods:{
      findData(){
        this.getData();
      },
      loadUser(){
        var list = JSON.parse(localStorage.getItem("older") || '[]');
        this.exam1.olderId = list.id;
        this.exam1.olderName = list.olderName;
        console.log("老人id:"+this.exam1.olderId);
      },
      getData(){
        //体检
        this.get("exam/list",(data)=>{
          this.tabledata=data;
          console.log(this.tabledata);
        },this.exam1);
        //随访
        this.get("visits/list",(data)=>{
          this.visits=data;
          console.log(this.visits);
        },this.exam1);

        //统计图
        this.get("exam/getListByOlderId",(data)=>{
          console.log("统计了列表："+data.list);
          this.exam=data.list;
          let i=this.exam.length-1;
          let j=0;
          /*高/低血压统计*/
          const month=[],datam=[],datalow=[],dataglu=[],datahr=[];
          for( i ; i>-1;i--){
            datam.push(this.exam[i].examHighbp);/*高压*/
            datalow.push(this.exam[i].examLowbp);/*低压*/
            dataglu.push(this.exam[i].examGlu);/*血糖*/
            datahr.push(this.exam[i].examHr);/*心率*/
          }
          for (j ;j<this.exam.length; j++) {
            month.push(j+1);
          }
          /*高/低血压统计表*/
          let myChart1 = echarts.init(document.getElementById('chart_example1'));
          /*血糖统计*/
          let myChart2 = echarts.init(document.getElementById('chart_example2'));
          /*心率统计*/
          let myChart3 = echarts.init(document.getElementById('chart_example3'));
          // let myChart4 = echarts.init(document.getElementById('chart_example4'));

          /*高/低血压统计*/
          let option1 = {
            title: {
              text: '高低压浓度变化'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['高压', '低压']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis : [
              {
                type : 'category',
                data : month,
                name:'次数',
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                name:'浓度值(mmHg)',
                type : 'value'
              }
            ],
            series : [
              {
                name:'高压',
                type:'line',
                // barWidth: '4%',
                data:datam,
                label: {
                  normal: {
                    fontSize:20,
                    show: true,
                  }
                },
              },
              {
                name:'低压',
                type:'line',
                // barWidth: '4%',
                data:datalow,
                label: {
                  normal: {
                    fontSize:20,
                    show: true,
                  }
                },
              }
            ]
          };
          /*血糖统计*/
          let option2 = {
            title: {
              text: '血糖浓度变化'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['血糖']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis : [
              {
                type : 'category',
                data : month,
                name:'次数',
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                name:'浓度值(mmd/L)',
                type : 'value'
              }
            ],
            series : [
              {
                name:'血糖',
                type:'line',
                barWidth: '4%',
                data:dataglu,
                label: {
                  normal: {
                    fontSize:20,
                    show: true,
                  }
                },
              },
            ]
          };
          /*心率统计*/
          let option3 = {
            title: {
              text: '心率变化'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['心率']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis : [
              {
                type : 'category',
                data : month,
                name:'次数',
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                name:'浓度值(分/次)',
                type : 'value'
              }
            ],
            series : [
              {
                name:'心率',
                type:'line',
                // barWidth: '4%',
                data:datahr,
                label: {
                  normal: {
                    fontSize:20,
                    show: true,
                  }
                },
              },
            ]
          };
          /*高/低血压统计*/
          myChart1.setOption(option1);
          window.addEventListener('resize',function() {myChart1.resize()});
          /*血糖浓度变化*/
          myChart2.setOption(option2);
          window.addEventListener('resize',function() {myChart2.resize()});
          /*心率变化*/
          myChart3.setOption(option3);
          window.addEventListener('resize',function() {myChart3.resize()});
          // myChart4.setOption(option4);
          // window.addEventListener('resize',function() {myChart4.resize()});
        },this.exam1);
      },
      /*添加体检信息*/
      addExam(){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddExam, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:this.exam1.olderId,olderName:this.exam1.olderName}//props
          },
          area:['800px','600px'],
          title: '添加体检信息',
          shadeClose: false,
          shade :true
        });
      },
      /*下载文件*/
      download(item){
        let a = document.createElement('a');
        a.href = '/./static/visits_exam/'+item.fileurl;
        a.click();
      }
    }
  }
</script>
<style>
  .el-table .cell {
    text-align: center;
  }
</style>

