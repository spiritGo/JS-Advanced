//这是 mian.js 我们项目的JS入口文件


// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式

import $ from 'Jquery'

$(function() {
    $('li:odd').css('background-color', 'lightblue');
    $('li:even').css('background-color', function() {
        return '#' + '904d4d'
    });
})