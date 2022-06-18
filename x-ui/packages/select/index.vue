<template>
    <div :class="xSelect" v-clickOutSide>
        <input type="text" readonly v-model="selectValue" :disabled="disabled" :placeholder="placeholder" :size="size">
        <transition name="fade">
            <div class="t-position-box" v-if="positionShow">
                <li 
                    v-for="(item,index) in options" 
                    :key="index" 
                    @click="change(item,index)"
                    :class="{'item-disabled-li':item.disabled,'item-active-li':activeIndex === index}"
                    class="item-li"
                    >
                    {{ item[filedLabel] }}
                </li>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'xSelect'
    }
</script>

<script setup>
import { ref, watch,computed } from 'vue';

const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
    options:{
        type:Array,
        default:[]
    },
    disabled:Boolean,
    filedLabel:{
        type:String,
        default:'label'
    },
    filedValue:{
        type:String,
        default:'value'
    },
    placeholder:{
        type:String,
        default:'请选择'
    },
    modelValue:String,
    size:{
        type:String,
        default:'medium'
    }
})
const selectValue = ref(props.modelValue)
const positionShow = ref(false);
const activeIndex = ref(-1)
//自定义指令小写v开头
const vClickOutSide = {
    beforeMount(el){
        // console.log(el);
        let handler = (e) =>{
            if(props.disabled){
                positionShow.value = false
            }else{
                if(el.contains(e.target) && e.target.className.indexOf('item-li') === -1){
                    positionShow.value = true
                }else{
                    if(!e.target.className.indexOf('item-disabled-li') === -1){
                        positionShow.value = false
                    }else{
                         positionShow.value = false
                    }
                }
            }
        }
        document.addEventListener('click',handler)
    }
}
const xSelect = computed(()=>{
    return [
        'x-select',
        `x-select-${props.size}`,
        
    ]
})
watch(() => props.modelValue, () => {selectValue.value = props.modelValue})

const change = (selected,index) =>{
    if(!selected.disabled){
        selectValue.value = selected[props.filedLabel];
        positionShow.value = false
        activeIndex.value = index
        emit('change',selected)
        emit('update:modelValue',selectValue.value)
    }
}

</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.x-select{
    min-width: 250px;
    display: inline-block;
    height: 40px;
    position: relative;
    padding: 10px;
    input{
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: 8px 10px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        &::placeholder{
             color: #c6c8cc;
        }
    }
    .t-position-box{
        border-radius: 4px;
        background:#fff;
        z-index: 100;
        width: 100%;
        height: auto;
        overflow: hidden;
        position: absolute;
        top: 47px;
        border: 1px solid $border-color;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        transition: all 0.5s ease;
        li{
            list-style: none;
            line-height: 40px;
            padding: 0 10px;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 14px;
            &:hover{
                background: #f0f0f0;
            }
        }
        li.item-disabled-li{
            background: #f0f0f0;
            cursor: no-drop;
            color: #808080;
           
        }
        li.item-active-li{
            color:$primary;
        }
    }
}
.x-select-small{
     min-width: 180px;
}
.x-select-lager{
     min-width: 350px;
}
</style>