import { createRouter,createWebHashHistory } from 'vue-router';
import routerPages from './routerPage/pages.js'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[...routerPages]
})
export default router