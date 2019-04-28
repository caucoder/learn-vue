<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" v-bind:key="blog" class="single-blog">
            <h2>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>


export default {
  components:{
    
  },
  data(){
    return {
        blogs:[]
    }
  },
  methods:{

  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.blogs =  data.body.slice(0,10); 
      });
  }

}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
