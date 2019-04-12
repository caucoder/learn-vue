new Vue({
    el: '#vue-app',
    data: {
       age: 23,
       X: 0,
       Y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc
        },
        substract: function(dec){
            this.age -= dec
        },
        updateXY: function (event) {
            // console.log(event);   
            this.X = event.offsetX;
            this.Y = event.offsetY;
        }
    }
});