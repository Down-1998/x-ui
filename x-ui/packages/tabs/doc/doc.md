<script setup>
    import BaseVue from './base.vue';
    import DiyStyleVue from './diyStyle.vue';
    import CloseVue from './close.vue'
    import preview from '@/components/preview.vue'
</script>

## Tabs切换
用于多个视图、数据切换展示操作

### 基础用法

<base-vue />

<preview compname='tabs' demoname='base'/>

### 选项卡样式

选项卡样式的标签页。type指定显示的样式，默认"line"

<diy-style-vue />

<preview compname='tabs' demoname='diyStyle'/>


### 动态增减标签页


<close-vue />

<preview compname='tabs' demoname='close'/>