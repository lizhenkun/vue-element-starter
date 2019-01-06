import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'

// 阿里flexible.js @see http://hjingren.cn/2017/06/16/%E5%9F%BA%E4%BA%8Evue-cli%E9%85%8D%E7%BD%AE%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94/
import 'lib-flexible'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
