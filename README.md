# x-ui
基于vue3.2(setup语法糖)+vite创建的自己的ui组件库并实现按需导入

<div align="center">
  <img src="https://down-1998.github.io/x-ui-doc/assets/logo.30f90e1c.jpg" width="100"/>
  <h1 style="border-bottom:0">
    <p>x-ui组件库</p>
    <p style="font-size:20px">一套适合开发者使用的轻量级UI组件库，完美支持vue3(仅供学习使用)</p>
  </h1>
</div>
<br/>

官网主页: [x-ui使用文档](https://down-1998.github.io/x-ui-doc/#/)
***
### 快速使用
```
npm install  xinlun-ui --save
cnpm install  xinlun-ui --save
yarn add xinlun-ui
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import XUI from 'xinlun-ui'
import '../node_modules/xinlun-ui/dist/style.css'

const app = createApp(App)
app.use(XUI)
app.mount('#app')
```
### 按需引用
```
import { xButton, xInput } from 'xinlun-ui'
```

### 快速开始

```
<x-button>默认按钮</x-buttonn> 
<x-button type="primary">主要按钮</x-button>
```
