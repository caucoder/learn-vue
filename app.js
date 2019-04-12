var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "one"
    },
    computed: {
        greeting: function(){
            return 'Hello, from app one :)';
        }
    }
});



var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "two"
    },
    methods: {
        changeTitle: function(){
            one.title = "Change by Two";
        }
    },
    computed: {
        greeting: function(){
            return "你好，我是Two,I'm speaking to you";
        }
    }
});

