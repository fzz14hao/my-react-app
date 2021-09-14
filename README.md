# react 脚手架

### 说明

```
一个简洁，可用的react脚手架，实用脚手架，优秀react脚手架，
基于Webpack自定义React脚手架， 项目结构模块化分布
webpack 自定义配置 ,js/css抽离与压缩, 多进程打包, ssr预渲染
,多页面入口，router 路由懒加载,支持ts

react +webpack +router + redux +ssr + typescript

注：(不同分支有不同功能，以便适应不同需求)

```

## 使用项目

```
git clone https://github.com/fzz14hao/my-react-app.git

```

## 安装依赖

```
npm install

```

## 启动项目

```
npm run dev

```

## 线上打包

```
npm run build
```

## 目录结构

```
    │── dist                     //打包输出文件
    │   ├── css
    │   │  
    │   ├── index.html
    │   └── js
    │
    │
    │  
    ├── src
    │   ├── README.md
    │   ├── assets                 //静态图片
    │   │   └── README.md
    │   ├── components             //公用模版
    │   │   └── README.md
    │   ├── index.html             //入口Html
    │   ├── index.js               //入口文件
    │   ├── pages                  //页面文件夹
    │   │   ├── Index              // 首页页面
    │   │   │   ├── assets         //页面静态图片
    │   │   │   │   └── README.md
    │   │   │   ├── components     //页面模版
    │   │   │   │   └── README.md
    │   │   │   ├── index.js        //页面入口文件
    │   │   │   └── index.less      //页面less
    │   │   ├── Login               //登录页面
    │   │   │   ├── index.js
    │   │   │   └── index.less
    │   │   └── README.md
    │   ├── router                  //路由
    │   │   ├── README.md
    │   │   └── index.js
    │   └── utils                   //公用函数
    │       └── README.md
    │
    ├── webpack                     //webpack配置
    │   ├── paths.js                //常用文件夹路径
    │   ├── webpack.common.js       //公共配置
    │   ├── webpack.dev.js          //开发环境配置
    │   └── webpack.prod.js         //生产环境配置
    │
    │
    └── package.json

```

### 分支功能说明

```
不同分支有不同功能，以便适应不同需求
```

##### master分支

```
纯react +webpack +router结构，没有多余文件
```

##### react-ts分支

```
react +ts
```

##### react-redux-app分支

```
react +webpack +router + redux 结构，引入redux 并数据持久化
```

##### react-multiple-page-app

```
react +webpack +router 多入口配置
```

##### react-ssr-app分支

```
react +webpack +router + ssr 结构，引入 prerender-spa-plugin预渲染
```

##### react-utils-app分支

```
react +webpack +router + antd-mobile  结构，带有一些简单的公用函数 如:请求方法,cookie操作,storage操作,时间格式化等方法
```
