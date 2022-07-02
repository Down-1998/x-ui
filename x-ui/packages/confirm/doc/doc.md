<script setup>
    import BaseVue from './base.vue';
    import InstanceVue from './instance.vue';
    import diyVue from './diy.vue'
    import preview from '@/components/preview.vue'
</script>

## Confirm消息确认 
常用于交互反馈确认场景

### 基础用法

Confirm 消息确认基本使用示例。

<base-vue />

<preview compname='confirm' demoname='base'/>

### 通过组件实例调用

你也可以通过获取组件实例的方式来调用。

<instance-vue />

<preview compname='confirm' demoname='instance'/>

### 拓展自定义配置

自定义配置整个消息确认框的元素

<diy-vue />

<preview compname='confirm' demoname='diy'/>