<!--前台门户--Vanilla-->
<template>
  <div @scroll="orderScroll">
    <vue-particles
      color="#123456"
      id="particles-js"
      :particleOpacity="0.7"
      :particlesNumber="180"
      shapeType="circle"
      :particleSize="4"
      linesColor="#203c77"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push" class="lizi">
    </vue-particles>
     <el-container  class="wrap" >
       <el-header>
         <el-row>
           <el-col :span="18" style="text-align: left" >
             <h1>社区老人健康服务与跟踪系统</h1>
           </el-col>
           <el-col :span="6">
             <div v-if="isOlder!=='1'">
               <el-button type="text" @click="register()" style="color: black">注册</el-button>
               <el-divider direction="vertical"></el-divider>
               <el-button type="text" @click="login()" style="color: black;">登录</el-button>
               <el-divider direction="vertical"></el-divider>
               <el-button type="text" @click="adminLogin()" style="color: black">系统后台</el-button>
             </div>
             <div v-else>
               <span>{{older.olderName}}</span>
               <el-divider direction="vertical"></el-divider>
               <el-button type="text" @click="logout()" style="color: black">退出</el-button>
             </div>
           </el-col>
         </el-row>


       </el-header>
       <!--<div style="width: 100%;height: 50px;background-color:black"></div>-->
       <div style="width: 100%;height: 50px"></div>
       <Menu1></Menu1>
       <el-container style="margin-top: 10px" >

         <!--      <el-aside style="margin-left:15%"  >-->
         <!--        <div v-if="isOlder==='1'">-->
         <!--          <div style="margin-top: 50px;height: 100px;text-align: center" >-->
         <!--            <el-image-->
         <!--              style="width: 100px; height: 100px;"-->
         <!--              :src="url">-->
         <!--            </el-image>-->
         <!--          </div>-->
         <!--          <el-row style="margin-top: 20px;text-align: center ">{{older.olderName}}-->
         <!--          </el-row>-->
         <!--          <el-row style="margin-top: 20px;text-align: center ">-->
         <!--            <el-col :span="14">-->
         <!--              <el-button style="background-color: #9dd1c6;color: #fff" icon="el-icon-edit" @click="edit()">编辑</el-button>-->
         <!--            </el-col>-->
         <!--            <el-col :span="7">-->
         <!--              <el-button style="background-color: #9dd1c6;color: #fff" icon="el-icon-tickets" @click="details()">查看-->
         <!--              </el-button>-->
         <!--            </el-col>-->
         <!--          </el-row>-->
         <!--        </div>-->
         <!--&lt;!&ndash;        <el-card shadow="always">&ndash;&gt;-->
         <!--&lt;!&ndash;          <el-header style="background-color:#cdd1bc;height: 50px ">系统公告</el-header>&ndash;&gt;-->
         <!--&lt;!&ndash;          <div>&ndash;&gt;-->
         <!--&lt;!&ndash;            <el-form :model="notice"  ref="notice"  class="demo-ruleForm">&ndash;&gt;-->
         <!--&lt;!&ndash;              <el-form-item label="" prop="title" >&ndash;&gt;-->
         <!--&lt;!&ndash;                <h1 style="text-align: center">{{notice.title}}</h1>&ndash;&gt;-->
         <!--&lt;!&ndash;              </el-form-item>&ndash;&gt;-->
         <!--&lt;!&ndash;              <el-form-item label="" prop="content" >&ndash;&gt;-->
         <!--&lt;!&ndash;                <h2 style="text-align: center">{{notice.content}}</h2>&ndash;&gt;-->
         <!--&lt;!&ndash;              </el-form-item>&ndash;&gt;-->
         <!--&lt;!&ndash;            </el-form>&ndash;&gt;-->
         <!--&lt;!&ndash;          </div>&ndash;&gt;-->
         <!--&lt;!&ndash;        </el-card>&ndash;&gt;-->
         <!--      </el-aside>-->
         <el-main style="padding: 15px 200px 15px 200px">
<!--           <MyBreadcrumb1 style="margin-bottom:20px;"></MyBreadcrumb1>-->
           <router-view></router-view>
         </el-main>
       </el-container>
     </el-container>

  </div>
</template>

<script>
  import Menu1 from '@/components/home_frame/menu_home'
  import MyBreadcrumb1 from '@/components/frame/myBreadcrumb'
  import DetailsOlder from '@/components/older/details'

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
          isOlder: "1",
          url:"",

        }
      },
      /*引组件*/
      components: {
        Menu1,
        MyBreadcrumb1,
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
          this.url="./static/older_photourl/"+this.older.olderPhotourl;
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
        /*系统登录*/
        adminLogin(){
          this.$router.push({ path:'/adminLogin'  })
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
        },
        /*查看个人信息*/
        details(){
          this.$router.push('/olderDetails/'+this.older.id);
        },
        edit(){
          this.$router.push('/olderEdit/'+this.older.id);
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
    display: flex;
    flex: 1;
    flex-direction:column;
    position: relative;
    /*background-image: url("../assets/img/beijing1.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: contain;*/
  }
 .main{

 }
 .lizi{
   width: 100%;
   height:calc(200% + 200px);
   display: flex;
   flex: 1;
   flex-direction:column;
   position: absolute;
   background-color: #d0dfd9;
 }
  .el-header, .el-footer {
    background-color: #585b56;
    color: #333333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #c6cace;
    color: #333;
    line-height: 20px;
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
  /*.el_row{*/
  /*  height: 50px;*/
  /*}*/
 /*.el-image__inner{*/
 /*  border-radius: 50%;*/
 /*}*/

</style>
