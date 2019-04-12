
## learn vue lesson


### [`lesson1 start`](https://github.com/caucoder/learn-vue/tree/lesson1)



1. app.js 也就是声明Vue对象的代码需要在使用的div后面声明，不能在前面.
2. vue对象挂载在对应的div




### [`lesson2 methods`](https://github.com/caucoder/learn-vue/tree/lesson2)


1. vue定义方法methods，在方法中访问data通过this
2. 在html中访问方法


### [`lesson3 data binding`](https://github.com/caucoder/learn-vue/tree/lesson3)


1. v-bind: 也可以是 : ,讲vue对象的数据与标签属性绑定
2. v-html: 将字符串转化为html
3. 数据的key需要用双引号，而不是单引号


### [`lesson4 events`](https://github.com/caucoder/learn-vue/tree/lesson4)

1. v-on: 常用事件click,dblclick,mousemove
2. html通过vue事件调用方法
3. 通过方法改变vue对象数据，然后在html中实时显示
4. 事件方法，有参数则传递参数，没有则不用写括号
5. 在浏览器中开发者模式中观察console.log输出的信息，event


### [`lesson5 events modifiers`](https://github.com/caucoder/learn-vue/tree/lesson5)

1. v-on:click.once 只允许点击一次生效
2. v-on:click.prevent 如：链接，通过点击，阻止访问


### [`lesson6 keyboard events`](https://github.com/caucoder/learn-vue/tree/lesson6)

1. keyup.enter
2. keyup.alt.enter alt键与enter键结合

### [`lesson7 Two-way data binding`](https://github.com/caucoder/learn-vue/tree/lesson7)


1. v-model='name' 将html的数据，如input的内容绑定到vue对象中

### [`lesson8 computed properties`](https://github.com/caucoder/learn-vue/tree/lesson8)

1. v-on:click="a++"
2. 与methods的区别，computed更加高效，只调用vue中数据发生改变的方法
3. html中调用不需要括号

### [`lesson9 dynamic css class`](https://github.com/caucoder/learn-vue/tree/lesson9)


1. v-bind语法决定标签是否使用css样式
    ```html
    <div v-bind:class="{red: false}"></div>
    ```
2. css文件定义了class（.available）的样式,在html中 v-bind:class="{available: available}",而vue可以通过控制第二个available的值
3. 通过computed的形式进行设置

### [`lesson10 conditions`](https://github.com/caucoder/learn-vue/tree/lesson10)

1. v-if,v-else-if,决定是否显示该标签
2. v-show 与v-if不同在于，在page source里面，不显示是通过css样式控制，而v-if是直接没有该代码
    ```html
    <p style="display: none;">Whooo,succuss :) </p>
    ```



### [`lesson11 looping with v-for`](https://github.com/caucoder/learn-vue/tree/lesson11)

1. v-for,循环该标签
    ```html
    <li v-for="character in characters"> {{character}}</li>
    ```
2. 遍历对象list,以及遍历对象所有属性
3. 遍历时带上index
    ```html
    v-for="(ninja,index) in ninjas"
    ```
4. template标签在html中不会显示
    ```html
    <template v-for="ninja in ninjas">
        <div v-for="(val, key) in ninja">
            <p>{{key}} - {{ val }}</p>
        </div>
        <hr />
    </template>
    ```



----------


### [`lesson12 小项目-Punchbag Game`](https://github.com/caucoder/learn-vue/tree/lesson12)

![](show/punchGame.png)

1. 做一个小项目巩固前面所学到的知识
2. vue控制css显示都是听过true方式，html中图片处理也交给css
    ```html
    <div id="bag" v-bind:class="{burst: end}">
    ```
3. 犯错
    1. 在vue对象的方法中访问数据，一定要记得加上this




----------

### [`lesson13 Multiple Vue Instances`](https://github.com/caucoder/learn-vue/tree/lesson13)

1. vue对象对应一个绑定的div,vue对象可以访问另外一个vue对象


### [`lesson14 Intro to Components`](https://github.com/caucoder/learn-vue/tree/lesson14)

1. 复用，template中访问数据，data定义是一个function
    ```javascript
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
    ```
2. html中使用
    ```html
    <greeting></greeting>
    ```



### [`lesson15 Refs`](https://github.com/caucoder/learn-vue/tree/lesson15)

1. vue通过**this.$refs**引用html中标有**ref**的标签，我们通过console.log(this.$refs)打印的内容找到我们需要的信息
```javascript
//vue部分代码
submit: function(){
    // console.log(this.$refs.inputRef.value);
    this.food = this.$refs.inputRef.value;
    console.log(this.$refs.divRef.innerText);
}  
//html中input部分代码
 <input type="text" ref="inputRef" v-bind:placeholder="prompt">
```



### [`lesson16 vue-cli`](https://github.com/caucoder/learn-vue/tree/lesson16)

1. 使用vue-cli创建项目,cli(command line interface)
    ```bash
    vue create my-project
    npm run serve
    ```

### [`lesson17 Vue Files & The Root Component`](https://github.com/caucoder/learn-vue/tree/lesson17)

1. 创建第一个vue-cli项目，并输出hello world
2. 与之前相比，index.html中没有对main.js的显示声明使用.
3. main.js的vue对象是通过vue文件render而成的。




### [`lesson18 Nesting components`](https://github.com/caucoder/learn-vue/tree/lesson18)

1. App.vue is the root component
2. component注册global全局方式，在main.js文件中
    ```javascript
    // 全局注册组件
    
    import language from './components/language.vue'
    Vue.component('language',language);
    
    ```
3. component注册local局部方式，如在App.vue中使用
    ```javascript
        <script>
        import language from './components/language.vue'
        export default {
        components:{
            'language': language
        },
        //...
        }
        </script>
    ```
4. 组件注册，然后使用

## Import Notes

1. html-> vue 改变vue的数据
    1. event方法（调用方法，或者直接改变data）
    2. v-model
2. vue->html,html渲染数据
    1. v-bind


----------



## vscode插件

1. Live Server
2. VueHelper

