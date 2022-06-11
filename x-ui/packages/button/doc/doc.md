<script setup>
   import BaseVue from './base.vue';
    import DisabledVue from './disabled.vue'
    import Size from './size.vue'
    import preview from '@/components/preview.vue'
</script>


## Button组件

常用的操作按钮。

### 基础用法

使用 `type、plain、round` 来定义按钮的样式。

<base-vue/>
<preview  compname='button' demoname='base'/>

### 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<disabled-vue/>
<preview  compname='button' demoname='disabled'/>

### 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 `large`和`small`两种值。

<Size />
<preview  compname='button' demoname='size'/>