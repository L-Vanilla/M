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
import first_page from '@/components/user/first_page'//养生保健列表
import olderRegister from '@/components/olderRegister'//老人注册
import olderLogin from '@/components/olderLogin'//老人登录
import olderDetails from '@/components/user/olderDetails'//查看个人信息
import olderEdit from '@/components/user/olderEdit'//修改老人信息
import person_center from '@/components/user/person_center'//个人中心
import examList from '@/components/user/examList'//体检中心
import person_exam from '@/components/user/person_exam'//体检中心
/*------------------------------------------------------------------------*/
/*-----------相关的老人信息------------------------------------------------*/
import WorkerIndex from '@/components/workerIndex'
import Older from '@/components/older/list'//老人列表
import Member from '@/components/member/list'//家庭成员列表
import Older0perate from '@/components/older/older_operate'//老人相关操作列表
import Diagnosis from '@/components/diagnosis/list'//诊断信息列表
import Aid from '@/components/aid/list'//急救信息列表
import Exam from '@/components/exam/list'//体检信息列表
import Visits from '@/components/visits/list'//体检信息列表

/*统计*/
import sum_older from '@/components/Echarts/sum_older'//统计老人信息
Vue.use(Router);

const router = new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'home',/*首页*/
      component:Home,
      children:[
        {
          path:'/',
          name:'first_page',
          component:first_page
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
        },{
          path:'/olderDetails/:id',/*查看个人信息*/
          name:'olderDetails',
          component:olderDetails
        },{
          path:'/olderEdit/:id',/*修改个人信息*/
          name:'olderEdit',
          component:olderEdit
        },{
          path:'/person_center',/*个人中心*/
          name:'person_center',
          component:person_center,
          children:[
            {
              path:'/examList',/*体检中心*/
              name:'examList',
              component:examList,
            }
          ]

        },{
          path:'/person_exam',/*体检中心*/
          name:'person_exam',
          component:person_exam,
        }
      ]
    }, {
      path:'/olderRegister',/*老人注册*/
      name:'olderRegister',
      component:olderRegister,
    },{
      path:'/olderLogin',/*老人登录*/
      name:'olderLogin',
      component:olderLogin,
    },{
      path:'/adminLogin',/*系统登录*/
      name:'adminLogin',
      component:AdminLogin,
    },
    {
      path:'/adminIndex',/*系统后台*/
      name:'adminIndex',
      component:AdminIndex,
      children:[
        {
          path:'/adminIndex',/*统计*/
          name:'sum_older',
          component:sum_older
        },{
          path:'/news',/*新闻管理*/
          name:'news',
          component:News
        },
        {
          path:'/newsAdd',/*添加新闻*/
          name:'newsAdd',
          component:NewsAdd
        },{
          path:'/healthCare',/*整个动态*/
          name:'healthCare',
          component:HealthCare
        },
        {
          path:'/healthCareAdd',/*动态添加*/
          name:'healthCareAdd',
          component:HealthCareAdd
        },
        {
          path:'/careList',/*养生保健列表*/
          name:'careList',
          component:CareList
        }, {
          path:'/preventionList',/*预防知识列表*/
          name:'preventionList',
          component:PreventionList
        },{
          path:'/educationList',/*健身教育列表*/
          name:'educationList',
          component:EducationList
        },{
          path:'/notice',/*公告管理*/
          name:'notice',
          component:Notice
        },{
          path:'/admin',/*系统用户管理*/
          name:'admin',
          component:Admin
        },{
          path:'/worker',/*社区工作者管理*/
          name:'worker',
          component:Worker
        },{
          path:'/img',
          name:'img',
          component:Img
        }, {
          path:'/older',/*老人基本信息管理*/
          name:'older',
          component:Older
        },{
          path:'/member',/*家庭成员管理*/
          name:'member',
          component:Member
        },{
          path:'/older0perate',/*老人相关操作列表*/
          name:'older0perate',
          component:Older0perate
        },{
          path:'/diagnosis',/*诊断信息列表*/
          name:'diagnosis',
          component:Diagnosis
        },{
          path:'/aid',/*急救信息列表*/
          name:'aid',
          component:Aid
        },{
          path:'/exam',/*体检信息列表*/
          name:'exam',
          component:Exam
        },{
          path:'/visits',/*随访信息列表*/
          name:'visits',
          component:Visits
        },

      ]
    },
    // {
    //   path:'/workerIndex',/*系统后台*/
    //   name:'workerIndex',
    //   component:WorkerIndex,
    //   children:[
    //     {
    //       path:'/older',/*老人基本信息管理*/
    //       name:'older',
    //       component:Older
    //     },{
    //       path:'/member',/*家庭成员管理*/
    //       name:'member',
    //       component:Member
    //     },{
    //       path:'/older0perate',/*老人相关操作列表*/
    //       name:'older0perate',
    //       component:Older0perate
    //     },{
    //       path:'/diagnosis',/*诊断信息列表*/
    //       name:'diagnosis',
    //       component:Diagnosis
    //     },{
    //       path:'/aid',/*急救信息列表*/
    //       name:'aid',
    //       component:Aid
    //     },{
    //       path:'/exam',/*体检信息列表*/
    //       name:'exam',
    //       component:Exam
    //     },{
    //       path:'/visits',/*随访信息列表*/
    //       name:'visits',
    //       component:Visits
    //     },
    //   ]
    // }
  ]
})
export default router;

