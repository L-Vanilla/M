import Vue from 'vue'
import Router from 'vue-router'
/*后台系统管理员---------------------------------------------*/
import AdminIndex from '@/components/adminIndex'
import News from '@/components/news/list'//新闻列表
import NewsAdd from '@/components/news/add'//发表新闻
import HealthCare from '@/components/healthCare/list'//动态列表
import HealthCareAdd from '@/components/healthCare/add'//发布动态
import CareList from '@/components/healthCare/careList'//养生保健列表
import PreventionList from '@/components/healthCare/preventionList'//预防知识列表
import EducationList from '@/components/healthCare/educationList'//健康教育列表
import Notice from '@/components/notice/list'//公告列表
import Admin from '@/components/admin/list'//管理员列表
import Worker from '@/components/worker/list'//社区工作人员列表
import Img from '@/components/worker/img'//社区工作人员列表
import AdminLogin from '@/components/adminLogin'//社区工作人员列表
/*------------------------- ----------  ----------*/
/*---------前台显示------------------------------------------*/
import Home from '@/components/home'//首页
import ss from '@/components/user/ss'//测试
import newsList from '@/components/user/newsList'//新闻列表
import newsDetails from '@/components/user/newsDetails'//新闻详情页
import education_List from '@/components/user/educationList'//健身教育列表
import healthCareDetails from '@/components/user/healthCareDetails'//动态详情页
import prevention_List from '@/components/user/preventionList'//预防知识列表
import care_List from '@/components/user/careList'//养生保健列表
/*------------------------------------------------------------------------*/
/*-----------相关的老人信息------------------------------------------------*/
import Older from '@/components/older/list'//社区工作人员列表

Vue.use(Router);

const router = new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/ss',
          name:'ss',
          component:ss
        },{
          path:'/newsList',
          name:'newsList',
          component:newsList
        },{
          path:'/newsDetails/:id',
          name:'newsDetails',
          component:newsDetails
        },{
          path:'/education_List',/*健身教育列表*/
          name:'education_List',
          component:education_List
        },{
          path:'/healthCareDetails/:id',/*健身教育详情*/
          name:'healthCareDetails',
          component:healthCareDetails
        },{
          path:'/prevention_List',/*预防知识列表*/
          name:'prevention_List',
          component:prevention_List
        },{
          path:'/care_List',/*养生保健列表*/
          name:'care_List',
          component:care_List
        },
      ]
    }, {
      path:'/adminLogin',
      name:'adminLogin',
      component:AdminLogin,
    },
    {
      path:'/adminIndex',
      name:'adminIndex',
      component:AdminIndex,
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
        },{
          path:'/admin',
          name:'admin',
          component:Admin
        },{
          path:'/worker',
          name:'worker',
          component:Worker
        },{
          path:'/img',
          name:'img',
          component:Img
        },{
          path:'/older',
          name:'older',
          component:Older
        },

      ]
    }
  ]
})
export default router;

