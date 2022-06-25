<template>
    <div :class="xInput">
        <input 
            :type="type" 
            :value="modelValue" 
            @input="input" 
            :placeholder="placeholder" 
            :disabled="disabled"
        />
        <span class="clear-icon" :style="clearStyle" @click="clearInput"><i>X</i></span>
    </div>
</template>

<script>
    export default {
        name:'xInput'
    }
</script>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue:String | Number,
    placeholder:String,
    disabled:Boolean,
    clearable:Boolean,
    type:{
        type:String,
        default:'text'
    }
})

const emit = defineEmits(['update:modelValue'])

const xInput = computed(() => {
    return [
        'x-input',
        {'x-input-disabled':props.disabled}
    ]
})
const clearStyle = computed(() =>{
    return [{
        'display':props.clearable ? props.modelValue ? 'block':'none' :'none'
    }]
})

const input = (e) =>{
    console.log(props.modelValue);
    emit('update:modelValue', e.target.value)
}

const clearInput = () => {
   emit('update:modelValue','')
}
</script>

<style lang="scss" scoped>
.x-input{
    margin-left: 25px;
    margin-bottom: 20px;
    display: inline-block;
    min-width: 250px;
    position: relative;
    input{
        outline: none;
        border:1px solid $border-color;
        border-radius: 4px;
        line-height: 1;
        padding: 10px 8px;
        width: 100%;
        font-size: 14px;
        color: $text-color;
        transition: all 0.15s ease;
        &:focus{
            border-color: $primary;
        }
    }
    .clear-icon{
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 4px;
    }
}
.x-input-disabled{
    input{
        cursor: no-drop;
    }
}
</style>