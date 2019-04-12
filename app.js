new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
    },
    computed: {
        computedClass: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});