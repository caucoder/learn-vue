<template>
  <div>
    <app-header></app-header>
  <router-view></router-view>
  </div>
</template>

<script>

import showBlogs from './components/showBlogs.vue';
import showTitle from './components/showTitle.vue';
import header from './components/header.vue';

export default {
  components:{
    'show-blogs': showBlogs,
    'show-title': showTitle,
    'app-header': header
  },
  data(){
    return {
      
    }
  },
  methods:{
    
  }

}
</script>

<style scoped>

</style>
