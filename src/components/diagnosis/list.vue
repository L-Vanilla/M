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
      style="width: 150%;"
      :header-cell-style="{background:'#5fb381',color:'#606266'}">
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
        prop="rank"
        label="严重等级">
        <template slot-scope="scope">
          <div class="block">
            <el-radio-group v-model="scope.row.rank" v-if="scope.row.checkState===1"  disabled>
              <el-radio :label="1" >一般</el-radio>
              <el-radio :label="2" >严重</el-radio>
              <el-radio :label="3" >非常严重</el-radio>
            </el-radio-group>
            <el-radio-group v-model="scope.row.rank" @change="updateRank(scope.row)"   v-else>
              <el-radio :label="1" >一般</el-radio>
              <el-radio :label="2" >严重</el-radio>
              <el-radio :label="3" >非常严重</el-radio>
            </el-radio-group>
          </div>
        </template>
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
          <el-button @click="edit(scope.row)" v-if="scope.row.checkState===1" style="color:#afbbbb" type="text" size="small" icon="el-icon-edit" disabled>修改</el-button>
          <el-button @click="edit(scope.row)" v-if="scope.row.checkState===0" style="color:#17B3A3" type="text" size="small" icon="el-icon-edit">修改</el-button>
<!--          <el-button type="text" size="small" style="color:red" @click="del(scope.row)"  icon="el-icon-delete">{{deltext(scope.row.active)}}</el-button>-->
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
        tableData:{},

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
      /*修改等级状态*/
      updateRank(row){
        this.$confirm('确定码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.get("diagnosis/updateRank",(data)=>{
            if(data>0){
              this.$message({
                type: 'success',
                message: '成功!'
              });
              this.reload();
            }
          },{id:row.id,rank: row.rank,olderId:row.olderId});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '失败'
          });
        });
      },
      del(row){
        this.delete("diagnosis/del",row.id,row.active);
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
    background-color: #5fb381;
    color: black;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #5fb381;
    color: #FFF;
  }
</style>
