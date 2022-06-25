<template>
    <x-space>
        <x-button @click="openMsg">消息提示</x-button>
        <x-button @click="openVNodeMsg">消息提示(VNode)</x-button>
    </x-space>
</template>

<script setup>
import xMessage from '../index.js' 
import { h } from 'vue'
const openMsg = () => {
  xMessage({
    text: '默认消息提示'
  })
}
const openVNodeMsg = () => {
  xMessage({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>

<style lang="scss" scoped>

</style>