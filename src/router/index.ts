import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Habit from '../views/Habit/Habit.vue';
import Setting from '../views/Setting/Setting.vue';

const Login= (r:any)=>(require as any).ensure([],()=>r(require('@/views/Login/Login'),'Login'))

const Feedback = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Feedback/Feedback'), 'Feedback'),
  ); // 反馈

  const UpdateLog = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/UpdateLog/UpdateLog'), 'UpdateLog'),
  ); // 更新

  const New = (r: any) =>
  (require as any).ensure([], () => r(require('@/views/New/New'), 'New')); // 新建

  const Library = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/New/Library/Library'), 'Library'),
  ); // 习惯库

const NewHabit = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/New/Habit/Habit'), 'Habit'),
  ); // 新建习惯

  
const Edit = (r: any) =>
(require as any).ensure([], () => r(require('@/views/Edit/Edit'), 'Edit')); // 编辑

const Calendar = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/Calendar/Calendar'), 'Calendar'),
  ); // 日历

const Times = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/Times/Times'), 'Times'),
  ); // 时间段

const Manage = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/Manage/Manage'), 'Manage'),
  ); // 管理

const Remind = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/Remind/Remind'), 'Remind'),
  ); // 提醒

const IconSetting = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/IconSetting/IconSetting'), 'IconSetting'),
  ); // 图标设置

  const Recycle = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Edit/Recycle/Recycle'), 'Recycle'),
  ); // 回收站
  
  const Card = (r: any) =>
  (require as any).ensure([], () => r(require('@/views/Card/Card'), 'Card')); // 打卡

const Receive = (r: any) =>
  (require as any).ensure([], () =>
    r(require('@/views/Card/Receive/Card'), 'Receive'),
  ); // 打卡
// const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login')



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'today',
    component: Home,
    meta: { main: true },
  },{
    path: '/habit',
    name: 'habit',
    component: Habit,
    meta: { main: true },
  },{
    path: '/setting',
    name: '设置',
    component: Setting,
    meta: { main: true },
  },{
    path: '/login',
    name: '登录',
    component: Login,
  },{
    path: '/feedback',
    name: '反馈',
    component: Feedback,
  },{
    path: '/update',
    name: '更新日志',
    component: UpdateLog,
  },{
    path: '/new',
    name: '新建习惯',
    component: New,
    children: [
      {
        path: 'library',
        name: '习惯库',
        component: Library,
      },
      {
        path: 'habit',
        name: '习惯',
        component: NewHabit,
      },
    ],
  },{
    path: '/edit',
    name: '编辑习惯',
    component: Edit,
    children: [
      {
        path: 'calendar',
        name: '习惯记录',
        component: Calendar,
      },
      {
        path: 'recycle',
        name: '已归档习惯',
        component: Recycle,
      },
      {
        path: 'icon',
        name: '图表设置',
        component: IconSetting,
      },
      {
        path: 'times',
        name: '选择习惯时段',
        component: Times,
      },
      {
        path: 'manage',
        name: '时段管理',
        component: Manage,
      },
      {
        path: 'remind',
        name: '提醒设置',
        component: Remind,
      },
      {
        path: 'habit',
        name: '编辑习惯',
        component: NewHabit,
      },
    ],
  },{
    path: '/card',
    name: '卡片管理',
    component: Card,
    children: [
      {
        path: 'receive',
        name: '今日卡片',
        component: Receive,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
