/**
 * @description 常用文件夹路径
 * @author 防火防盗房师兄
 */

const path = require('path')

const srcPath = path.join(__dirname, '../src')
const distPath = path.join(__dirname, '../dist')
const ssrPath = path.join(__dirname, '../dist/ssr')

module.exports = {
    srcPath,
    distPath,
    ssrPath
}
