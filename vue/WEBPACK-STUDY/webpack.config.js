const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'), //入口
    output: {
        path: path.join(__dirname, './dist'), //指定打包好的文件,输出到哪个目录
        filename: 'bundle.js'
    },
    module: { // 这个节点用于配置所有第三方模块加载器
        rules: [ //所有第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    plugins:[
    	new htmlWebpackPlugin({
    		template:path.join(__dirname,'./src/index.html'),// 指定模板页
    		filename:'index.html' // 指定生成的页面的名称
    	})
    ]
}

// 当我们在控制台,直接输入webpack命令执行的时候,webpack做了以下几步:
// 1.首先,webpack发现,我们并没有通过命令的形式给他指定入口和出口
// 2.webpack就会去项目的根目录中查找一个叫做`webpack.config.js`的配置文件
// 3.当找到配置文件后,webpack会去解析执行这个配置文件,当解析执行完配置文件后,就得到了配置文件中导出的配置对象
// 4.当webpack拿到配置对象后,就拿到了配置对象中,指定的入口和出口,然后进行打包构建