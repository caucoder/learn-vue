<template>
  <div >
    <h1>{{title}}</h1>
    <language></language>
  </div>
</template>

<script>
import language from './components/language.vue'

export default {
  components:{
    'language': language
  },
  data(){
    return {
      title: 'Your first Vue file, wooo!'
    }
  },
  methods:{
    greeting: function(){
      return "Hello World,Hello Vue."
    }
  }
}
</script>

<style>

</style>
