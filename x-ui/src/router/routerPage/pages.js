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
            },
            {
                path:'textarea',
                name:'textarea文本域',
                title:'Textarea',
                component:() => import('../../../packages/textarea/doc/doc.md')
            },
            {
                path:'space',
                name:'space间距',
                title:'Space',
                component:() => import('../../../packages/space/doc/doc.md')
            },
            {
                path:'select',
                name:'select下拉框',
                title:'Select',
                component:() => import('../../../packages/select/doc/doc.md')
            },
            {
                path:'radio',
                name:'radio单选框',
                title:'Radio',
                component:() => import('../../../packages/radio/doc/doc.md')
            }
        ]
    }
]