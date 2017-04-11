var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html文件
const WebpackBrowserPlugin = require('webpack-browser-plugin'); // 自动打开浏览器插件
var CleanWebpackPlugin = require('clean-webpack-plugin'); // 自动删除构建目录插件

module.exports = function(env) {
    return {
        entry: './src/entry.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: 'https://cdn.example.com/assets/',
            // tell webpack where to load the on-demand bundles.

            pathinfo: true,
            // show comments in bundles, just to beautify the output of this example.
            // should not be used for production.
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new WebpackBrowserPlugin(),
            // new CleanWebpackPlugin(['dist'], {
            //     root: '',
            //     verbose: true, // 打印删除的信息
            // }),
        ]
    }
}
