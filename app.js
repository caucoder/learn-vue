new Vue({
    el: '#vue-app',
    data: {
        name: 'huangzhuangzhuang',
        job: 'Student',
        website: 'https://github.com/Q10Viking',
        websiteTag: '<a href="https://github.com/Q10Viking">my github</a>'
    },
    methods: {
        greeting: function(time){
            return "Good "+time+" "+this.name;
        }
    }
});