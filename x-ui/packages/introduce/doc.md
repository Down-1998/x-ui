<style scoped>
.container{
   margin-top: 20px; 
   text-align: left;
   margin-left: 25px;
}
.doc{
    font-size: 16px;
    background: #fff;
    color: #333;
    text-decoration: none;
}
.doc:hover{
     font-size: 16px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
}
.title{
    font-size: 25px;
    color: #000;
    font-weight: bold;
}
.use-text{
    color: #333;
    font-size: 16px;
}
.content{
    margin-top: 20px;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px #ccc;
}
</style>

<div align="left" class="container">
  <img src="https://down-1998.github.io/x-ui-doc/assets/logo.30f90e1c.jpg" width="100"/>
  <h1 style="border-bottom:0">
    <p style="font-size:35px">x-ui组件库</p>
    <p style="font-size:20px">一套适合开发者使用的轻量级UI组件库，完美支持vue3(仅供学习使用)</p>
    <p style="font-size:20px">基于vue3.2(setup语法糖)+vite创建的自己的ui组件库并实现按需导入</p>
    <a href="(https://down-1998.github.io/x-ui-doc/#/" class="doc">x-ui使用文档请戳这~</a>
  </h1>
  <div class="content">
        <p class="title">快速使用</p>
        <p class="use-text"><code>npm install  xinlun-ui --save</code></p>
        <p class="use-text"><code>cnpm install  xinlun-ui --save</code></p>
        <p class="use-text"><code>yarn add xinlun-ui</code></p>
    </div>
    <div class="content">
        <p class="title">引入</p>
        <p class="use-text"><code>import App from '@/App.vue'</code></p>
        <p class="use-text"> <code>import XUI from 'xinlun-ui'</code> </p>
        <p class="use-text"> <code>import { createApp } from 'vue'</code></p>
        <p class="use-text"><code>import '../node_modules/xinlun-ui/dist/style.css'</code></p>
        <p class="use-text"><code>const app = createApp(App)</code></p>
        <p class="use-text"><code>app.use(XUI)</code></p>
        <p class="use-text"><code>app.mount('#app')</code></p>
    </div>
    <div class="content">
        <p class="title">按需引用</p>
        <p class="use-text"><code>import { xButton, xInput } from 'xinlun-ui'</code></p>
    </div>
</div>
<br/>


