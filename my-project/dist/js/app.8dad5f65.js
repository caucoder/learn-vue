(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],g=0,d=[];g<s.length;g++)i=s[g],n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0c63":function(e,t,o){"use strict";var r=o("f840"),n=o.n(r);n.a},1:function(e,t){},2204:function(e,t,o){},"31f49":function(e,t,o){"use strict";var r=o("e9b8"),n=o.n(r);n.a},"54c2":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("app-header"),o("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"show-blogs"}},[o("h1",[e._v("All Blog Articles")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"search blogs"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._l(e.filterBlogs,function(t){return o("div",{key:t,staticClass:"single-blog"},[o("router-link",{attrs:{to:"/blog/"+t.id}},[o("h2",[e._v(e._s(e._f("toUppercase")(t.title)))])]),o("article",[e._v(e._s(e._f("snippet")(t.content)))])],1)})],2)},s=[],c=(o("6b54"),o("386d"),o("4917"),{computed:{filterBlogs:function(){var e=this;return this.blogs.filter(function(t){return t.title.match(e.search)})}}}),l={components:{},data:function(){return{blogs:[],search:""}},methods:{},created:function(){this.$http.get("https://caucoder.firebaseio.com/posts.json").then(function(e){return e.json()}).then(function(e){var t=[];for(var o in e)e[o].id=o,t.push(e[o]);this.blogs=t})},filters:{toUppercase:function(e){return e.toUpperCase()}},directives:{rainbow:{bind:function(e,t,o){e.style.color="#"+Math.random().toString(16).slice(2,6)}}},mixins:[c]},u=l,g=(o("beef"),o("2877")),d=Object(g["a"])(u,i,s,!1,null,"7a880346",null),p=d.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"show-blogs"}},[o("h1",[e._v("All Blog Articles")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"search blogs"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._l(e.filterBlogs,function(t){return o("div",{key:t,staticClass:"single-blog"},[o("h2",{directives:[{name:"rainbow",rawName:"v-rainbow"}]},[e._v(e._s(e._f("toUppercase")(t.title)))])])})],2)},v=[],b={components:{},data:function(){return{blogs:[],search:""}},methods:{},created:function(){this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(e){console.log(e),console.log("hello"),this.blogs=e.body.slice(0,10)})},filters:{toUppercase:function(e){return e.toUpperCase()}},directives:{rainbow:{bind:function(e,t,o){e.style.color="#"+Math.random().toString(16).slice(2,6)}}},mixins:[c]},f=b,m=(o("0c63"),Object(g["a"])(f,h,v,!1,null,"499ed1f0",null)),_=m.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",[o("ul",[o("li",[o("router-link",{attrs:{to:"/",exact:""}},[e._v("Blog")])],1),e._v("|\n    "),o("li",[o("router-link",{attrs:{to:"/add",exact:""}},[e._v("Add Blog")])],1)])])},w=[],x={},k=x,$=(o("31f49"),Object(g["a"])(k,y,w,!1,null,"d1752c1a",null)),A=$.exports,j={components:{"show-blogs":p,"show-title":_,"app-header":A},data:function(){return{}},methods:{}},O=j,P=Object(g["a"])(O,n,a,!1,null,"26adf222",null),B=P.exports,N=o("28dd"),z=o("8c4f"),C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"add-blog"}},[o("form",{directives:[{name:"show",rawName:"v-show",value:!e.submitted,expression:"!submitted"}]},[o("label",[e._v("Title: ")]),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.blog.title,expression:"blog.title",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:e.blog.title},on:{change:function(t){return e.$set(e.blog,"title",t.target.value)}}}),o("label",[e._v("Blog Content: ")]),o("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:e.blog.content,expression:"blog.content",modifiers:{lazy:!0}}],domProps:{value:e.blog.content},on:{change:function(t){return e.$set(e.blog,"content",t.target.value)}}}),o("div",{attrs:{id:"checkboxes"}},[o("p",[e._v("Blog Categories:")]),o("label",[e._v("Ninjas")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"ninjas"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"ninjas")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a="ninjas",i=e._i(o,a);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([a])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",n)}}}),o("label",[e._v("Wizards")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"wizards"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"wizards")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a="wizards",i=e._i(o,a);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([a])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",n)}}}),o("label",[e._v("Mario")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"mario"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"mario")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a="mario",i=e._i(o,a);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([a])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",n)}}}),o("label",[e._v("Cheese")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"cheese"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"cheese")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a="cheese",i=e._i(o,a);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([a])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",n)}}})]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.blog.author,expression:"blog.author"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.blog,"author",t.target.multiple?o:o[0])}}},e._l(e.authors,function(t){return o("option",{key:t},[e._v(e._s(t))])}),0),o("hr"),o("button",{on:{click:function(t){return t.preventDefault(),e.post(t)}}},[e._v("Add Blog")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted,expression:"submitted"}]},[o("h3",[e._v("Thanks for adding your post")])]),o("div",{attrs:{id:"preview"}},[o("h3",[e._v("Preview blog")]),o("p",[e._v("Blog title: "+e._s(e.blog.title))]),o("p",[e._v("Blog content:")]),o("p",{staticStyle:{"white-space":"pre"}},[e._v(e._s(e.blog.content))]),o("p",[e._v("Blog Categories:")]),o("ul",e._l(e.blog.categories,function(t){return o("li",{key:t},[e._v(" "+e._s(t)+" ")])}),0),o("p",[e._v("Author: "+e._s(e.blog.author))])])])},S=[],M={data:function(){return{blog:{title:"",content:"",categories:[],author:""},authors:["Q10Viking","huangzhuangzhuang","Other"],submitted:!1}},methods:{post:function(){this.$http.post("https://caucoder.firebaseio.com/posts.json",this.blog).then(function(e){console.log(e),this.submitted=!0})}}},E=M,U=(o("77ee"),Object(g["a"])(E,C,S,!1,null,"27629705",null)),T=U.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v(e._s(e.blog.title))]),o("article",[e._v(e._s(e.blog.body))])])},D=[],Q={data:function(){return{id:this.$route.params.id,blog:{}}},created:function(){this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then(function(e){console.log(e),this.blog=e.body})}},V=Q,W=Object(g["a"])(V,J,D,!1,null,null,null),q=W.exports,F=[{path:"/",component:p},{path:"/add",component:T},{path:"/blog/:id",component:q}];r["a"].use(N["a"]),r["a"].use(z["a"]);var G=new z["a"]({routes:F});r["a"].filter("snippet",function(e){return e.slice(0,100)+"... ..."}),new r["a"]({render:function(e){return e(B)},router:G}).$mount("#app")},"77ee":function(e,t,o){"use strict";var r=o("2204"),n=o.n(r);n.a},beef:function(e,t,o){"use strict";var r=o("54c2"),n=o.n(r);n.a},e9b8:function(e,t,o){},f840:function(e,t,o){}});
//# sourceMappingURL=app.8dad5f65.js.map