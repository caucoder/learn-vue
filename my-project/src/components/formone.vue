<template>
  <div>
      <form-helper>
          <div slot="form-header">
              <h3>Form One - Contact Us</h3>
              <p>Fill in this form to contact us</p>
          </div>

          <div slot="form-fields">
              <input type="text" placeholder="name" required>
              <label>Your Message:</label>
              <textarea cols="30" rows="10"></textarea>
          </div>

          <div slot="form-controls">
              <button v-on:click="handleSubmit">Send</button>
          </div>

      </form-helper>
  </div>
</template>

<script>

import formHelper from './formHelper';

export default {
  components:{
      'form-helper': formHelper
  },
  data(){
    
  },
  methods:{
      handleSubmit: function(){
          alert("thanks to submitting form one & contact us");
      }
  }

}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
