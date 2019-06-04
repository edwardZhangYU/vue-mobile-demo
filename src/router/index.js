import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HotService from '@/components/HotService'
import Search from '@/components/Search'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path:'/a',
      name:'NotFound',
      component:NotFound
    },{
      path:'/hotService',
      name:'HotService',
      component:HotService
    },{
      path:'/search',
      name:'Search',
      component:Search
    }
  ]
})
