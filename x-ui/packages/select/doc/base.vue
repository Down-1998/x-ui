<template>
    <div>
        <x-select :options="state.options"></x-select>
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
        },
        {
            label:'英国',
            value:'yg'
        },
        {
            label:'俄罗斯',
            value:'els'
        },
        {
            label:'韩国',
            value:'hg'
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>