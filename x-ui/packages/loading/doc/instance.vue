<!-- html -->
<template>
  <x-button @click="openLoading">开始加载</x-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
import Loading from "../index.js"; //此处为本地示例，请使用import { xLoading } from "xinlun-ui";
const instance = getCurrentInstance();
const openLoading = () => {
  instance.proxy.$Loading.show({
    img:''
  });
  setTimeout(() => {
    instance.proxy.$Loading.hide();
  }, 1000);
};
</script>