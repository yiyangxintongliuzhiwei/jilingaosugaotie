/**
 * @author lsz
 * @desc 路由配置信息
 */
import Vue from 'vue'
import Router from 'vue-router'
/* 子路由注册 */
// import app0Routers from '@/components/app/app0/router.js'
import app1Routers from '@/components/app/app1/router.js'
import app2Routers from '@/components/app/app2/router.js'
import app3Routers from '@/components/app/app3/router.js'
import app4Routers from '@/components/app/app4/router.js'
// import app4Routers from '@/components/app/app4/router.js'
// import app5Routers from '@/components/app/app5/router.js'
// import app6Routers from '@/components/app/app6/router.js'
// app0Routers.forEach((item, index) => {
//   item.name = 'appview' + index
// })
// let appFLowRoute = []
// app0Routers.forEach((item, index) => {
//   appFLowRoute.push({
//     name: 'appflow' + index,
//     path: item.path,
//     component: item.component
//   })
// })
/* 一级视图路由配置 */
// let appFlow = r => require.ensure([], () => r(require(`../components/app/app/App`)), `app/appflow`)
// let app0 = r => require.ensure([], () => r(require(`../components/app/app0/App`)), `app/app0`)
let app1 = r => require.ensure([], () => r(require(`../components/app/app1/App`)), `app/app1`)
let app2 = r => require.ensure([], () => r(require(`../components/app/app2/App`)), `app/app2`)
let app3 = r => require.ensure([], () => r(require(`../components/app/app3/App`)), `app/app3`)
let app4 = r => require.ensure([], () => r(require(`../components/app/app4/App`)), `app/app4`)
// let app4 = r => require.ensure([], () => r(require(`../components/app/app4/App`)), `app/app4`)
// let app5 = r => require.ensure([], () => r(require(`../components/app/app5/App`)), `app/app5`)
// let app6 = r => require.ensure([], () => r(require(`../components/app/app6/App`)), `app/app6`)
Vue.use(Router)
let baseUrl = '/:userId/:dataType/' // 基路径
// 路由配置信息
export default new Router({
  // routes: [
  //   {
  //     path: `${baseUrl}1`,
  //     name: '1',
  //     component: app1,
  //     children: app1Routers
  //   }],
  routes: [
    {
      path: `${baseUrl}1`,
      name: '1',
      component: app1,
      children: app1Routers
    },
    {
      path: `${baseUrl}2`,
      name: '2',
      component: app2,
      children: app2Routers
    },
    {
      path: `${baseUrl}3`,
      name: '3',
      component: app3,
      children: app3Routers
    },
    {
      path: `${baseUrl}4`,
      name: '4',
      component: app4,
      children: app4Routers
    }
    // {
    //   path: `${baseUrl}4 `,
    //   name: '4',
    //   component: app4,
    //   children: app4Routers
    // }
  ]
})
