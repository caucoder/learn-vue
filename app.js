new Vue({
    el: '#vue-app',
    data: {
        name:'',
        age:''
    },
    methods: {
        logName: function () {
            console.log("you enter your name");
        },
        logAge: function () {
            console.log("you enter your age");
        }
    }
});