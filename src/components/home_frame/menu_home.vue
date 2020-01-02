<!--门户网站导航-->
<template>
  <el-row  class="tac  firstmenu" style="height:10%;" >
    <el-col style="height:10%;width:80%;margin-left: 10%">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#e5ded4"
        text-color="#F0EFCD"
        active-text-color="#585b56">
<!--        <el-menu-item index="1">首页</el-menu-item>-->
        <el-menu-item index="站内新闻" route="1">
          <router-link to="/newsList">站内新闻</router-link><br>
        </el-menu-item>
        <el-menu-item index="健康教育" route="ss">
          <router-link to="/education_List">健康教育</router-link><br>
        </el-menu-item>
        <el-menu-item index="养生保健">
          <router-link to="/care_List">养生保健</router-link><br>
        </el-menu-item>
        <el-menu-item index="预防知识">
          <router-link to="/prevention_List">预防知识</router-link><br>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>

    </el-col>
  </el-row>
</template>

<script>
  import store from '@/vuex/store'
  import {mapMutations} from 'vuex'
  export default {
    name:'menu_home',
    data() {
      return {
        activeIndex2: '1',
      };
    },
    methods: {
      ...mapMutations(['SET_MENU']),
      handleSelect(key, keyPath) {
        this.SET_MENU(keyPath);
      },
      //获取用户数据
      // loadComments(){
      //   var list = JSON.parse(localStorage.getItem("user") || '[]');
      //   this.user = list
      // }
    },
    created(){
      // this.loadComments()
    },
    store
  }
</script>
<style>
  .firstmenu .el-submenu__title:hover {
    padding-left:23px !important ;
  }

  .el-submenu__title{
    color:  #ffffff!important;
  }
  .el-submenu__title:hover {
    background-color:  #263238 !important;
  }

</style>

<style scoped>
  /*导航颜色样式*/
  .el-menu-item {
    color: #ffffff;
    background-color: #263238 !important;
  }
  .el-menu-item:hover {
    background-color:#333740!important;
    color: #009688;
    border-left: 3px solid #009688;
  }
  .el-menu{
    border-right: 0;
    background-color: #333744;
  }
  .el-menu--inline .el-menu-item:hover{
    padding-left:43px !important;
  }
</style>
