<!--19-12-22社区工作者列表--Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <el-col :span="2"><el-button style="background-color: #17B3A3;color: #fff" @click="add">添加</el-button></el-col>
        <el-col :span="22">
          <el-input placeholder="请输入姓名" v-model="search.workerName" class="input-with-select" style="width: 200px">
            <el-button slot="append" icon="el-icon-search" @click="findData"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData.list"
      border
      style="width: 150%;">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="id"-->
<!--        label="编号">-->
<!--      </el-table-column>-->
      <el-table-column
        label="图片" style="width: 200%;height: 150%">
        <template slot-scope="scope">
          <img :src="baseurl+scope.row.workerPhotourl" alt="" style="width: 100%;height: 120px"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="workerName"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="workerSex"
        label="性别"
        :formatter="sexformat">
      </el-table-column>
      <el-table-column
        prop="workerPhone"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="workerWechat"
        label="微信">
      </el-table-column>
      <el-table-column
        prop="workerMail"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="workerAddress"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="workerCard"
        label="身份证">
      </el-table-column>
        <el-table-column
        prop="remarks"
        label="备注">
      </el-table-column>

      <el-table-column
        prop="createDate"
        label="添加时间">
      </el-table-column>
<!--      <el-table-column label="查看内容">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="details(scope.row)" style="color:#17B3A3" type="text" size="small" icon="el-icon-document">查看内容</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" style="color:#17B3A3" type="text" size="small" icon="el-icon-edit">修改</el-button>
          <el-button type="text" size="small" style="color:red" @click="del(scope.row)"  icon="el-icon-delete">{{deltext(scope.row.active)}}</el-button>
        </template>
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
  import EditWorker from '@/components/worker/edit'
  // import DetailsWorker from '@/components/worker/details'
  export default {
    inject:['reload'],
    name:"worker",
    data () {

      return {
        baseurl:"./static/worker_photourl/",
        search:{
          workerName:""
        },
        queryParams:{
          pageNo:1,
          pageSize:10,
          workerName:""
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
        this.get("worker/list",(data)=>{
          this.tableData=data;
          console.log(this.tableData);
        },this.queryParams);
      },
      sexformat(row, column, cellValue, index){
        return cellValue==1?"女":"男";
      },
      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      findData(){
        this.queryParams.pageNo=1;
        this.merge(this.search,this.queryParams);
      },
      add(){
        this.$layer.iframe({
          content: {
            content: EditWorker, //传递的组件对象
            parent: this,//当前的vue对象
            data:{}//props
          },
          area:['800px','600px'],
          title: '添加公告',
          shadeClose: false,
          shade :true
        });
      },
      edit(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: EditWorker, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','600px'],
          title: '修改公告',
          shadeClose: false,
          shade :true
        });
      },
      // details(row){
      //   this.$layer.iframe({
      //     content: {
      //       content: DetailsWorker, //传递的组件对象
      //       parent: this,//当前的vue对象
      //       data:{id:row.id}//props
      //     },
      //     area:['800px','600px'],
      //     title: '查看内容',
      //     shadeClose: false,
      //     shade :true
      //   });
      // },
      del(row){
        this.delete("worker/del",row.id,row.active);
      },
      deltext(active){
        return active==1?"删除":"恢复"
      }
    }
  }
</script>

<style scoped>
  .el-table .cell {
    text-align: center;
  }
  .el-table__header th, .el-table__header tr {
    background-color: #17B3A3;
    color: black;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #17B3A3;
    color: #FFF;
  }
</style>
