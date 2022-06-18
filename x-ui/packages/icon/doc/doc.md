<script setup>
import BaseVue from './base.vue';
import preview from '@/components/preview.vue';
</script>
<style lang="scss">
    .jumpToIcon{
        margin-left: 10px;
        text-decoration: none;
        font-size: 16px;
        color: #333;
        &:hover{
            background-color: #fff!important;
            opacity: 0.8;
        }
    }
</style>

## Icon图标

`提供了一套常用的图标集合。`

### 使用方法

code指定图标的代码

<a class="jumpToIcon" href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3472835" target="_blank">图标代码请用力戳这~ </a>

**可以使用size传入指定的宽高,通过vue3的属性v-bind进行绑定widt和height的值**

<base-vue />

<preview  compname='icon' demoname='base'/>