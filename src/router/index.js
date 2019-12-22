import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import Login from '@/components/login'
import News from '@/components/news/list'//新闻列表
import NewsAdd from '@/components/news/add'//发表新闻
import HealthCare from '@/components/healthCare/list'//动态列表
import HealthCareAdd from '@/components/healthCare/add'//发布动态
import CareList from '@/components/healthCare/careList'//养生保健列表
import PreventionList from '@/components/healthCare/preventionList'//预防知识列表
import EducationList from '@/components/healthCare/educationList'//健康教育列表
import Notice from '@/components/notice/list'//公告列表



Vue.use(Router);

const router = new Router({
  mode:'history',
  routes: [
    // {
    //   path:'/',
    //   name:'login',
    //   component:Login,
    // },
    {
      path:'/',
      name:'index',
      component:Index,
      children:[
        {
          path:'/news',
          name:'news',
          component:News
        },
        {
          path:'/newsAdd',
          name:'newsAdd',
          component:NewsAdd
        },{
          path:'/healthCare',
          name:'healthCare',
          component:HealthCare
        },
        {
          path:'/healthCareAdd',
          name:'healthCareAdd',
          component:HealthCareAdd
        },
        {
          path:'/careList',
          name:'careList',
          component:CareList
        }, {
          path:'/preventionList',
          name:'preventionList',
          component:PreventionList
        },{
          path:'/educationList',
          name:'educationList',
          component:EducationList
        },{
          path:'/notice',
          name:'notice',
          component:Notice
        },

      ]
    }
  ]
})
export default router;

