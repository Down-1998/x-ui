<template>
    <div>
        <x-select :options="state.options" ></x-select>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    options:[
        {
            label:'中国',
            value:'cn'
        },
        {
            label:'美国',
            value:'mg',
            disabled:true
        },
        {
            label:'英国',
            value:'yg',
            disabled:true
        },
        {
            label:'俄罗斯',
            value:'els',
             disabled:true
        },
        {
            label:'韩国',
            value:'hg'
        }
    ]
})
</script>

<style lang="scss" scoped>
.test{
    width: 10px;
    height: 10px;
    color: red;
}
</style>