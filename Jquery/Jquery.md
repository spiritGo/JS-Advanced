# Jquery

> jquery 是第三方开发的专门执行dom操作的极简化的函数库

## 查找元素

```javascript
//jquery 支持所有css选择器
var $ele = $("selector");

/**
 * jquery扩展了一些选择器
 * 先把符合条件的元素查询出来放在一个统一的集合中
 * 按元素在集合中的位移编号查找元素,下标从0开始
 */
$("ul>li:first")
$("ul>li:eq(n)")
$("ul>li:last")
```

## 设置css样式

```javascript
//给元素设置单个css样式
语法:
    $("selector").css('property', 'value');

eg:
    $("ul>li+li").css('border-left', '0');

//给元素添加多个css样式
语法:
    $("selector").css({
        property1: 'value1',
        property2: 'value2'
    });

eg:
    $("ul").css({
        listStyle: 'none',
        display: 'flex'
    });
```
## 修改 & 设置内容

```javascript
//获取或设置元素开始标签到结束标签之间的原始HTML片段
获取:
    $ele.html();
修改:
    $ele.html("新的HTML片段");

//获取或设置元素开始标签到结束标签之间的纯文本内容
获取:
    $ele.text()
修改:
    $ele.text("新的内容")

//获取或设置表单的值:
获取:
    $ele.val();
修改:
    $ele.val("新的值")
```
## 修改 & 设置属性

```javascript
//获取或修改元素的属性 - html标准元素和自定义属性
获取:
    $ele.attr("属性名");
修改:
    $ele.attr("属性名", "属性值");

//获取或修改元素的属性 - dom对象属性
获取:
    $ele.prop("属性名");
修改:
    $ele.prop("属性名", "属性值");
```

## 修改样式 & 获取样式

```javascript
//修改样式
$ele.css("csss属性", "值");

//获取样式
$ele.css("css属性");

//简写,不用拼单位
$ele.css({
    css属性: 值,
    css属性: 值
});
```

## class操作

```javascript
//添加class
$ele.addClass("class1")

//移除class
$ele.removeClass("class1");

//判断ele上是否包含class1
$ele.hasClass("class1");

//如果总是在有或者没有条件之间切换,则可以这样写
$ele.toggleClass("class1");
```

## 元素亲属查询

```javascript
//ele直接父节点
$ele.parent()

//ele的子元素,不写选择器,默认获取全部直接子元素
$ele.children(["selector"])

//ele下最后一个子元素
$ele.children(":last")

//ele下第一个子元素
$ele.children(":first")

//ele下的所有后代
$ele.find("selector");

//获得ele的前一个兄弟节点
$ele.prev()

//获得ele的后一个兄弟节点
$ele.next()

//获取ele之前的所有兄弟节点
$ele.prevAll()

//获取ele之后的所有兄弟节点
$ele.nextAll()

//获取ele的所有兄弟节点
$ele.siblings()
```

## 添加/删除/替换/克隆

```javascript
//向每个匹配的元素内部追加内容
$ele.append(child)

//把所有匹配的元素追加到另一个指定的元素元素集合中
$ele.appendTo(parent)

//把所有匹配的元素插入到另一个、指定的元素元素集合的前面
$ele.insertBefore(sibling)

//在每个匹配的元素之前插入内容
$ele.before(sibling)

//向每个匹配的元素内部前置内容。
$parent.prepend(child)

//把所有匹配的元素插入到另一个、指定的元素元素集合的后面
$ele.insertAfter(sibling)

//在每个匹配的元素之后插入内容
$ele.after(sibling)

//将所有匹配的元素替换成指定的HTML或DOM元素
$ele.replaceWith(content)

//用匹配的元素替换掉所有 selector匹配到的元素
$ele.replaceAll(selector)

//克隆匹配的DOM元素并且选中这些克隆的副本
$ele.clone()

//从DOM中删除所有匹配的元素
$ele.remove()

//删除匹配的元素集合中所有的子节点
$ele.empty()
```

## 事件绑定

```javascript
//在选择元素上绑定一个或多个事件的事件处理函数
$ele.on(events, [selector], [data], fn);

//在选择元素上移除一个或多个事件的事件处理函数
$ele.off(events, [selector], [fn])

//触发每一个匹配元素的click事件
$ele.click([data, [fn]]);

//当DOM载入就绪可以查询及操纵时绑定一个要执行的函数。
$(document).ready(function() {
    // 在这里写你的代码...
});

简写:
    $(function($) {
        // 你可以在这里继续使用$作为别名...
    });

//点鼠标悬浮在元素上触发事件
$("#d1").mouseover(function(e) {
    /* Act on the event */
});

$("#d1").mouseenter(function(e) {
    /* Act on the event */
});

//没有单击按钮也能执行按钮执行的代码,自动调用按钮的功能
$("button").trigger('click')
```

## 动画

```javascript
//show & hide,没有参数时,默认是display的效果
$ele.show([time]);
$ele.hide([time]);
$ele.toggle([time]);

//上滑下滑
$ele.slideUp([time]);
$ele.slideDown([time]);
$ele.slideToggle([time]);

//淡入淡出
$ele.fadeIn([time]);
$ele.fadeOut([time]);
$ele.fadeToggle([time]);
```


