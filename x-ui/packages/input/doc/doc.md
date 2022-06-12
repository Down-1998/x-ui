<script setup>
    import BaseVue from './base.vue'
    import DisableVue from './disable.vue';
    import clearVue from './clear.vue';
    import passwordVue from './password.vue'
    import preview from '@/components/preview.vue'

</script>

## Input输入框 

通过鼠标或键盘输入字符
    Input 为受控组件，它总会显示 Vue 绑定值。

    通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

    不支持 v-model 修饰符。

### 基本用法
<base-vue />

<preview  compname='input' demoname='base'/>

### 禁用状态
<disable-vue />

<preview  compname='input' demoname='disable'/>

### 可清空状态
<clear-vue />

<preview  compname='input' demoname='clear'/>

### 密码框
<password-vue />

<preview  compname='input' demoname='password'/>