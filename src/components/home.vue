<!--前台门户--Vanilla-->
<template>
  <div >
  <el-container class="wrap" @scroll="orderScroll">
    <el-header>
      <div class="r" v-if="isOlder!=='1'">
        <el-button type="text" @click="register()">注册</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="login()">登录</el-button>
      </div>
      <div class="r" v-else>
        <span>{{older.olderName}}</span>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="logout()" style="color: black">退出</el-button>
      </div>
    </el-header>
    <!--<div style="width: 100%;height: 50px;background-color:black"></div>-->
    <div style="width: 100%;height: 50px"></div>
    <Menu1></Menu1>
    <el-container style="margin-top: 10px" >
      <el-aside style="margin-left:15%"  >
        <el-card shadow="always">
          <el-header style="background-color:#cdd1bc;height: 50px ">系统公告</el-header>
          <div>
            <el-form :model="notice"  ref="notice"  class="demo-ruleForm">
              <el-form-item label="" prop="title" >
                <h1 style="text-align: center">{{notice.title}}</h1>
              </el-form-item>
              <el-form-item label="" prop="content" >
                <h2 style="text-align: center">{{notice.content}}</h2>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-aside>
      <el-main style="margin-right:15%">
        <MyBreadcrumb1 style="margin-bottom:20px;"></MyBreadcrumb1>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
  import Menu1 from '@/components/home_frame/menu_home'
  import MyBreadcrumb1 from '@/components/frame/myBreadcrumb'
    export default {
        name: "home",
      data () {
        return {
          queryParams:{
            pageNo:1,
            pageSize:2,
          },
          notice:{
          },
          /*存储老人信息*/
          older:[],
          isOlder: "1"
        }
      },
      /*引组件*/
      components: {
        Menu1,
        MyBreadcrumb1
      },
      created(){
        this.getData();
        var isOlder = localStorage.getItem("isOlder");
        if(isOlder!=='1'){
          this.$router.push('/');
        }
        this.loadUser();
      },
      watch:{
        isOlder: {
          handler:function(){
          },
          deep:true
        }
      },
      methods: {
        // 滚动事件
        // 如果不绑定到元素上，则只能监听页面滚动
        orderScroll(e){
          let a = this.$refs.Box.scrollHeight
          let b = this.$refs.Box.clientHeight
          let c = this.$refs.Box.scrollTop
          console.log('滚动条'+a)
          console.log('可视区'+b)
          console.log('距离顶部'+c)
          if(b+c == a){
            xxxx
          }else{
            return
          }
        },
        /*加载登录老人信息*/
        loadUser(){
          var list = JSON.parse(localStorage.getItem("older") || '[]');
          var isOlder=localStorage.getItem("isOlder");
          this.isOlder=isOlder;
          this.older = list;
          console.log("isOlder"+this.isOlder);
          console.log(this.older);
        },
        getData(){
          this.get("notice/list",(data)=>{
            this.notice=data.list[0];
            console.log(this.notice);
          },this.queryParams);
        },
        /*注册*/
        register(){
          this.$router.push({ path:'/olderRegister'  })
        },
        /*登录*/
        login(){
          this.$router.push({ path:'/olderLogin'  })
        },
        /*退出*/
        logout(){
          this.get("older/logout",(data)=>{
            if(data>0){
              this.$message({
                type: 'success',
                message: '退出成功!'
              });
              localStorage.removeItem('older');
              localStorage.removeItem('isOlder');
              location.reload();
              alert("退出成功");

            }
          });
        }

      }
    }
</script>

<style>
 /*@keyframes in {
    from{transform: translateY(-30px);opacity: 0;}
    to{transform: translateY(0px);opacity: 1;}
  }
  @-webkit-keyframes in{
    from{transform: translateY(-30px);opacity: 0;}
    to{transform: translateY(0px);opacity: 1;}
  }*/
  .wrap{
    height:100%;
    display: flex;
    flex: 1;
    flex-direction:column;
    background-color: #FFF;
  }
  .el-header, .el-footer {
    background-color: #585b56;
    color: #333333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #e8ebbf;
    color: #333;
    text-align: center;
    line-height: 200px;
  }


  body > .el-container {
    margin-bottom: 40px;
  }
  .content{
    flex: 1;
  }
  .r{
    margin-left: 80%;
  }
  .el_row{
    height: 50px;
  }
</style>
