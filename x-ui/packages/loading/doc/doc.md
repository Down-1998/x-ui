<script setup>
    import BaseVue from './base.vue';
    import InstanceVue from './instance.vue';
    import diyImgVue from './diyImg.vue'
    import preview from '@/components/preview.vue'
</script>

## Loading 加载中
用于页面和区块的加载中状态

### 基础用法

loading 组件基本使用示例。

<base-vue />

<preview compname='loading' demoname='base'/>

也可以通过获取组件实例的方式来调用。

<instance-vue />

<preview compname='loading' demoname='instance'/>

### 自定义加载图片

可通过设置 img 来自定义加载图片，自定义后 icon 将失效。

<diy-img-vue />

<preview compname='loading' demoname='diyImg'/>