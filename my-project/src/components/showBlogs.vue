<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" placeholder="search blogs" v-model="search">
        <div v-for="blog in filterBlogs" v-bind:key="blog" class="single-blog">
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
        blogs:[],
        search: ""
    }
  },
  methods:{

  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.blogs =  data.body.slice(0,10); 
      });
  },
  computed:{
      filterBlogs: function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
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
