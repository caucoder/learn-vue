<template>
  <div>
      <keep-alive>
         <component v-bind:is="component"> </component>
      </keep-alive>
      <button v-on:click="component = 'form-one'">Show form one</button>
      <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>

import formone from './components/formone';
import formtwo from './components/formtwo';

export default {
  components:{
    'form-one': formone,
    'form-two': formtwo
  },
  data(){
    return {
      component: 'form-two'
    }
  },
  methods:{

  }

}
</script>

<style scoped>

</style>
