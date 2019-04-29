<template>
    <div>
        <h1>{{blog.title}}</h1>
        <article>{{ blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul v-for="cat in blog.categories" v-bind:key="cat">
            <li>{{cat}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },
    created () {
        this.$http.get('https://caucoder.firebaseio.com/posts/'+this.id+".json").then(function(data){
            //console.log(data);
            this.blog = data.body;
        });
    }
}
</script>

<style scoped>
div{
    margin: 0% auto;
    text-align: center;
}
</style>
