import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// import XUI from 'xinlun-ui'
import hljs from 'highlight.js';
import 'highlight.js/styles/color-brewer.css';
import '../node_modules/xinlun-ui/dist/style.css'
import XUI from '../packages/index'

const app = createApp(App)
app.use(XUI).use(router).mount('#app')
app.directive('highlight',(el) =>{
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
})
