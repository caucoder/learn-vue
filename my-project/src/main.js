import Vue from 'vue'
import App from './App.vue'


/* 
new Vue({
  render: h => h(App),
}).$mount('#app')
 */

new Vue({
  el: '#app',
  render: h => h(App)
});

