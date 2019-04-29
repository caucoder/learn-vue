<template>
    <div>
        <h1>{{blog.title}}</h1>
        <article>{{ blog.body}}</article>
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
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
            console.log(data);
            this.blog = data.body;
        });
    }
}
</script>

<style>

</style>
