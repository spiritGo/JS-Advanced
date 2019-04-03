## Vue

* * *

## 使用

1. 引入vue.js插件
2. 编写html界面
3. 创建Vue对象

```javascript
//该代码在script标签内
new Vue({});
```

4. 绑定vue对象所能控制的区域

```javascript
new Vue({
    el: 'selector'
});
```

5. 在vue对象内添加页面所需的数据,事件...

```javascript
new Vue({
    el: 'selector',
    data: {},
    ...
});
```

## 插值语法(interpolate)

- 动态绑定元素的内容

```html
<any>{{模型变量}}</any>
<any>{{各种有返回值的js表达式}}</any>
eg:
<div id="app">
    <h1>用户名:{{name}}</h1>
    <h1>积分:{{score}}</h1>
    <h1>性别:{{sex==1?'男':'女'}}</h1>
    <h1>下单时间:{{new Date(orderTime).toLocaleString()}}</h1>
    <h1>星期{{week[0]}}</h1>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            name: 'tom',
            score: 2000,
            sex: 1,
            orderTime: 124556545654,
            week: ['日', '一', '二', '三']
        }
    });
</script>
<!--输出结果:
用户名:tom
积分:2000
性别:男
下单时间:1973/12/12 下午11:02:25
星期日
-->
```

- html

```html
<div id="app">
    <div v-html="message"></div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            message: '<h1>holloworld</h1>'
        }
    })
</script>
```

- 属性

```html
<style>
    .class1 {
        background: #444;
        color: #eee;
    }
</style>


<div id="app">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{'class1': use}">
        v-bind:class 指令
    </div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            use: false
        }
    });
</script>
```

- 表达式

```html
<div id="app">
    {{5+5}}<br> {{ ok ? 'YES' : 'NO' }}<br> {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">hello</div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            ok: true,
            message: 'RUNOOB',
            id: 1
        }
    })
</script>
```

- 指令

```html
<div id="app">
    <p v-if="seen">现在你看到我了</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            seen: true
        }
    })
</script>
```

- 参数

```html
<div id="app">
    <pre><a v-bind:href="url">百度</a></pre>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            url: 'http://www.baidu.com'
        }
    })
</script>
```

- 缩写

```html
<!--1.v-bind-->
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>

<!--2.v-on-->
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

## v-for

```html
<div id="app">
    <ul>
        <li v-for="ele of tasks">{{ele}}</li>
    </ul>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            tasks: ["吃饭", "睡觉", "打游戏"]
        }
    });
</script>
```

## 双向绑定

    v-model:value = "kwords"

## watch

```javascript
new Vue({
    el: '#app',
    data: {},
    watch: {
        keyWorld() {
            // methods中的方法调用
        }
    }
});
```

## 定义自定义指令

```javascript
Vue.directive("指令名", { //起名时不能带v-
    /*回调函数,当拥有v-focus的元素挂载到页面
    上之后,自动执行*/
    inserted(ele) { //ele指有v-focus的当前的dom元素
        ele.focus()
    },
    bind: function() {
        //当指令绑定到元素上的时候,会立即执行这个bind函数,只执行一次
    },
    updated: function() {
        //当VNode更新的时候,会执行updated,可能会触发多次
    }
})

/******************eg*******************/
Vue.directive('color', {
    bind(el) {
        el.style.color = 'red';
    }
});

v - color = "'blue'"

Vue.directive('color', {
    bind(el, binding) {
        // el.style.color = 'red';
        el.style.color = binding.value;
    }
});

//自定义私有属性
var vm = new Vue({
    el: '#app',
    directives: {
        'fontweight': {
            bind: function(el, binding) {}
        }
    }
})
```

## 定义过滤器

```html
<script>
    Vue.filter("过滤名", function(v) {
        //v:会自动接住变量传入的原始值
        return 新值;
    });
</script>

<!--eg-->
<div id="app">
    <h1>性别1:{{sex1 | sexConvert | sexIcon}}</h1>
</div>
<script>
    Vue.filter("sexConvert", function(value) {
        return value === 1 ? "男" : "女";
    });

    Vue.filter("sexIcon", function(value) {
        return value === "男" ? value + "♂" : value + "♀";
    });

    new Vue({
        el: '#app',
        data: {
            sex1: 0
        }
    });
</script>

<!-------------------------------------->

<h1>性别1:{{sex1 | sexConvert("en") | sexIcon}}</h1>

<script>
    /*带参构造器*/
    Vue.filter("sexConvert", function(value, lang) {
        if (lang === "en") {
            return value === 1 ? "female" : "male";
        } else {
            return value === 1 ? "男" : "女";
        }
    });
    Vue.filter("sexIcon", function(value) {
        return value === "男" || value === "female" ? value + "♂" : value + "♀";
    });
</script>
<script>
    扩展: es6新语法 "1".toString().padStart(2, '0')
</script>
```

## axios

## vue-resource

```html
<div id="app">
    <button @click="getInfo">get请求</button>
    <button @click="postInfo">post请求</button>
    <button @click="jsonpInfo">jsonp请求</button>
</div>
<script>
    new Vue({
        el: '#app',
        data: {},
        methods: {
            getInfo() {
                this.$http.get("http://www.baidu.com").then(function(res) {
                    console.log(res)
                });
            },
            postInfo() {
                /**
                 * 发起post请求 application/x-www-form-urlencoded
                 * 手动发起的 post 请求,默认没有表单格式,所以,有的服务器处理不了
                 * 通过 post 方法的第三个参数,{ emulateJSON:true } 设置 提交的内容为
                 * 普通的表单数据格式
                 */
                this.$http.post("http://www.baidu.com", {}, {
                    emulateJSON: true
                }).then(function(res) {
                    console.log(res)
                });
            },
            jsonpInfo() {
                /*发起jsonp请求*/
                this.$http.jsonp("http://www.baidu.com").then(res => {
                    console.log(res)
                })
            }
        }
    });
</script>
```

## Vue组件

```html
<div id="app">
    <my-container></my-container>
    <my-container></my-container>
    <my-container></my-container>
</div>
<div id="tplContainer">
    <div>
        <button @click="substract">-</button>
        <span>{{n}}</span>
        <button @click="add">+</button>
    </div>
</div>
<script>
    Vue.component("my-container", {
        template: "#tplContainer",
        data: function() {
            return {
                n: 1
            };
        },
        methods: {
            add() {
                this.n++;
            },
            substract() {
                this.n--;
            }
        }
    });

    new Vue({
        el: '#app',
        data: {}
    });
</script>
```

## 自定义修饰符

```javascript
@keyup.enter = "方法名"
@keyup.tab = "方法名"
@keyup.delete = "方法名"
@keyup.esc = "方法名"
@keyup.space = "方法名"
@keyup.up = "方法名"
@keyup.down = "方法名"
@keyup.left = "方法名"
@keyup.right = "方法名"

//自定义全局按钮修饰符
Vue.config.keycodes.f2 = 113
```

## Vue动画

```html
<style>
    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateX(150px);
    }

    .v-enter-active,
    .v-leave-avtive {
        transition: all 0.8s ease;
    }

    .my-enter,
    .my-leave-to {
        opacity: 0;
        transform: translateY(150px);
    }

    .my-enter-active,
    .my-leave-avtive {
        opacity: 1;
        transition: all 0.8s ease;
    }
</style>
<div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <!-- 1.使用 transition 元素,把需要动画的元素包裹起来-->
    <!-- transition元素是Vue官方提供的-->
    <transition>
        <h3 v-if="flag">这是一个H3</h3>
    </transition>

    <input type="button" value="toggle" @click="flag2=!flag2">
    <!-- 1.使用 transition 元素,把需要动画的元素包裹起来-->
    <!-- transition元素是Vue官方提供的-->
    <transition name="my">
        <h3 v-if="flag2">这是一个H3</h3>
    </transition>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            flag: false,
            flag2: false
        }
    });
</script>

//使用animate设置动画
<div id="app">

    <input type="button" value='toggle' @click='flag=!flag'>
    <!--<transition enter-active-class="animated bounceIn" leave-avtive-class="animated bounceOut">
        <h3 v-if="flag">这是一个h3</h3>
    </transition>-->

    <!--<transition enter-active-class="bounceIn" leave-avtive-class="bounceOut" :duration="400">
        <h3 v-if="flag" class='animated'>这是一个h3</h3>
    </transition>-->

    <transition enter-active-class="bounceIn" leave-avtive-class="bounceOut" :duration="{enter:200,leave:200}">
        <h3 v-if="flag" class='animated'>这是一个h3</h3>
    </transition>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            flag: false
        }
    });
</script>

//动画三
<style>
    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
    }
</style>
<div id="app">
    <input type="button" value='快到碗里来' @click='flag=!flag'>
    <transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
        <div v-if='flag' class="ball"></div>
    </transition>
</div>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            flag: false
        },
        methods: {
            beforeEnter(el) {
                el.style.transform = 'translate(0,0)';
            },
            enter(el, done) {
                el.offsetTop;
                el.style.transform = 'translate(150px,150px)';
                el.style.transition = 'all 1s ease';

                // 这里的done,其实就是afterEnter这个函数,也就是说:done 是afterEnter的引用
                done();
            },
            afterEnter() {
                this.flag = !this.flag;
            }
        }
    });
</script>

//列表动画
<style>
    li {
        border: 1px dashed #000;
        padding: 10px 20px;
        width: 100%;
        margin: 10px auto;
    }

    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateY(80px);
    }

    .v-enter-active,
    .v-leave-avtive {
        transition: all .6s ease;
    }

    li:hover {
        background-color: lightblue;
        transition: all .6s ease;
    }

    .v-move {
        transition: all .6s ease;
    }

    .v-leave-active {
        position: absolute;
    }
</style>
<div id="app">
    Id:<input type="text" v-model='id'> Name:
    <input type="text" v-model='name'>
    <input type="button" @click='add' value="add">
    <!-- <ul> -->
    <!-- 1.在实现列表过渡的时候,如果需要过渡的元素是通过 v-for 循环渲染出来的,不能使用 transition 包裹,需要使用 transition-group  -->
    <!-- 2.如果要为 v-for 循环创建的元素设置动画,必须为每一个元素设置 :key 属性  -->
    <!-- 3.给transition-group 添加 appear 属性,实现入场时候的效果 -->
    <!-- 4.通过为 transition-group 元素添加 tag 属性,指定该元素渲染为指定元素,如果不指定 tag 属性,默认渲染为 span 标签 -->
    <transition-group appear tag='ul'>
        <li v-for='(item,i) in list' :key='item.id' @click='del(i)'>{{item.id}} ---- {{item.name}}</li>
    </transition-group>
    <!-- </ul> -->
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            id: '',
            name: '',
            list: [{
                    id: 1,
                    name: '赵高'
                },
                {
                    id: 2,
                    name: '秦桧'
                },
                {
                    id: 3,
                    name: '严嵩'
                },
                {
                    id: 4,
                    name: '魏忠贤'
                },
            ]
        },
        methods: {
            add() {
                this.list.push({
                    id: this.id,
                    name: this.name
                });
                this.id = ''
                this.name = ''
            },
            del(i) {
                this.list.splice(i, 1);
            }
        }
    });
</script>
```

## Vue组件

- vue创建组件方式1

```html
<div id="app">
    <my-com1></my-com1>
</div>
<script>
    var com1 = Vue.extend({
        template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    });

    Vue.component('myCom1', com1);

    new Vue({
        el: '#app',
        data: {},
        method: {}
    });
</script>
```

- vue 创建组件方式2

```html
<div id="app">
    <mycom2></mycom2>
</div>
<script>
    //注意:不论是那种方式创建出来的组件,组件的 template 属性指向模板内容,必须有且只能有唯一的一个根元素
    Vue.component('mycom2', {
        template: '<h3>这是直接使用 Vue.componet 创建出来的组件</h3>'
    });

    new Vue({
        el: '#app',
        data: {},
        method: {}
    });
</script>
```

- vue 创建组件方式3

```html
<div id="app">
    <mycom3></mycom3>
</div>

<template id="tmpl">
        <div>
            <h3>这是直接使用 tmplate 元素创建出来的组件</h3>
            <h4>好用,还可以</h4>
        </div>
    </template>
<script>
    //注意:不论是那种方式创建出来的组件,组件的 template 属性指向模板内容,必须有且只能有唯一的一个根元素
    Vue.component('mycom3', {
        template: '#tmpl'
    });

    new Vue({
        el: '#app',
        data: {},
        method: {}
    });
</script>
```

- 定义私有的组件

```javascript
new Vue({
    el: '#app',
    data: {},
    method: {},
    components: {
        login: {
            template: '<h1>这是私有的 login 组件</h1>'
        }
    }
});
```
