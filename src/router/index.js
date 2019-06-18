import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';
// import adminRouter from './admin/admin';
// import demoRouter from './admin/demo';

export const asyncRouterMap = [];
/**
* path : 访问路径
* component: 页面组件
* children: 子菜单
* hidden: true                  不显示在侧边菜单
* alwaysShow: true              当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
*                               只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
*                               若你想不管路由下面的 children 声明的个数都显示你的根路由
*                               你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
* redirect: noredirect          当设置 noredirect 的时候该路由在面包屑导航中不可被点击
* name:'router-name'            设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
* meta : {
    title: 'title'              设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'            设置该路由的图标
    roles:['admin']             设置该路由的访问权限
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { title: '首页' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
