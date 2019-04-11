new Vue({
    el: '#vue-app',
    data: {
        name: 'huangzhuangzhuang',
        job: 'Student'
    },
    methods: {
        greeting: function(time){
            return "Good "+time+" "+this.name;
        }
    }
});