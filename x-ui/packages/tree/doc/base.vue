<template>
    <div>
        <x-tree :options="state.treeOptions"></x-tree>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const state  = reactive({
    treeOptions:[
        {
            label:'一级',
            children:[
                {
                    label:'1-1'
                },
                {
                    label:'1-2'
                },
                {
                    label:'1-3',
                    children:[
                        {
                            label:'1-3-1'
                        }
                    ]
                }
            ]
        },
         {
            label:'二级',
            children:[
                {
                    label:'2-1'
                },
                {
                    label:'2-2'
                },
                {
                    label:'2-3',
                    children:[
                        {
                            label:'2-3-1'
                        }
                    ]
                }
            ]
        },
        {
            label:'三级',
            children:[
                {
                    label:'3-1'
                },
                {
                    label:'3-2'
                },
                {
                    label:'3-3',
                    children:[
                        {
                            label:'3-3-1'
                        }
                    ]
                }
            ]
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>