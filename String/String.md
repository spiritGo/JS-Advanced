# String 常用 API

- **charAt()**

```javascript
//返回在指定位置的字符
var str = "Hello world!"
document.write(str.charAt(1)); // e

/*
语法: stringObject.charAt(index)
index: 必须,表示字符串某个位置的数字,即在字符串中的下标
注释：字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串
*/
```

- **charCodeAt()**

```javascript
//返回在指定的位置的字符的 Unicode 编码
var str = "Hello world!"
document.write(str.charCodeAt(1)); // 101

/*
语法: stringObject.charCodeAt(index)
index	必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
注释: 字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN
*/
```

- **concat()**

```javascript
//用于连接两个或多个字符串
var str1 = "Hello "
var str2 = "world!"
document.write(str1.concat(str2)); // Hello world!

/*
语法: stringObject.concat(stringX,stringX,...,stringX)
参数: stringX	必需。将被连接为一个字符串的一个或多个字符串对象。
提示: 请注意，使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
*/
```

- **indexOf()**

```javascript
//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
var str = "Hello world!"
document.write(str.indexOf("Hello")) // 0
document.write(str.indexOf("World")) // -1
document.write(str.indexOf("world")) // 6

/*
语法: stringObject.indexOf(searchvalue,fromindex)
参数: searchvalue	必需。规定需检索的字符串值。
fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
注释：如果要检索的字符串值没有出现，则该方法返回 -1。
*/
```

- **lastIndexOf()**

```javascript
//lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
var str = "Hello world!"
document.write(str.lastIndexOf("Hello")); // 0
document.write(str.lastIndexOf("World")); // -1 
document.write(str.lastIndexOf("world")); // 6

/*
语法: stringObject.lastIndexOf(searchvalue,fromindex)
参数: searchvalue	必需。规定需检索的字符串值。
fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
注释：如果要检索的字符串值没有出现，则该方法返回 -1
*/
```

- **match()**

```javascript
//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
var str = "Hello world!"
document.write(str.match("world")); // world
document.write(str.match("World")); // null
document.write(str.match("worlld")); // null 
document.write(str.match("world!")); // world!

var str = "1 plus 2 equal 3"
document.write(str.match(/\d+/g)); // 1,2,3
/*
语法: 
    stringObject.match(searchvalue)
    stringObject.match(regexp)
参数: searchvalue	必需。规定要检索的字符串值。
regexp	必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。
*/
```

- **replace()**

```javascript
//replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
var str = "Visit Microsoft!"
document.write(str.replace(/Microsoft/, "W3School")) // Visit W3School!

var str = "Welcome to Microsoft! "
str = str + "We are proud to announce that Microsoft has "
str = str + "one of the largest Web Developers sites in the world."

document.write(str.replace(/Microsoft/g, "W3School"))
/* 输出: Welcome to W3School! We are proud to announce that W3School
has one of the largest Web Developers sites in the world
*/
/*
语法: stringObject.replace(regexp/substr,replacement)
参数: regexp/substr	必需。规定子字符串或要替换的模式的 RegExp 对象
replacement	必需。一个字符串值。规定了替换文本或生成替换文本的函数。
 返回值: 一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的
*/
```

- **search()**

```javascript
//search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串
var str = "Visit W3School!"
document.write(str.search(/W3School/)); // 6

/*
语法: stringObject.search(regexp)
返回值: stringObject 中第一个与 regexp 相匹配的子串的起始位置。
注释：如果没有找到任何匹配的子串，则返回 -1。
*/
```

- **slice()**

```javascript
//slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
var str = "Hello happy world!"
document.write(str.slice(6)); // happy world!

/*
语法: stringObject.slice(start,end)
start	要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推
end	紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
返回值: 一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符
*/
```

- **split()**

```javascript
//split() 方法用于把一个字符串分割成字符串数组
var str = "How are you doing today?"

document.write(str.split(" ")); //How,are,you,doing,today?
document.write(str.split("")); //H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
document.write(str.split(" ", 3)); //How,are,you

"2:3:4:5".split(":") //将返回["2", "3", "4", "5"]
"|a|b|c".split("|") //将返回["", "a", "b", "c"]

/*
语法: stringObject.split(separator,howmany)
separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
howmany	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度
*/
```

- **sub()**

```javascript
//sub() 方法用于把字符串显示为下标。
var str = "Hello world!"
document.write(str.sub())

/*
语法: stringObject.sub()
*/
```

- **sup()**

```javascript
//sup() 方法用于把字符串显示为上标。
var str = "Hello world!"
document.write(str.sup())

/*
语法: stringObject.sup()
*/
```

- **substring()**

```javascript
//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
var str = "Hello world!"
document.write(str.substring(3)); // lo world!

/*
语法: stringObject.substring(start,stop)
start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
stop	
可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
如果省略该参数，那么返回的子串会一直到字符串的结尾。
重要事项：与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。
*/
```

- **substr()**

```javascript
//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
var str = "Hello world!"
document.write(str.substr(3)); // lo world!

/*
语法:stringObject.substr(start,length)
start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串
注释：substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用
*/
```

- **toLowerCase()**

```javascript
//toLowerCase() 方法用于把字符串转换为小写。
var str = "Hello World!"
document.write(str.toLowerCase()); // hello world!

/*
语法: stringObject.toLowerCase()
返回值: 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了小写字符。
*/
```

- **toUpperCase()**

```javascript
//toUpperCase() 方法用于把字符串转换为大写。
var str = "Hello World!"
document.write(str.toUpperCase()); // HELLO WORLD!

/*
语法: stringObject.toUpperCase()
返回值: 一个新的字符串，在其中 stringObject 的所有小写字符全部被转换为了大写字符。
*/
```

[本页数据来源w3c](http://www.w3school.com.cn/jsref/jsref_obj_string.asp)
