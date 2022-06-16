<script setup>
import BaseVue from './base.vue';
import SizeVue from './size.vue'
import DiffVue from './diff.vue';
import DisabledVue from './disable.vue';
import DisableVue from './disabled.vue'
import preview from '@/components/preview.vue'
</script>  

## Select选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基本用法

适用广泛的基础单选

<base-vue />

<preview compname='select' demoname='base'/>

### 有禁用选项

<disabled-vue />

<preview compname='select' demoname='disable'/>

### 禁用状态

<disable-vue />

<preview compname='select' demoname='disabled'/>

### 尺寸大小

<size-vue />

<preview compname='select' demoname='size'/>

### 自定义模板

可以自定义备选项
`filedLabel:key属性`  `filedValue:value属性`

<diff-vue />

<preview compname='select' demoname='diff'/>