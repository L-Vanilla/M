<!--20-1-3体检信息列表  ---Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <el-col :span="5">
          <el-input placeholder="请输入老人姓名" v-model="search.olderName" class="input-with-select" style="width: 200px">
          </el-input>
        </el-col>
        <el-col :span="15">
          <span>查询日期：</span>
          <el-date-picker
            v-model="search.date1"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择起始日期">
          </el-date-picker>
          <el-date-picker
            v-model="search.date2"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择结束日期">
          </el-date-picker>
          <el-button icon="el-icon-search" style="background-color: #5fb381;color: #fff" @click="findData"></el-button>
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
        prop="examHeight"
        label="身高/cm">
      </el-table-column>
        <el-table-column
        prop="examWeight"
        label="体重(kg)">
      </el-table-column>
      <el-table-column
      label="视力">
        <el-table-column
          prop="examRsight"
          label="右眼视力">
        </el-table-column>
        <el-table-column
          prop="examLsight"
          label="左眼视力">
        </el-table-column>
      </el-table-column>
      <el-table-column
      label="血压">
        <el-table-column
          label="高压(mmHg)">
          <template slot-scope="scope">
            <div v-if="scope.row.examHighbp<=90">
              <i class="icon-icon-test8" style="color: #4f8cb3">{{scope.row.examHighbp}}</i><!--血压低-->
            </div>
            <div v-else-if="90<scope.row.examHighbp&&scope.row.examHighbp<140"><!--血压正常-->
              <span style="color: #00ff6b">{{scope.row.examHighbp}}</span>
            </div>
            <div v-else-if="140<=scope.row.examHighbp&&scope.row.examHighbp<=180"><!--血压偏高-->
              <i class="icon-icon-test8" style="color: #b3880b">{{scope.row.examHighbp}}</i>
            </div>
            <div v-else>
              <i class="icon-icon-test8" style="color: #b30804">{{scope.row.examHighbp}}</i><!--血压太高-->
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="低压(mmHg)">
          <template slot-scope="scope">
            <div v-if="scope.row.examLowbp<=60">
              <i class="icon-icon-test8" style="color: #4f8cb3">{{scope.row.examLowbp}}</i><!--血压低-->
            </div>
            <div v-else-if="60<scope.row.examLowbp&&scope.row.examLowbp<90">
              <span style="color: #00ff6b">{{scope.row.examLowbp}}</span><!--血压正常-->
            </div>
            <div v-else-if="90<=scope.row.examLowbp&&scope.row.examLowbp<110">
              <i class="icon-icon-test8" style="color: #b3880b">{{scope.row.examLowbp}}</i><!--血压高-->
            </div>
            <div v-else>
              <i class="icon-icon-test8" style="color: #b30804">{{scope.row.examLowbp}}</i><!--血压太高-->
            </div>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="examGlu"
        label="血糖(mmd/L)">
        <template slot-scope="scope">
          <div v-if="scope.row.examGlu<2.8">
            <i class="icon-icon-test8" style="color: #4f8cb3">{{scope.row.examGlu}}</i><!--血糖低-->
          </div>
          <div v-else-if="scope.row.examGlu<7.8&&scope.row.examGlu>=2.8">
            <span style="color: #00ff6b">{{scope.row.examGlu}}</span><!--血糖正常-->
          </div>
          <div v-else-if="7.8<=scope.row.examGlu&&scope.row.examGlu<11">
            <i class="icon-icon-test8" style="color: #b3880b">{{scope.row.examGlu}}</i><!--血糖偏高-->
          </div>
          <div v-else>
            <i class="icon-icon-test8" style="color: #b30804">{{scope.row.examGlu}}</i><!--血糖太高-->
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="examHr"
        label="心率(次/分)">
        <template slot-scope="scope">
          <div v-if="scope.row.examHr<60">
            <i class="icon-icon-test8" style="color: #4f8cb3">{{scope.row.examHr}}</i>
          </div>
          <div v-else-if="scope.row.examHr<100&&scope.row.examHr>=60">
            <span style="color: #00ff6b">{{scope.row.examHr}}</span>
          </div>
          <div v-else>
            <i class="icon-icon-test8" style="color: #b30804">{{scope.row.examHr}}</i>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="examDate"
        label="体检时间">
        <template slot-scope="scope">
          <span>{{scope.row.examDate | FormatDate('yyyy-MM-dd')}}</span>
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
  import EditExam from '@/components/exam/edit'
  // import DetailsExam from '@/components/exam/details'
  export default {
    inject:['reload'],
    name:"list",
    data () {

      return {
        search:{
          olderName:"",
          date1:"",
          date2:"",
        },
        queryParams:{
          pageNo:1,
          pageSize:10,
          olderName:"",
          date1:"",
          date2:"",

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
        this.get("exam/list",(data)=>{
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
            content: EditExam, //传递的组件对象
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
      //       content: DetailsExam, //传递的组件对象
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
        this.delete("exam/del",row.id,row.active);
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
