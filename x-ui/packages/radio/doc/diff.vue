<template>
    <div>
        <x-radio :options="state.options" :inline="false" filedLabel="name" filedValue="id" @change="change" ></x-radio>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
    options:[
        {
            name:'中国',
            id:'CN'
        },
        {
            name:'美国',
            id:'AM'
        },
        {
            name:'日本',
            id:'JP',
            disabled:true
        }
    ]
})
const change = (e) =>{
    console.log(e);
}
</script>

<style lang="scss" scoped>

</style>