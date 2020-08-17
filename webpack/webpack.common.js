const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
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
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}
