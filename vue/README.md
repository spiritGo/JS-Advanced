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
```
## axios

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

