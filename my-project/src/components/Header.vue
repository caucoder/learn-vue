<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>


export default {
  props:{
    title:{
      type: String
    }
  },
  data(){
    return {
       
    }
  },
  methods:{
    changeTitle(){
      this.$emit("changeTitle","Q10Viking learning vue");
    }
  }

}
</script>

<style scoped>
  header{
    background-color: lightgreen;
    padding: 10px;
  }

  h1{
    color: #222;
    text-align: center;
  }
</style>
