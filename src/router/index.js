import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScenicSpot from '@/components/ScenicSpot'
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
      path:'/scenicSpot',
      name:'ScenicSpot',
      component:ScenicSpot
    }
  ]
})
