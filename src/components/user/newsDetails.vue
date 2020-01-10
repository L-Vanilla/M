<!--2019-12-21新闻详情---Vanilla-->
<template>
  <div>
    <div style="" class="news" >
      <!--文章列表-->
      <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm"  >
        <el-form-item label="" prop="title" style="width:700px;margin-top: 20px">
          <h1 style="text-align: left;font-size: 30px;margin-top: 20px;line-height: 30px">{{ruleForm.title}}</h1>
          <el-row style="margin-top: 20px">
            <el-col :span="5" style="float:contour">
              <span style="background-color: #ff99ab">原创</span>
              <span>{{ruleForm.publisherName}}</span>
            </el-col>
            <el-col :span="5">
              <span style="color: #a7c2ce">阅读数&nbsp;{{ruleForm.clickNum}}</span>
            </el-col>
            <el-col :span="10" style="float: right">
              <span style="color: #a7c2ce">发布于{{ruleForm.createDate}}</span>
            </el-col>
          </el-row>
        </el-form-item>

        <el-divider></el-divider>
        <el-form-item label="" prop="content" style="width:700px">
          <div class="ql-container ql-snow">
            <h2 v-html="ruleForm.content" class="ql-editor"></h2>
          </div>
        </el-form-item>
      </el-form>
      <!--新闻列表-->
      <br>
    </div>
    <br>
    <div class="news">
      <el-table
        :data="tableData.list"
        style="width: 100%"
        @row-click="rowClick">
        <el-table-column
          label="站内新闻"
          width="480px"
          prop="title"
          style="text-align: left;">
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
      <br>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.total"
        :current-page="this.queryParams.pageNo"
        :page-size="this.queryParams.pageSize"
        @current-change="changePageNo">
      </el-pagination>
    </div>
 </div>

</template>

<script>
  export default {
    inject:['reload'],
    data () {
      name:"newsDetails.vue"
      return {
        ruleForm:{
          id:"",
          title:"",
          content:""
        },
        /*新闻列表*/
        queryParams:{
          pageNo:1,
          pageSize:10,
          title:""
        },
        tableData:{},
        news:[]
      }
    },
    created: function() {
      this.ruleForm.id = this.$route.params.id;
      if(this.ruleForm.id){
        this.get("news/getOne",(data)=>{
          this.ruleForm=data;
          console.log(this.ruleForm);
        },{id:this.ruleForm.id});
      }
      /*查找新闻列表*/
      this.get("news/list",(data)=>{
        this.tableData=data;
        this.news=data.list;
        console.log(this.tableData);
      },this.queryParams);
    },
    watch:{
      queryParams:{
        handler:function(){
          this.getData();
        },
        deep:true
      }
    },
    components: {

    },
    methods:{
      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      // findData(){
      //   this.queryParams.pageNo=1;
      //   this.merge(this.search,this.queryParams);
      // },
      /* seeDetails(row){
         this.$router.push("/newsDetails/" + row.id);
       },*/
      rowClick(row,column,event){
        window.open("/newsDetails/" + row.id);
      },

    }
  }

</script>

<style scoped>
  .ql-container.ql-snow {
    border: none;
  }
  .news{
    margin-right: 100px;
    margin-left: 100px;
    background-color: #FFFFFF;
  }
</style>
