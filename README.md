# react 脚手架

### 说明
```
一个简洁，可用的react脚手架，实用脚手架，优秀react脚手架，
基于Webpack自定义React脚手架， 项目结构模块化分布
webpack 自定义配置 js/css抽离与压缩 多进程打包
router 路由懒加载

react +webpack +router

```

## 项目安装依赖
```
npm install

```

### 启动项目
```
npm run dev

```

### 线上打包
```
npm run build
```

### 目录结构

```

├── README.md
├── assets                 //静态图片
│   └── README.md
├── components             //公用模版
│   └── README.md
├── index.html             //入口Html
├── index.js               //入口文件
├── pages                  //页面文件夹
│   ├── Index              // 首页页面
│   │   ├── assets         //页面静态图片
│   │   │   └── README.md
│   │   ├── components     //页面模版
│   │   │   └── README.md
│   │   ├── index.js        //页面入口文件
│   │   └── index.less      //页面less
│   ├── Login               //登录页面
│   │   ├── index.js
│   │   └── index.less
│   └── README.md
├── router                  //路由
│   ├── README.md
│   └── index.js
└── utils                   //公用函数
    └── README.md

```
