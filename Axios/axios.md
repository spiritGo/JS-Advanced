# Axios

> 本文参考 axios 官方文档 ,顺序有变动(我是搬运工小酷)

## 什么是 axios ?

- axios 是一个基于 Promise 的 HTTP 库,可以用在浏览器和 nodejs 中

## 特性

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 nodejs 中创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |     |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 8+ ✔                                                                                                                         |     |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## 安装

- 使用 npm

```javascript
npm install axios
```

- 使用 bower

```javascript
bower install axios
```

- 使用 cdn

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"> </script>
```

## 配置默认值

> 你可以指定将被用在各个请求的配置默认值

- **全局的 axios 默认值**

```javascript
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
```

- **自定义实例默认值**

```javascript
// Set config defaults when creating the instance
const instance = axios.create({
  baseUrl: "https://api.example.com"
});
// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
```

## 配置的优先顺序

> 配置会以一个优先顺序进行合并。这个顺序是：在 lib/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者。这里是一个例子：

```javascript
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get("/longRequest", {
  timeout: 5000
});
```

## 拦截器

> 在请求被 then 或 catch 处理前拦截它们

```javascript
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做点什么
    return config;
  },
  function(err) {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(err) {
    // 对响应错误做点什么
    return Promise.reject(err);
  }
);
```

如果你想在稍后移除拦截器，可以这样：

```javascript
const myInterceptor = axios.interceptors.request.use(function() {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

可以为自定义 axios 实例添加拦截器

```javascript
const instance = axios.create();
instance.interceptors.request.use(function() {
  /* ... */
});
```


