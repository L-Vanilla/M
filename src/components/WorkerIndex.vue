<!--社区工作者后台--Vanilla-->
<template>
  <el-container class="wrap">
    <el-header class="header" style=" display: inline-block;">
      <img src="../assets/hotel.png" style="width: 26px;height: 26px;display:inline-block; vertical-align:middle"/>
      <h1  class="title">老人社区健康管理与跟踪系统（社区者）</h1>
      <!--<el-menu
        :default-active="activeIndex2"
        mode="horizontal"
        @select="handleSelect"
        background-color="#333744"
        text-color="#fff"
        style=" display: inline-block;float: right"
        active-text-color="#ffd04b">
        <el-submenu index="2" style="float: right">
          <template slot="title">{{admin.name}}</template>
          <el-menu-item index="2-1" @click="edit()">修改信息</el-menu-item>
          <el-menu-item index="2-1" @click="logout()">退出</el-menu-item>
        </el-submenu>
      </el-menu>-->
    </el-header>
    <el-container class="content">
      <el-aside width="200px">
        <Menu2>
        </Menu2>
      </el-aside>
      <el-main style="background-color: #F4F4F4;">
        <MyBreadcrumb2 style="margin-bottom:20px;"></MyBreadcrumb2>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Menu2 from '@/components/worker_frame/menu_worker'
  import MyBreadcrumb2 from '@/components/worker_frame/myBreadcrumb_worker'
  // import EditAdmin from '@/components/adminEdit'
  export default {
    name:"index",
    data () {
      return {
        activeIndex2: '1',
        admin:[],
      }
    },

    methods:{      //从本地的localStorage中，加载列表
      // loadUser(){
      //   var list = JSON.parse(localStorage.getItem("admin") || '[]');
      //   this.admin = list;
      //   console.log(this.admin);
      // },
      // //用户退出，销毁localStorage
      // logout(){
      //       this.get("admin/logout",(data)=>{
      //         if(data>0){
      //           this.$message({
      //             type: 'success',
      //             message: '退出成功!'
      //           });
      //           localStorage.removeItem('admin');
      //           localStorage.removeItem('islogin');
      //           alert("退出成功");
      //           this.$router.push('/');
      //         }
      //       });
      //
      // },
     // 跳转首页
     //  home(){
     //    this.$router.push({ path:'/adminIndex'  })
     //  },
     //  edit(){
     //    this.$layer.iframe({
     //      content: {
     //        content: EditAdmin, //传递的组件对象
     //        parent: this,//当前的vue对象
     //        data:{id:this.admin.id,
     //              name:this.admin.name,
     //              password:this.admin.password,
     //              phone:this.admin.phone,
     //              remarks:this.admin.remarks
     //        }//props
     //      },
     //      area:['800px','600px'],
     //      title: '修改个人信息',
     //      shadeClose: false,
     //      shade :true
     //    });
     //  },
     //  handleSelect(key, keyPath) {
     //    console.log(key, keyPath);
     //  }
    },
    // created(){
    //   var islogin = localStorage.getItem("islogin");
    //   if(islogin!='1'){
    //     this.$router.push('/');
    //   }
    //   this.loadUser();
    //
    // },
    // watch:{
    //   islogin: {
    //     handler:function(){
    //
    //     },
    //     deep:true
    //   }
    // },
    components: {
      Menu2,
      MyBreadcrumb2
    }
  }
</script>
<style scoped>
  @keyframes in {
    from{transform: translateY(-30px);opacity: 0;}
    to{transform: translateY(0px);opacity: 1;}
  }
  @-webkit-keyframes in{
    from{transform: translateY(-30px);opacity: 0;}
    to{transform: translateY(0px);opacity: 1;}
  }
  .wrap{
    height:100%;
    display: flex;
    flex-direction:column;
    background-color: #1e413b;
  }
  .header{
    padding:0;
    padding-left: 2%;
    line-height: 60px;
    background-color: #24443f;
  }
  .header>.title {
    height:100%;
    animation: in 1s;
    -webkit-animation: in 1s;
    color: #ffffff;
    display: inline-block;
    vertical-align:middle
  }
  .header>.logout {
    height:100%;
    animation: in 1s;
    -webkit-animation: in 1s;
    color: red;
    display: inline-block;
    float: right;
    background-color: #24443f;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    border: none;
    font-size: 16px;
    vertical-align:middle;
    cursor:pointer
  }
  .header>.user {
    height:100%;
    animation: in 1s;
    -webkit-animation: in 1s;
    color: #ffffff;
    font-size: 20px;
    display: inline-block;
    float: right;
    margin-right: 10px;
    vertical-align:middle
  }
  .content{
    flex: 1;
  }

</style>
