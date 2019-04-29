<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" placeholder="search blogs" v-model="search">
        <div v-for="blog in filterBlogs" v-bind:key="blog" class="single-blog">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

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
          console.log("hello");
          
          this.blogs =  data.body.slice(0,10); 
      });
  },
  filters:{
      toUppercase(value){
          return value.toUpperCase();
      }
  },
  directives:{
      "rainbow": {
          bind(el,binding,vnode){
              el.style.color = "#"+Math.random().toString(16).slice(2,6);
          }
      }
  },
  mixins: [searchMixin]

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
