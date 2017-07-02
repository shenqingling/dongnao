import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 用户列表
import User from '../components/User'
// 用户详情数据
import UserItem from '../components/User.item'
// 说说列表
import Post from '../components/Post'
// 聊天信息
import Message from '../components/Message'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/user',
        name: '用户',
        component: User
    }, {
        path: '/user/:id',
        name: '用户项目',
        component: UserItem,
        hidden: true
    }, {
        path: '/post',
        name: '说说',
        component: Post
    }, {
        path: '/message',
        name: '聊天信息',
        component: Message,
        hidden: true
    }]
})
