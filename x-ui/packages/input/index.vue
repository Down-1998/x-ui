<template>
    <div>
        <input type="text" :value="modelValue" @input="input">
    </div>
</template>

<script>
    export default{
        name:'xInput'
    }
</script>
<script setup>
const props = defineProps({
    modelValue:String | Number
})
const emit = defineEmits(['update:modelValue'])
const input = (e) =>{
    emit('update:modelValue',e.target.value)
    console.log(e.target.value);
}
</script>

<style lang="scss" scoped>

</style>