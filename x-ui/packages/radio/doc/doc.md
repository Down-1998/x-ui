<script setup>
import BaseVue from './base.vue';
import DiffVue from './diff.vue';
import DisabledVue from './disabled.vue';
import InlineVue from './inline.vue';
import ColorVue from './color.vue';
import preview from '@/components/preview.vue'
</script>

## Radio单选框

### 基本用法

**在一组备选项中进行单选**

<base-vue />

<preview  compname='radio' demoname='base'/>

### 禁用选项状态

`禁用选项状态disabled`

<disabled-vue />

<preview  compname='radio' demoname='disabled'/>

### 排列方式

`排列方式为横向和纵向,inline字段进行控制,true:display:inline-flex,false:flex`
**默认为true**

<inline-vue />

<preview  compname='radio' demoname='inline'/>

### 自定义颜色

`自定义颜色customColor字段控制,传入颜色的16进制代码`

<color-vue />

<preview  compname='radio' demoname='color'/>

### 自定义模板

可以自定义备选项
`filedLabel:key属性`  `filedValue:value属性`

<diff-vue />

<preview  compname='radio' demoname='diff'/>