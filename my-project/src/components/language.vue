<template>
    <ul>
        <li v-for="language in languages" v-bind:key="language"> {{language}}</li>
    </ul>
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
