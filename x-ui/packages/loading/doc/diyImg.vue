<!-- html -->
<template>
  <x-button @click="openLoading">自定义加载图片</x-button>
</template>

<!-- js -->
<script setup>
  import Loading from "../index.js"; //此处为本地示例，请使用import { xLoading } from "xinlun-ui";
  const openLoading = () => {
    Loading.show({
      text:"正在努力加载中...",
      img:"https://mzlui.codeym.com/logo.png"
    })
    setTimeout(()=>{
      Loading.hide()
    },1000)
  }
</script>