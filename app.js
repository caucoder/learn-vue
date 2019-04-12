

var one = new Vue({
    el: '#vue-app-one',
    data: {
        prompt: "Your fav food",
        food: ""
    },
    methods: {
        submit: function(){
            // console.log(this.$refs.inputRef.value);
            this.food = this.$refs.inputRef.value;
            console.log(this.$refs.divRef.innerText);
        }   
    }
});

