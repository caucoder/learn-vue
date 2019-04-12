Vue.component("greeting", {
    template: "<p>Hey {{name}}, I am a re-usable component. <button v-on:click='changeName'>change name</button></p>",
    // data是function,每次返回一个新对象一遍template互不影响 
    data: function(){ 
        return{
            name: 'Q10Viking'
        }
    },
    methods: {
        changeName: function(){
            this.name = "huangzhuangzhuang"
        }
    }
});


var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue one"
    }
});



var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue two"
    }
   
});

