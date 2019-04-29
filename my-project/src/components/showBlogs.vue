<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" placeholder="search blogs" v-model="search">
        <div v-for="blog in filterBlogs" v-bind:key="blog" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id">
                <h2>{{ blog.title | toUppercase }}</h2>   
            </router-link> 
            <article>{{ blog.content | snippet }}</article>
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
      this.$http.get('https://caucoder.firebaseio.com/posts.json').then(function(data){
        //promisedObj
        return data.json(); 
      }).then(function(data){
          var blogArrays = [];
          for(let key in data){
              data[key].id = key;
              blogArrays.push(data[key]);
          }
          //console.log(blogArrays);
          this.blogs = blogArrays;
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
