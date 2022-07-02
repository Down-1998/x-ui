<!-- html -->
<template>
  <x-button @click="openLoading">开始加载</x-button>
</template>

<!-- js -->
<script setup>
import Loading from "../index.js"; //此处为本地示例，请使用import { xLoading } from "xinlun-ui";
const openLoading = () => {
  Loading.show({
    img:''
  });
  setTimeout(() => {
    Loading.hide();
  }, 1000);
};
</script>