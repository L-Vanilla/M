<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <!--        <el-col :span="2"><el-button style="background-color: #17B3A3;color: #fff" @click="add">添加</el-button></el-col>-->
        <el-col :span="22">
          <el-input placeholder="请输入新闻标题" v-model="search.title" class="input-with-select" style="width: 200px">
            <el-button slot="append" icon="el-icon-search" @click="findData"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>

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
    <el-table
      :data="tableData.list"
      style="width: 100%">
      <el-table-column
        label="站内新闻"
        width="480px"
      style="float: left">
        <template slot-scope="scope">
          <span @click="seeDetails(scope.row)" class="mr15">{{scope.row.title}}</span>
<!--          <router-link to="/newsList">{{scope.row.title}}</router-link>-->
        </template>

      </el-table-column>
     <!-- <el-table-column
        prop="clickNum"
        label="点击率"
        width="100"
        style="float: right">
      </el-table-column>-->
      <el-table-column
        prop="createDate"
        label=""
      style="margin-right: 10px;width: 100px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import EditNews from '@/components/news/edit'
  import DetailsNews from '@/components/news/details'
  export default {
    inject:['reload'],
    name:"news",
    data () {
      return {
        search:{
          title:""
        },
        queryParams:{
          pageNo:1,
          pageSize:10,
          title:""
        },
        tableData:{},
        news:[]
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

        this.get("news/list",(data)=>{
          this.tableData=data;
          this.news=data.list;
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
      seeDetails(row){
        this.$router.push("/newsDetails/" + row.id);
      },
      del(row){
        this.delete("news/del",row.id,row.active);
      },
      deltext(active){
        return active==1?"删除":"恢复"
      }
    }
  }
</script>

<style>
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
    background-color: #17B3A3;
    color: #FFF;
  }
  .el-table_1_column_2 td{
    text-align: right;
  }
  /*.left {  float: left;  width: 40%;   }*/
  /*.center { margin-left: 50%;  margin-right: 20%;  }*/
  /*.right {  float: right;  width: 30%;    }*/
</style>
