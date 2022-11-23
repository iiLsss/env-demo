# 项目工程环境变量

前端项目基于webpack、vite、rollup等构建工具实现工程化，工程化配置中存在`development`和`production`环境配置。但是此环境配置针对构建工具使用本地开发或打包构建等功能。

我们常在项目中不仅仅`development`和`production`两种环境。还存在测试环境和预发布环境。每个环境都有不同的请求接口、第三方SDK配置项、CDN前缀、项目跳转链接等信息。

这个时候我们就需要环境变量去统一维护以上信息。而不是项目中根据当前访问域名或其他相关信息来区分环境。

## 实现方案

- 项目根目录增加环境配置文件

```
├──src
├── .env
├── .env.dev
├── .env.test
├── .env.prod 
├── package.json
//...
```

## 基于VUE—CLI的项目

[vue-cli-mode-and-env](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)



- 针对不同环境配置文件增加相应配置项

**.env.dev**
```shell
NODE_ENV = 'development'
# 环境变量
VUE_APP_ENV = 'dev'
# API-URL
VUE_APP_API_URL = 'https://dev-api.domain.com'
```

**.env.test**
```shell
NODE_ENV = 'production'
# 环境变量
VUE_APP_ENV = 'test'
# API-URL
VUE_APP_API_URL = 'https://test-api.domain.com'
```

**.env.prod**
```shell
NODE_ENV = 'production'
# 环境变量
VUE_APP_ENV = 'prod'
# API-URL
VUE_APP_API_URL = 'https://api.domain.com'
```

- package.json 增加配置项命令

```js
"scripts": {
  // 使用.env.dev 文件启动项目  
  "dev": "vue-cli-service serve --mode dev",
  // 使用.env.dev 文件打包项目
  "build:prod": "vue-cli-service build --mode prod",
  // 使用.env.dev 文件打包项目
  "build:test": "vue-cli-service build --mode test",    
},
```

> vue-cli: 需要再环境配置文件中增加 NODE_ENV 

## 基于CRA的项目

