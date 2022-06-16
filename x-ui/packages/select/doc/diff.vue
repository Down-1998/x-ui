<template>
    <div>
        <x-select 
            :options="state.options" 
            filedLabel="name" 
            filedValue="id" 
            @change="change" 
            placeholder="请选择" 
            v-model="selectValue"
        ></x-select>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const selectValue = ref('')
const state = reactive({
    options:[
        {
            name:'中国1',
            id:'cn'
        },
        {
            name:'美国2',
            id:'mg',
            disabled:true
        },
        {
            name:'英国3',
            id:'yg'
        },
        {
            name:'俄罗斯4',
            id:'els'
        },
        {
            name:'韩国5',
            id:'hg'
        }
    ]
})

const change = (selected) =>{
    console.log(selected,22222);
     console.log(selectValue.value,2223333322);
    // handleClick()
    //  setTimeout(() => {
    //     console.log(selectValue.value,2223333322);
    //  },500)
}
const handleClick = () =>{
     console.log(selectValue.value,2223333322);
}
</script>

<style lang="scss" scoped>

</style>