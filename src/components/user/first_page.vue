<!--首页--Vanilla-->
<template>
  <div>
    <div style="background-color: #FFFFFF">
      <el-row>
        <el-col :span="12">
          <!--轮播图-->
          <el-carousel style="height:300px;width: 500px;padding: 30px" >
            <br>
            <el-carousel-item v-for="item in lists" :key="item" style="height:300px;width: 500px" >
              <el-image :src="item" style="height:300px;width: 500px" ></el-image>
              <!--            <h3 class="small">{{ item }}</h3>-->
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <!--站内新闻-->
        <el-col :span="12">
          <el-card style="width: 530px;border: none" shadow="never">
            <div slot="header" style="padding: 11px 11px">
              <el-row>
                <el-col :span="12">
                  <span class="news">站内新闻</span>
                </el-col>
                <el-col :span="12">
                  <el-button icon="el-icon-d-arrow-right" type="text" style="float: right;color:#4ca9ff " @click="moreNews()">更多</el-button>
                </el-col>
              </el-row>
            </div>
            <el-table
              :data="tableData.list"
              style="width: 100%"
              @row-click="rowClick"
              :show-header="false">
              <el-table-column
                width="280px"
                prop="title"
                style="text-align: left;"
                label="站内新闻">
                <!-- <template slot-scope="scope">
                   <span  class="mr15">{{scope.row.title}}</span>
                 </template>-->
              </el-table-column>
              <!-- <el-table-column
                 prop="clickNum"
                 label="点击率"
                 width="100"
                 style="float: right">
               </el-table-column>-->
              <el-table-column
                prop="createDate"
                style="text-align: right;">
                <!-- <template slot-scope="scope">
                   <span class="mr15">{{scope.row.createDate}}</span>
                 </template>-->
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <!--养生保健-->
          <el-card style="width: 530px;border: none" shadow="never">
            <div slot="header" style="padding: 11px 11px">
              <el-col :span="12">
                <span class="news">养生保健</span>
              </el-col>
              <el-col :span="12">
                <el-button icon="el-icon-d-arrow-right" type="text" style="float: right;color:#4ca9ff " @click="moreCares()">更多</el-button>
              </el-col>
            </div>
            <el-table
              :data="cares.list"
              style="width: 100%"
              @row-click="rowClick_cares"
              :show-header="false">
              <el-table-column
                width="250px"
                prop="title"
                style="text-align: left;"
                label="养生保健">
                <!-- <template slot-scope="scope">
                   <span  class="mr15">{{scope.row.title}}</span>
                 </template>-->
              </el-table-column>
              <!-- <el-table-column
                 prop="clickNum"
                 label="点击率"
                 width="100"
                 style="float: right">
               </el-table-column>-->
              <el-table-column
                prop="createDate"
                style="text-align: right;">
                <!-- <template slot-scope="scope">
                   <span class="mr15">{{scope.row.createDate}}</span>
                 </template>-->
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <!--预防知识-->
          <el-card style="width: 530px;border: none" shadow="never">
            <div slot="header" style="padding: 11px 11px">
              <el-col :span="12">
                <span class="news">预防知识</span>
              </el-col>
              <el-col :span="12">
                <el-button icon="el-icon-d-arrow-right" type="text" style="float: right;color:#4ca9ff " @click="morePreventions()">更多</el-button>
              </el-col>
            </div>
            <el-table
              :data="preventions.list"
              style="width: 100%"
              @row-click="rowClick_cares"
              :show-header="false">
              <el-table-column
                width="280px"
                prop="title"
                style="text-align: left;"
                label="预防知识">
                <!-- <template slot-scope="scope">
                   <span  class="mr15">{{scope.row.title}}</span>
                 </template>-->
              </el-table-column>
              <!-- <el-table-column
                 prop="clickNum"
                 label="点击率"
                 width="100"
                 style="float: right">
               </el-table-column>-->
              <el-table-column
                prop="createDate"
                style="text-align: right;">
                <!-- <template slot-scope="scope">
                   <span class="mr15">{{scope.row.createDate}}</span>
                 </template>-->
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row> <el-row>
        <el-col :span="12">
          <!--健康教育-->
          <el-card style="width: 530px;border: none" shadow="never">
            <div slot="header" style="padding: 11px 11px">
              <el-col :span="12">
                <span class="news">健康教育</span>
              </el-col>
              <el-col :span="12">
                <el-button icon="el-icon-d-arrow-right" type="text" style="float: right;color:#4ca9ff " @click="moreEducations()">更多</el-button>
              </el-col>
            </div>
            <el-table
              :data="educations.list"
              style="width: 100%"
              @row-click="rowClick_cares"
              :show-header="false">
              <el-table-column
                width="280px"
                prop="title"
                style="text-align: left;"
                label="健康教育">
                <!-- <template slot-scope="scope">
                   <span  class="mr15">{{scope.row.title}}</span>
                 </template>-->
              </el-table-column>
              <!-- <el-table-column
                 prop="clickNum"
                 label="点击率"
                 width="100"
                 style="float: right">
               </el-table-column>-->
              <el-table-column
                prop="createDate"
                style="text-align: right;">
                <!-- <template slot-scope="scope">
                   <span class="mr15">{{scope.row.createDate}}</span>
                 </template>-->
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <!--公告-->
          <el-card style="width: 530px;border: none" shadow="never">
            <div slot="header" style="padding: 11px 11px">
              <el-col :span="12">
                <span class="news">公告</span>
              </el-col>
              <el-col :span="12">
<!--                <el-button icon="el-icon-d-arrow-right" type="text" style="float: right;color:#4ca9ff " @click="moreEducations()">更多</el-button>-->
              </el-col>
            </div>
            <el-table
              :data="notices.list"
              style="width: 100%"
              @row-click="rowClick_notices"
              :show-header="false">
              <el-table-column
                width="280px"
                prop="title"
                style="text-align: left;"
                label="">
                <!-- <template slot-scope="scope">
                   <span  class="mr15">{{scope.row.title}}</span>
                 </template>-->
              </el-table-column>
              <!-- <el-table-column
                 prop="clickNum"
                 label="点击率"
                 width="100"
                 style="float: right">
               </el-table-column>-->
              <el-table-column
                prop="createDate"
                style="text-align: right;">
                <!-- <template slot-scope="scope">
                   <span class="mr15">{{scope.row.createDate}}</span>
                 </template>-->
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>



    </div>




    <br><br>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import DetailsNotice from '@/components/notice/details'

  export default {
    inject:['reload'],
    name:"first_page",
    data () {
      return {
        /*轮播图*/
        lists:[
          "../static/img/beijing.jpg",
          "../static/img/beijing1.jpg",
          "../static/img/beijing3.jpg",
          "../static/img/beijing2.jpg",
        ],
        search:{
          title:""
        },
        queryParams:{
          pageNo:1,
          pageSize:5,
          title:""
        },
        tableData:{},
        cares:{},
        preventions:{},
        educations:{},
        notices:{},
        // cares:[],
        // news:[]
      }
    },
    created(){
      this.getData();
    },
    watch:{
      queryParams:{
        handler:function(){
          this.getData();
        },
        deep:true
      }
    },
    mounted(){},
    methods:{
      getData(){
        /*获取所有新闻和其他动态信息*/
        this.get("news/getAllInformation",(data)=>{
          this.tableData=data.newss;
          this.cares=data.cares;
          this.preventions=data.preventions;
          this.educations=data.educations;
          this.notices=data.notices;
          console.log(this.cares);
        },this.queryParams);

      },

      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      findData(){
        this.queryParams.pageNo=1;
        this.merge(this.search,this.queryParams);
      },
      /* seeDetails(row){
         this.$router.push("/newsDetails/" + row.id);
       },*/
      rowClick(row,column,event){
        this.get("news/updateClickNum",(data)=>{

        },{id:row.id,clickNum: row.clickNum+1});
        this.$router.push("/newsDetails/" + row.id);
      },
      rowClick_cares(row,column,event){
        this.get("healthCare/updateClickNum",(data)=>{

        },{id:row.id,clickNum: row.clickNum+1});
        this.$router.push("/healthCareDetails/" + row.id+"/"+row.hType);
      },
      /*查看公告*/
      rowClick_notices(row,column,event){
        this.$layer.iframe({
          content: {
            content: DetailsNotice, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','600px'],
          title: '查看内容',
          shadeClose: false,
          shade :true
        });
      },
      /*更多新闻*/
      moreNews(){
        this.$router.push("/newsList");

      },
      /*更多养生保健*/
      moreCares(){
        this.$router.push("/care_List");

      },
      /*更多预防知识*/
      morePreventions(){
        this.$router.push("/prevention_List");

      },
      /*更多健身教育*/
      moreEducations(){
        this.$router.push("/education_List");

      }
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*站内新闻样式*/
  .news{
    float: left;
    padding-bottom: 10px;
    border-bottom: 3px solid #4ca9ff;
    color: #4ca9ff;

  }
</style>
