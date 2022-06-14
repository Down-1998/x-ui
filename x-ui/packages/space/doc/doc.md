<script setup>
    import BaseVue from './base.vue';
    import InlineVue from './inline.vue';
    import SizeVue from './size.vue';
    import preview from '@/components/preview.vue'
</script>

## Space间距

### 基础用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

通过间距组件来给多个组件之间提供间距

<base-vue />

<preview compname='space' demoname='base'/>

### 垂直布局

使用 `inline` 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

**inline为true的时候是flex-direction:row**,否则是**flex-direction:column**

我们也提供垂直布局方式。

<inline-vue />

<preview compname='space' demoname='inline'/>

### 控制间距的大小

通过调整 `size` 的值来控制间距的大小

通过 size 控制组件大小 size传入一个数据,素组的长度为2,**通过gap的css属性进行控制,size[0]代表纵向间距,size[1]代表横向间距** 

默认间距是[10,10]横向布局

<size-vue />

<preview compname='space' demoname='size'/>