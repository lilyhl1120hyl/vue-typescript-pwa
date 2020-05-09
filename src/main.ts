import Vue from 'vue'
// 插件
import FastClick from 'fastclick';
import VueIconFont from 'vue-icon-font'; //图标
import vueEventCalendar from 'vue-event-calendar'; // 日历
import VueLazyComponent from '@xunlei/vue-lazy-component'; // 组件懒加载
import VueSkeletonLoading from 'vue-skeleton-loading'; // 骨架屏
// 样式
import 'normalize.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import 'vue-event-calendar/dist/style.css';
// 组件
import App from './App.vue'
import router from './router'
import store from './store'
// 注册配置
import './registerServiceWorker';
import '@/assets/iconfont.js';


//兼容IOS的300ms延迟问题
if('addEventListener' in document){
  document.addEventListener(
    'DOMContentLoaded',
    ()=>{
      (FastClick as any).attach(document.body)
    },
    false,
  );
}

// 挂载
Vue.use(VueLazyComponent);
Vue.use(VueSkeletonLoading);
Vue.use(vueEventCalendar, { locale: 'zh', weekStartOn: 1 });
Vue.use(VueIconFont);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
