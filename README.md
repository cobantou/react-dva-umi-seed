# 安装
所用的node版本为v8.10.0,npm版本为5.6.0。
```$js
npm i
```

# 开发
```$xslt
npm start
```

# 发布
```$xslt
npm build
```

# 介绍
### 项目框架
```$xslt
react：视图；

dva-core@2：数据流，dva-core包含redux和redux-saga；

dva-no-router：无路由版本的dva，用来将dva-core和react联系起来；

umi：脚手架工具和路由;

antd@3：页面组件库；
```
### 目录结构
按照umi的约定，目录结构如下
```
.
├── dist/                          // 构建产物目录
├── mock/                          // 数据mock放这里
├── public/                        // ??
└── src/                           // 源码目录，可选，把里面的内容直接移到外面即可
    ├── assets/                    // 图片等
    ├── models/                    // 公共model
    ├── service/                   // 公共service
    ├── components/                // 公共components
    ├── layouts/
    │   └── index.js              // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── pageA/                 // 某个A页面
             ├── components/       // A页面的子组件
             ├── components/       // A页面的service
             ├── models.js         // A页面的model
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── _routes.json               // 路由配置，和文件路由二选一
├── test/                          // 测试用例放这里
├── .eslintrc.js                   // eslint 配置
├── .umirc.js                      // umi 配置
├── .umirc.mock.js                 // umi 数据mock配置
├── .webpackrc                     // webpack 配置
└── package.json
```

### 重要的约定
1. umi 约定 layouts/index.js 为整体布局文件。
2. umi 约定 pages/ 目录为页面目录，文件的层级关系即为路由关系？（支持嵌套？）。 目录下如果有 index.js，则作为路由解析。  
3. models，分为global model和page model，详见：https://github.com/umijs/umi/issues/171


