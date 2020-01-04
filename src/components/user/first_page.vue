<!--首页--Vanilla-->
<template>
  <div>
    <!--<div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        &lt;!&ndash;        <el-col :span="2"><el-button style="background-color: #17B3A3;color: #fff" @click="add">添加</el-button></el-col>&ndash;&gt;
        <el-col :span="22">
          <el-input placeholder="请输入新闻标题" v-model="search.title" class="input-with-select" style="width: 200px">
            <el-button slot="append" icon="el-icon-search" @click="findData"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>-->

    <!--  <div style="margin-left: 5%;width: 80%" v-for="item in news" >
        <div class="left">
          <el-link href="https://element.eleme.io" target="_blank" v-model="item.title">{{item.title}}</el-link>
        </div>
        <div class="right">
          {{item.createDate}}
        </div>
        <div class="center">
          {{item.clickNum}}
        </div>
         &lt;!&ndash; <el-row style="width: 100%">


          </el-row>&ndash;&gt;
      </div>-->
<!--站内新闻-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>站内新闻</span>
      </div>
      <el-table
        :data="tableData.list"
        style="width: 100%"
        @row-click="rowClick"
        :show-header="false">
        <el-table-column
          width="480px"
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

    <br><br>
    <!--养生保健-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>养生保健</span>
      </div>
      <el-table
        :data="cares.list"
        style="width: 100%"
        @row-click="rowClick_cares"
        :show-header="false">
        <el-table-column
          width="480px"
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
    <br><br>
    <!--预防知识-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>预防知识</span>
      </div>
      <el-table
        :data="preventions.list"
        style="width: 100%"
        @row-click="rowClick_cares"
        :show-header="false">
        <el-table-column
          width="480px"
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
    <br><br>
    <!--健康教育-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>健康教育</span>
      </div>
      <el-table
        :data="educations.list"
        style="width: 100%"
        @row-click="rowClick_cares"
        :show-header="false">
        <el-table-column
          width="480px"
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
    <br><br>

<!--    <el-pagination-->
<!--      background-->
<!--      layout="prev, pager, next,total"-->
<!--      :total="tableData.total"-->
<!--      :current-page="this.queryParams.pageNo"-->
<!--      :page-size="this.queryParams.pageSize"-->
<!--      @current-change="changePageNo">-->
<!--    </el-pagination>-->
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    name:"first_page",
    data () {
      return {
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

        this.get("news/getAllInformation",(data)=>{
          this.tableData=data.newss;
          this.cares=data.cares;
          this.preventions=data.preventions;
          this.educations=data.educations;
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
        this.$router.push("/newsDetails/" + row.id);
      },
      rowClick_cares(row,column,event){
        this.$router.push("/healthCareDetails/" + row.id);
      },
    }
  }
</script>

<style scoped>

</style>
