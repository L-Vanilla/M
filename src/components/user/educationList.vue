<!--20-1-1健康教育---Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
<!--        <el-col :span="2"><el-button style="background-color: #17B3A3;color: #fff" @click="add">添加</el-button></el-col>-->
        <el-col :span="22">
          <el-input placeholder="请输入标题" v-model="search.title" class="input-with-select" style="width: 200px">
            <el-button slot="append" icon="el-icon-search" @click="findData"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData.list"
      style="width: 100%;"
      @row-click="rowClick">
      <el-table-column
        label="健康教育"
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
</template>

<script>
  export default {
    inject:['reload'],
    name:"educationList",
    data () {
      return {
        search:{
          title:"",
          hType:"健康教育",
        },
        queryParams:{
          pageNo:1,
          pageSize:10,
          title:"",
          hType:"健康教育"
        },
        tableData:{}
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

        this.get("healthCare/list",(data)=>{
          this.tableData=data;
          console.log(this.tableData);
        },this.queryParams);
      },
      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      findData(){
        this.queryParams.pageNo=1;
        this.merge(this.search,this.queryParams);
      },
      rowClick(row,column,event){
        this.$router.push("/healthCareDetails/" + row.id);
      },

    }
  }
</script>

<style scoped>
  .el-table .cell {
    height: 19px;
  }
  .el-date-table__row tr{
    height: 10px;
  }
  .el-table__header th, .el-table__header tr {
    background-color: #FFF;
    color: black;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FFF;
    color: #FFF;
  }
</style>
