const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'index.js')
    },
    module: {
        rules: [
            // babel-loader
            {
                test: /\.(js|jsx)$/,
                loader: ['babel-loader?cacheDirectory'],// 开启缓存
                include: srcPath,
                // exclude: /node_modules/
            },
        ]
    },
    plugins: [
        //页面一
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            // chunks: ['index'],  // 只引用 index.js
            excludeChunks: ['other'] //排除一些js
        }),
        //页面二
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'other.html',
            // chunks: ['other']  // 只引用 other.js
            excludeChunks: ['index'] //排除一些js
        })
    ]
}
