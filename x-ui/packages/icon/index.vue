<template>
    <div class="x-icon">
       <svg class="icon" aria-hidden="true">
            <use :xlink:href="iconCode"></use>
        </svg>
    </div>
</template>
<script>
export default {
    name:'xIcon'
}
</script>
<script setup>
import { computed } from 'vue';
import '../iconfonts/js/iconfont.js';

const props = defineProps({
    code:String,
    size:{
        type:Number,
        default:2.5
    }
})
const iconCode = computed(() =>{
    return `#${props.code}`
})
const IconWidth = computed(() => {
    return props.size + 'rem';
})
</script>

<style lang="scss">
 .icon {
  display: inline-block;
  width: v-bind(IconWidth);
  height: v-bind(IconWidth);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.x-icon{
    display: inline-block;
    margin: 20px;
}
</style>