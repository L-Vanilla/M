<!--20-1-2社区工作者后台菜单-->
<template>
  <el-row  class="tac  firstmenu" style="height:100%;" >
    <el-col style="height:100%;">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :router="true"
        text-color="#fff"
        @select="handleSelect"
        style="height:100%;">
        <el-submenu index="老人管理" style="background-color: #344344">
          <template slot="title">
            <p style="color:#ffffff;font-size: 14px; ">
              <img src="../../assets/basic_msg.png" style="width: 16px;height: 16px"/>
              &nbsp;&nbsp;老人管理</p>
          </template>
          <el-menu-item index="老人列表" route="older">老人列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import store from '@/vuex/store'
  import {mapMutations} from 'vuex'
  export default {
    name:'mymenu',
    data () {
      return {
        // user:[]
      }
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
    background-color: #354140 !important;
  }

</style>

<style scoped>
  /*导航颜色样式*/
  .el-menu-item {
    color: #ffffff;
    background-color: #2b3833 !important;
  }
  .el-menu-item:hover {
    background-color: #274039 !important;
    color: #009688;
    border-left: 3px solid #009688;
  }
  .el-menu{
    border-right: 0;
    background-color: #24443d;
  }
  .el-menu--inline .el-menu-item:hover{
    padding-left:43px !important;
  }
</style>
