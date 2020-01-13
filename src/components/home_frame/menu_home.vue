<!--门户网站导航---Vanilla-->
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
        <el-menu-item index="首页" route="1">
          <router-link to="/">首页</router-link><br>
        </el-menu-item>
        <el-menu-item index="站内新闻" route="1">
          <router-link to="/newsList">站内新闻</router-link><br>
        </el-menu-item>
        <el-menu-item index="健康教育">
          <router-link to="/education_List">健康教育</router-link><br>
        </el-menu-item>
        <el-menu-item index="养生保健">
          <router-link to="/care_List">养生保健</router-link><br>
        </el-menu-item>
        <el-menu-item index="预防知识">
          <router-link to="/prevention_List">预防知识</router-link><br>
        </el-menu-item>
        <el-menu-item index="个人中心" v-if="isOlder==='1'">
          <router-link to="/person_center">个人中心</router-link><br>
        </el-menu-item>
        <el-menu-item index="体检管理" v-if="isOlder==='1'">
          <router-link to="/person_exam">体检管理</router-link><br>
        </el-menu-item>
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
        /*存储老人信息*/
        older:[],
        isOlder: "",
      };
    },
    methods: {
      ...mapMutations(['SET_MENU']),
      handleSelect(key, keyPath) {
        this.SET_MENU(keyPath);
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
    },
    created(){
      this.loadUser();
      var isOlder = localStorage.getItem("isOlder");
      if(isOlder!=='1'){
        this.$router.push('/');
      }
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
