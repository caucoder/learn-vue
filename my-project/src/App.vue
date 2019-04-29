<template>
  <div>
    <show-title></show-title>
    <show-blogs></show-blogs>
  </div>
</template>

<script>

import showBlogs from './components/showBlogs.vue';
import showTitle from './components/showTitle.vue';

export default {
  components:{
    'show-blogs': showBlogs,
    'show-title': showTitle
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
