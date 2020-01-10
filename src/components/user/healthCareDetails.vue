<!--2019-12-21新闻详情---Vanilla-->
<template>
  <div>
    <!--详情-->
    <div class="news">
      <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!--标题部分-->
        <el-form-item label="" prop="title" style="width:700px;margin-top: 20px">
          <h1 style="text-align: left;font-size: 30px;margin-top: 20px;line-height: 30px">{{ruleForm.title}}</h1>
          <el-row style="margin-top: 20px">
            <el-col :span="5" style="float:contour">
              <span style="background-color: #ff99ab">原创</span>
              <span>{{ruleForm.publisherName}}</span>
            </el-col>
            <el-col :span="3">
              <span style="color: #a7c2ce">阅读数&nbsp;{{ruleForm.clickNum}}</span>
            </el-col>
            <el-col :span="5">
              <span style="background-color: #9dce8d">&nbsp;{{ruleForm.hType}}</span>
            </el-col>
            <el-col :span="9" style="float: right">
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
        <br>
      </el-form>
    </div>
    <!--列表-->
    <div class="news">
      <el-table
        :data="tableData.list"
        style="width: 100%;"
        @row-click="rowClick">
        <el-table-column
          :label="title"
          width="480px"
          prop="title"
          style="text-align: left;">
          <!--<template slot-scope="scope">
            <span @click="seeDetails(scope.row)" class="mr15">{{scope.row.title}}</span>
            &lt;!&ndash;          <router-link to="/newsList">{{scope.row.title}}</router-link>&ndash;&gt;
          </template>-->
        </el-table-column>
        <!-- <el-table-column
         prop="clickNum"
         label="点击率">
       </el-table-column>-->
        <el-table-column
          prop="createDate"
          label=""
          style="text-align: right">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next,total"
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
      name:"healthCareDetails.vue"
      return {
        ruleForm:{
          id:"",
          title:"",
          content:"",
          hType:""
        },
        /*列表数据*/
        queryParams:{
          pageNo:1,
          pageSize:20,
          title:"",
          hType:""
        },
        tableData:{}
      }
    },
    created: function() {
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
    components: {

    },
    methods:{
      getData(){
        this.ruleForm.id = this.$route.params.id;
        if(this.ruleForm.id){
          this.get("healthCare/getOne",(data)=>{
            this.ruleForm=data;
            console.log(this.ruleForm);
          },{id:this.ruleForm.id});
        }
        this.queryParams.hType = this.$route.params.hType;
        this.get("healthCare/list",(data)=>{
          this.tableData=data;
          console.log(this.tableData);
        },this.queryParams);
      },
      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      rowClick(row,column,event){
        window.open("/healthCareDetails/" + row.id+"/"+row.hType);
      },

    }
  }

</script>

<style scoped>
  .ql-container.ql-snow {
    border: none;
  }
  .news{
    margin-top: 10px;
    margin-right: 100px;
    margin-left: 100px;
    background-color: #FFFFFF;
  }
</style>
