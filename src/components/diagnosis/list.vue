<!--20-1-3诊断信息列表 ---Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <el-col :span="22">
          <el-input placeholder="请输入老人姓名" v-model="search.olderName" class="input-with-select" style="width: 200px">
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
      <el-table-column
        prop="olderId"
        label="老人Id">
      </el-table-column>
      <el-table-column
        prop="olderName"
        label="老人姓名">
      </el-table-column>
      <el-table-column
        prop="diagnosisHospital"
        label="就诊医院">
      </el-table-column>
      <el-table-column
        prop="diagnosisDate"
        label="就诊时间">
        <template slot-scope="scope">
          <span>{{scope.row.diagnosisDate | FormatDate('yyyy-MM-dd')}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="diagnosisRemarks"
        label="病情描述">
      </el-table-column>
      <el-table-column
        prop="diagnosisInformation"
        label="医嘱信息">
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
  import EditDiagnosis from '@/components/diagnosis/edit'
  // import DetailsDiagnosis from '@/components/diagnosis/details'
  export default {
    inject:['reload'],
    name:"diagnosis",
    data () {

      return {
        search:{
          olderName:""
        },
        queryParams:{
          pageNo:1,
          pageSize:10,
          olderName:""
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
      /*formatDate(value){
        this.value1= new Date(value.diagnosisDate);//value.createdTime是prop绑定的字段名称
        let dateValue = this.$moment(this.value1).format("YYYY-MM-DD");//$moment专门转化时间的插件（使用时需要下载引入）
        return dateValue
      },*/
      getData(){
        this.get("diagnosis/list",(data)=>{
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
      add(){
        this.$layer.iframe({
          content: {
            content: EditDiagnosis, //传递的组件对象
            parent: this,//当前的vue对象
            data:{}//props
          },
          area:['800px','600px'],
          title: '添加诊断信息',
          shadeClose: false,
          shade :true
        });
      },
      edit(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: EditDiagnosis, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','600px'],
          title: '修改诊断信息',
          shadeClose: false,
          shade :true
        });
      },
      // details(row){
      //   this.$layer.iframe({
      //     content: {
      //       content: DetailsDiagnosis, //传递的组件对象
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
        this.delete("diagnosis/del",row.id,row.active);
      },
      deltext(active){
        return active==1?"删除":"恢复"
      }
    }
  }
</script>

<style>
  .el-table .cell {
    text-align: center;
  }
  .el-table__header th, .el-table__header tr {
    background-color: #5fb381;
    color: black;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #5fb381;
    color: #FFF;
  }
</style>
