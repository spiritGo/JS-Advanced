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


