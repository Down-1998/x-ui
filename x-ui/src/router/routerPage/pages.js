export default [
    {
        path:'/',
        name:'home',
        component:() =>import('@/views/home.vue'),
        children:[
            {
                path:'button',
                name:'button按钮',
                title:'Button',
                component:() => import('../../../packages/button/doc/doc.md')
            },
            {
                path:'input',
                name:'input输入框',
                title:'Input',
                component:() => import('../../../packages/input/doc/doc.md')
            }
        ]
    }
]