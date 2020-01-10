<style scoped>
  h2{
    padding: 30px;
    font-size: 18px;
  }
  #chart_example1{
    width: 850px;
    height: 400px;
    background-color: #ffffff;
    padding-top: 10px;
  }
  #chart_example2{
    width: 850px;
    height: 400px;
    background-color: #ffffff;
    padding-top: 10px;
  }
  #chart_example3{
    width: 850px;
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
    <div id="chart_example1" style="margin-top: 5px;"></div>
    <div id="chart_example2" style="margin-top: 5px;"></div>
    <div id="chart_example3" style="margin-top: 5px;"></div>

  </div>
</template>


<script>
  import echarts from 'echarts';
  export default {
    data () {
      return {
        search:{
          // roomTypeid:"",
          status:0
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
        console.log("老人id:"+this.exam1.olderId);
      },
      getData(){
        //统计图
        this.get("exam/getListByOlderId",(data)=>{
          console.log("统计了列表："+data.list);
          this.exam=data.list;
          let i=this.exam.length-1;
          let j=0;
          /*高/低血压统计*/
          const month=[],datam=[],datalow=[],dataglu=[],datahr=[];
          // for( i ; i<this.exam.length;i++){
          //   month.push(i+1);
          //   datam.push(this.exam[i].examHighbp);/*高压*/
          //   datalow.push(this.exam[i].examLowbp);/*低压*/
          //   dataglu.push(this.exam[i].examGlu);/*血糖*/
          //   datahr.push(this.exam[i].examHr);/*心率*/
          // }
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
                barWidth: '4%',
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
                barWidth: '4%',
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
                barWidth: '4%',
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
      }
    }
  }
</script>
<style>
  .el-table .cell {
    text-align: center;
  }
</style>

