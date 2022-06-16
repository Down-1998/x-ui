<template>
    <div>
        <x-radio :options="state.options" ></x-radio>
        <!-- <x-radio :options="state.options" ></x-radio> -->
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
    options:[
        {
            label:'备选项',
            value:'1'
        },
        {
            label:'备选项',
            value:'2'
        },
        {
            label:'备选项',
            value:'3',
           
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>