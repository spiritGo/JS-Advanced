// webpack.config.js
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[
    	new htmlWebpackPlugin({
    		template:path.join(__dirname,'./src/index.html'),
    		filename:'index.html'
    	})
    ],
    /*resolve:{
        alias:{ //修改 Vue 被导入时候的包的路径
            'vue$':'vue/dist/vue.js'
        }
    }*/
}