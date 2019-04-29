import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'



Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});



//filter
Vue.filter("snippet",function(data){
  return data.slice(0,100)+"... ..."
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

