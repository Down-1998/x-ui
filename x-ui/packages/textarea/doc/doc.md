<script setup>
    import BaseVue from './base.vue';
    import DisabledVue from './disabled.vue';
    import ReadonlyVue from './readonly.vue';
    import MaxlengthVue from './maxlength.vue';
    import ResizeVue from "./resize.vue";
    import preview from '@/components/preview.vue'
</script>
## Textarea文本域

用于输入多行文本信息，通过将 **type** 属性的值指定为 textarea。

 ### 基本用法

<base-vue />
<preview compname='textarea' demoname='base'/>

### 禁用状态

<disabled-vue />
<preview compname='textarea' demoname='disabled'/>

### 只读状态

<readonly-vue />
<preview compname='textarea' demoname='readonly'/>

### 输入长度限制

<maxlength-vue />
<preview compname='textarea' demoname='maxlength'/>

### 伸缩状态

<resize-vue />
<preview compname='textarea' demoname='resize'/>