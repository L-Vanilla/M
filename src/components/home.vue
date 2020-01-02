<template>
  <div >
  <el-container class="wrap" @scroll="orderScroll">
    <el-header></el-header>
    <!--<div style="width: 100%;height: 50px;background-color:black"></div>-->
    <div style="width: 100%;height: 50px"></div>
    <Menu1></Menu1>
    <el-container style="margin-top: 10px" >
      <el-aside style="margin-left:15%"  >
        <div style="margin-top: 20%;height: 50%">
          <el-form :model="notice"  ref="notice"  class="demo-ruleForm">
            <el-form-item label="" prop="title" >
              <h1 style="text-align: center">{{notice.title}}</h1>
            </el-form-item>
            <el-form-item label="" prop="content" >
                <h2 style="text-align: center">{{notice.content}}</h2>
            </el-form-item>
          </el-form>
        </div>

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

          }


        }
      },
      components: {
        Menu1,
        MyBreadcrumb1
      },
      created(){
        this.getData();
      },
      watch:{
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

        getData(){
          this.get("notice/list",(data)=>{
            this.notice=data.list[0];
            console.log(this.notice);
          },this.queryParams);
        },

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

</style>
