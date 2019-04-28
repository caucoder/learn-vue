import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

//filter
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
});


Vue.filter("snippet",function(data){
  return data.slice(0,100)+"... ..."
})

new Vue({
  render: h => h(App),
}).$mount('#app')

