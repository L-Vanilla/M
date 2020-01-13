<!--20-1-2老人操作列表---Vanilla-->
<template>
  <div>
    <div style="margin-top: 15px;margin-bottom: 10px">
      <el-row>
        <el-col :span="2"><el-button style="background-color: #5fb381;color: #fff" @click="add">添加</el-button></el-col>
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
      >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        label="图片" style="width: 200%;height: 150%">
        <template slot-scope="scope">
          <img :src="baseurl+scope.row.olderPhotourl" alt="" style="width: 100%;height: 120px" @click="rowClick_older(scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="olderName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="olderSex"
        label="性别"
        :formatter="sexformat">
      </el-table-column>
      <el-table-column
        prop="olderPhone"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="olderAge"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="olderBmi"
        label="健康指数">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="olderCard"-->
<!--        label="身份证">-->
<!--      </el-table-column>-->
      <el-table-column label="添加家庭成员">
        <template slot-scope="scope">
          <el-button style="color:#68b36a" type="text" icon="icon-duoyonghu-tianchong" @click="addMember(scope.row)" size="medium">
            添加家庭</el-button>
        </template>
      </el-table-column>
      <el-table-column label="添加诊断信息">
        <template slot-scope="scope">
          <el-button @click="addDiagnosis(scope.row)" icon="icon-zhenduan" style="color:#f0710d" type="text" size="medium">添加诊断</el-button>
        </template>
      </el-table-column>
      <el-table-column label="添加急救信息">
        <template slot-scope="scope">
          <el-button @click="addAid(scope.row)" icon="icon-jijiu" style="color:#d00b12" type="text" size="medium">添加急救</el-button>
        </template>
      </el-table-column>
      <el-table-column label="添加体检信息">
        <template slot-scope="scope">
          <el-button @click="addExam(scope.row)" style="color:#b3aa05" type="text" size="medium" icon="icon-tijianbaogao">添加体检</el-button>
        </template>
      </el-table-column>
      <el-table-column label="添加随访信息">
        <template slot-scope="scope">
          <el-button @click="addVisits(scope.row)" style="color:#17B3A3"  type="text" size="medium" icon="icon-suifanghuanzhe">添加随访</el-button>
        </template>
      </el-table-column>
      <el-table-column label="查看内容">
        <template slot-scope="scope">
          <el-button @click="details(scope.row)" style="color:#3888b3" type="text" size="medium" icon="el-icon-document">查看内容</el-button>
        </template>
      </el-table-column>
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
  import DetailsOlder from '@/components/older/details'
  import AddMember from '@/components/member/edit'
  import AddDiagnosis from '@/components/diagnosis/edit'
  import AddAid from '@/components/aid/edit'
  import AddExam from '@/components/exam/edit'
  import AddVisits from '@/components/visits/edit'
  import EditOlder from '@/components/older/edit'
  export default {
    inject:['reload'],
    name:"older",
    data () {

      return {
        baseurl:"./static/older_photourl/",
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
        this.get("older/list",(data)=>{
          this.tableData=data;
          console.log(this.tableData);
        },this.queryParams);
      },
      sexformat(row, column, cellValue, index){
        return cellValue==1?"女":"男";
      },
      olderStateformat(row, column, cellValue, index){
        if(cellValue===0){
          return "优"
        }
        else if (cellValue===1){
          return "良"
        }
        else if (cellValue===2){
          return "一般"
        }
        return "差";
      },
      changePageNo(i){
        this.queryParams.pageNo=i;
      },
      findData(){
        this.queryParams.pageNo=1;
        this.merge(this.search,this.queryParams);
      },
      details(row){
        this.$layer.iframe({
          content: {
            content: DetailsOlder, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','500px'],
          title: '查看内容',
          shadeClose: false,
          shade :true
        });
      },
      add(row){
        this.$layer.iframe({
          content: {
            content: EditOlder, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','500px'],
          title: '添加老人信息',
          shadeClose: false,
          shade :true
        });
      },
      addMember(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddMember, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:row.id,olderName:row.olderName}//props
          },
          area:['800px','600px'],
          title: '添加家庭成员',
          shadeClose: false,
          shade :true
        });
      },
      addDiagnosis(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddDiagnosis, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:row.id,olderName:row.olderName}//props
          },
          area:['800px','600px'],
          title: '添加诊断信息',
          shadeClose: false,
          shade :true
        });
      },
      addAid(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddAid, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:row.id,olderName:row.olderName}//props
          },
          area:['800px','600px'],
          title: '添加急救信息',
          shadeClose: false,
          shade :true
        });
      },
      addExam(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddExam, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:row.id,olderName:row.olderName}//props
          },
          area:['800px','600px'],
          title: '添加体检信息',
          shadeClose: false,
          shade :true
        });
      },
      addVisits(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: AddVisits, //传递的组件对象
            parent: this,//当前的vue对象
            data:{olderId:row.id,olderName:row.olderName}//props
          },
          area:['800px','600px'],
          title: '添加随访信息',
          shadeClose: false,
          shade :true
        });
      },
      /*老人个人中心*/
      rowClick_older(row){
        this.$router.push("/" + row.id);
      },
      edit(row){
        this.$layer.iframe({
          type:2,
          content: {
            content: EditOlder, //传递的组件对象
            parent: this,//当前的vue对象
            data:{id:row.id}//props
          },
          area:['800px','600px'],
          title: '修改公告',
          shadeClose: false,
          shade :true
        });
      },
      del(row){
        this.delete("older/del",row.id,row.active);
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
