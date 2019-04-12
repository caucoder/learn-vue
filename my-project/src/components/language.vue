<template>
  <div>
      <h1>List Programmer languages</h1>
      <ul>
          <li v-for="language in languages" v-bind:key="language"> {{language}}</li>
      </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      languages: ['Java','Javascript','Python','C++']
    }
  }
}
</script>

<style scoped>

h1{
  color: green;
}
</style>
