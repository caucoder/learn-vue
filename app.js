new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        end: false

    },
    methods: {
        punch: function(){
            console.log('punch')
            this.health -= 10;
            if(this.health<=0){
                this.end = true;
            }

        },
        restart: function(){
            console.log(this.end);
            this.health = 100;
            // 一定要记得加this
            this.end = false;
            
            
        }
    },
    computed: {

    }
});