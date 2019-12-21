import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import Login from '@/components/login'
import News from '@/components/news/list'
import NewsAdd from '@/components/news/add'



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
        },

      ]
    }
  ]
})
export default router;

