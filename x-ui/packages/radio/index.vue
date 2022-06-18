<template>
    <div class="x-radio">
        <div 
            class="x-item-radio" 
            v-for="(item,index) in options" 
            :key="index"  
            @click="handleClick(item,index)"
            :class="{'x-item-disabled-radio':item.disabled}"
        >
            <span :class="{active:activeIndex === index}"></span>
            {{ item[filedLabel] }}
        </div>
    </div>
</template>
<script>
export default{
    name:'xRadio'
}
</script>
<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['change'])
const props = defineProps({
    options:{
        type:Array,
        default:[]
    },
    inline:{
        type:Boolean,
        default:true
    },
    filedLabel:{
        type:String,
        default:'label'
    },
    filedValue:{
        type:String,
        default:'value'
    },
    customColor:{
        type:String,
        default:'#409EFF'
    }
})
const activeIndex = ref(-1)
const isInline = ref(props.inline)
const handleClick = (item,index) =>{
    if(!item.disabled){
        activeIndex.value = index
        emit('change',item)
    }
}
const inLineStyle  =computed(() =>{
    return isInline.value ? 'inline-flex'  : 'flex'
}) 
console.log(props.options);
</script>

<style lang="scss" scoped>
.x-radio{
    width:100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 10px;
    .x-item-radio{
        display: v-bind(inLineStyle);
        align-items: center;
        width: auto;
        height: auto;
        overflow: hidden;
        line-height: 20px;
        cursor: pointer;
        font-size: 14px;
        margin-right: 15px;
        user-select: none;
        span{
            width: 14px;
            height: 14px;
            display: inline-block;
            position: relative;
          
            border: 1px solid rgb(128,125,125);
            border-radius: 50%;
            margin: 3px 8px 0 0;
          
            background: #fff;
            transition: transform 0.15s ease-in;
            &:after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content:'';
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -2px 0 0 -2px;
                transition: transform 0.15s ease-in;

            }
        }
        span.active{
            border: 1px solid v-bind('props.customColor');
            background: v-bind('props.customColor');
        }
    }
    .x-item-disabled-radio{
        cursor: no-drop;
        color: #808080;
        span{
            border: 1px solid #b9b9b9;
            background: #ebebeb;
            &::after{
                background-color: #999;
            }
        }
    }
}
</style>