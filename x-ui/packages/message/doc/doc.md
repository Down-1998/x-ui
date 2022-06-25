<script setup>
    import BaseVue from './base.vue'
    import InstanceVue from './instance.vue';
    import DiffVue from './diff.vue';
    import DiyVue from './diy.vue';
    import preview from '@/components/preview.vue'

</script>

## Message消息提示 

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基本用法

message 消息提示基本使用示例。

<base-vue />

<preview  compname='message' demoname='base'/>

你也可以通过获取组件实例的方式来调用。

<instance-vue />

<preview  compname='message' demoname='instance'/>

### 不同状态

可根据 Message 参数的 type 来定义显示不同的状态。

<diff-vue />

<preview  compname='message' demoname='diff'/>

### 拓展自定义配置

可根据不同场景自定义 icon 图标及 timeout 消失时间。

<diy-vue />

<preview  compname='message' demoname='diy'/>