<template>
    <div :class="xTextraeaClass">
        <textarea 
            name="" 
            id="" 
            :cols="cols"
            :rows="rows" 
            :value="modelValue"
            :disabled="disabled"
            :readonly="readonly"
            @input="input"
            @focus="focus"
            @blur="blur"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :style="xStyle"
        ></textarea>
        <div class="max-len-inlien">{{n}}/{{maxlength}}</div>
    </div>
</template>

<script>
    export default {
        name:'xTextarea'
    }
</script>
<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue','focus','blur'])
const props = defineProps({
    modelValue:String,
    rows:{
        type:Number,
        default:50
    },
    cols:{
        type:Number,
        default:50
    },
    resize:{
        type:Boolean,
        default:true
    },
    disabled:Boolean,
    readonly:Boolean,
    placeholder:String,
    maxlength:{
        type:Number,
        default:100
    }
})
const n = ref(0)
const xTextraeaClass = computed(() => {
    return [
        't-textarea',
        {'t-textarea-disabled':props.disabled},
        {'t-textarea-readonly':props.readonly}
    ]
})
const xStyle = computed(() =>{
    return{
        resize:props.resize ? 'auto' :'none'
    }
})

const input = (e) =>{
    n.value = e.target.value.length;
    if(n.value > props.maxlength){
        n.value = props.maxlength
    }
    emit('update:modelValue',e.target.value)
}
const focus = (e) => {
    emit('focus',e)
}
const blur = (e) =>{
    emit('blur',e)
}
</script>

<style lang="scss" scoped>
.t-textarea{
    width: auto;
    height: auto;
    display: inline-block;
    overflow: hidden;
    position: relative;
    textarea{
        padding: 8px 8px 10px 8px;
        outline: none;
        border-radius: 4px;
        font-size: 14px;
        color: $text-color;
        transition: all 0.15s ease;
        &:focus{
            border: 1px solid $primary;
        }
        &::placeholder{
            color: #c6c8cc;
        }
    }
}
.t-textarea-disabled{
    textarea{
        cursor: no-drop;
    }
}
.max-len-inlien{
    width: 100%;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #aeafb3;
    position: absolute;
    bottom: 10px;
}
</style>