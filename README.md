# vue-manage

本脚手架基于vue-cli封装，将开发中后台管理中常用的组件，插件和默认配置自动化。

## 相关配置
### CSS
- [x] 引入了[normalize.css](https://github.com/necolas/normalize.css),统一不同浏览器之间的差异，初始化css文件。
- [x] 该框架默认采用[SCSS语法](https://www.sass.hk/docs/)。
- [x] 引入[style-resources-loader](https://github.com/yenshih/style-resources-loader)来配置全局scss公共变量。避免每个文件手动引入

### 图标
- [x] svg图标组件作为全局组件。
- [x] 引入[svg-sprite-loader]()来处理svg图标，自动生成svg雪碧图。
- [x] 引入[svgo-loader]()来处理svg的冗余字段和格式化。配置文件查看`svgo-config.yml`
- [ ] 多色svg

### 组件库
- [x] 引入`element-ui`
- [x] 采用按需引入组件，以达到减小项目体积
- [x] 配置全局参数。size默认为mini。zIndex默认为9999

### babel
- [x] 引入`babel-polyfill`兼容IE
- [x] 引入`es6-promise`兼容ES6语法的promise

### 路由
- [x] 引入vue-router

### 状态管理
- [x] 引入vuex

### http
- [x] 引入axios
- [x] http拦截器：错误提示，及handleError格式化
- [x] 同一个请求，请求结果未返回时，再次发起请求，清除旧的请求。

## 使用
### 安装依赖
```
npm install
```

### 开发环境
```
npm run serve
```

### 生产
```
npm run build
```

### lints
```
npm run lint
```

### 自定义配置
查看 [vue-cli配置文档](https://cli.vuejs.org/config/).
