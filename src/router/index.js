import Vue from 'vue'
import Router from 'vue-router'
import myProject from '@/views/myProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myProject',
      component: myProject
    }
  ]
})
