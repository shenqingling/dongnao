import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '../components/User'
import Post from '../components/Post'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/user',
      name: '用户',
      component: User
    },{
      path: '/post',
      name: '说说',
      component: Post
    }
  ]
})
