<template>
    <ul>
        <li v-for="language in languages"> {{language}}</li>
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
