<!--20-1-3随访信息列表  ---Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <el-col :span="4">
          <el-input placeholder="请输入老人姓名" v-model="search.olderName" class="input-with-select" style="width: 200px">
            <el-button slot="append" icon="el-icon-search" @click="findData"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button size="medium" type="primary"  icon="icon-xiazai2" @click="handleDownLoad()">下载模板</el-button>
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
        prop="bodyState"
        label="身体状况">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="workerName"
        label="随访人">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="visitsState"-->
<!--        label="是否随访">-->
<!--        <template slot-scope="scope">-->
<!--          <span v-if="scope.row.visitsState===0" style="color: #df9549">未随访</span>-->
<!--          <el-button v-if="scope.row.visitsState===0" @click="update_visitsState(scope.row)" type="small" style="background-color:#5fb381;">已随访</el-button>-->
<!--          <span v-if="scope.row.visitsState===1" style="color: #9bdf72">已随访</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column
        label="身体状态">
        <template slot-scope="scope">
          <div class="block">
            <el-radio-group v-model="scope.row.rank" v-if="scope.row.checkState===1"  disabled>
              <el-radio :label="1" style="margin-right: 0">良好</el-radio>
              <el-radio :label="2" style="margin-right: 0">一般</el-radio>
              <el-radio :label="3" style="margin-right: 0">严重</el-radio>
            </el-radio-group>
            <el-radio-group v-model="scope.row.rank" @change="updateRank(scope.row)"   v-else>
              <el-radio :label="1" style="margin-right: 0">良好</el-radio>
              <el-radio :label="2" style="margin-right: 0">一般</el-radio>
              <el-radio :label="3" style="margin-right: 0" >严重</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="随访时间">
        <template slot-scope="scope">
          <span>{{scope.row.visitsDatetime | FormatDate('yyyy-MM-dd')}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="添加时间">
      </el-table-column>
      <el-table-column
        label="附件">
        <template slot-scope="scope">
          <el-button @click="download(scope.row)" v-if="scope.row.fileurl!==''&&scope.row.fileurl!==null" style="color:#b3aa05" type="text" size="medium" icon="icon-xiazai2">附件</el-button>
          <el-button v-else style="color:#8a8783" type="text" size="medium" icon="icon-xiazai2">附件</el-button>
        </template>
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
  import EditVisits from '@/components/visits/edit'
  // import DetailsVisits from '@/components/visits/details'
  export default {
    inject:['reload'],
    name:"visits",
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
      getData(){
        this.get("visits/list",(data)=>{
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
      edit(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: EditVisits, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','600px'],
          title: '修改急救信息',
          shadeClose: false,
          shade :true
        });
      },
      // details(row){
      //   this.$layer.iframe({
      //     content: {
      //       content: DetailsVisits, //传递的组件对象
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
          this.get("visits/updateRank",(data)=>{
            if(data>0){
              this.$message({
                type: 'success',
                message: '成功!'

              }); this.reload();

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
        this.delete("visits/del",row.id,row.active);
      },
      deltext(active){
        return active==1?"删除":"恢复"
      },
      /*文件下载*/
      handleDownLoad(){
        let a = document.createElement('a');
        a.href = '/./static/visits_exam/visits_exam_model.docx';
        a.click();
      },
      download(row){
        let a = document.createElement('a');
        a.href = '/./static/visits_exam/'+row.fileurl;
        a.click();
      },
      update_visitsState(row){
        this.$confirm('确定码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.visitsState=1;
          this.get("visits/updateVisitsState",(data)=>{
            if(data>0){
              this.$message({
                type: 'success',
                message: '成功!'
              });
              this.$ro
            }
          },{id:row.id,visitsState: row.visitsState});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '失败'
          });
        });
      },
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
