export default [
    
    {
        path:'/',
        name:'home',
        component:() =>import('@/views/home.vue'),
        children:[
            {
                path:'/',
                name:'首页',
                title:'首页',
                component:() => import('../../../packages/index.vue')
            },
            {
                path:'introduce',
                name:'安装',
                title:'Introduce',
                component:() => import('../../../packages/introduce/doc.md')
            },
            {
                path:'color',
                name:'color颜色',
                title:'Color',
                component:() => import('../../../packages/color/doc.md')
            },
            {
                path:'icon',
                name:'icon图标',
                title:'Icon',
                component:() => import('../../../packages/icon/doc/doc.md')
            },
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
            },
            {
                path:'tree',
                name:'tree树型控件',
                title:'Tree',
                component:() => import('../../../packages/tree/doc/doc.md')
            },
            {
                path:'tabs',
                name:'tabs选项卡',
                title:'Tabs',
                component:() => import('../../../packages/tabs/doc/doc.md')
            },
            {
                path:'message',
                name:'message消息提示',
                title:'Message',
                component:() => import('../../../packages/message/doc/doc.md')
            },
            {
                path:'confirm',
                name:'confirm消息确认',
                title:'Confirm',
                component:() => import('../../../packages/confirm/doc/doc.md')
            },
            {
                path:'loading',
                name:'loading加载',
                title:'Loading',
                component:() => import('../../../packages/loading/doc/doc.md')
            }
        ]
    }
]