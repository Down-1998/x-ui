<template>
  <x-button @click="openMsg">消息提示</x-button>
</template>

<!-- js -->
<script setup>
import Message from "../index.js"; //此处为本地示例，请使用import {xMessage} from "xinlun-ui";引入
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const openMsg = () => {
  instance.proxy.$message({ text: "默认消息提示！" });
};
</script>