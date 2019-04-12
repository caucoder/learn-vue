import Vue from 'vue'
import App from './App.vue'

// 全局注册组件
/* 
import language from './components/language.vue'
Vue.component('language',language);
 */
new Vue({
  render: h => h(App),
}).$mount('#app')

