<!-- html -->
<template>
  <x-space>
    <x-button @click="openMsg1">消息提示</x-button>
    <x-button @click="openMsg2">5秒后消失</x-button>
  </x-space>
</template>

<!-- js -->
<script setup>
import Message from "../index.js"; //此处为本地示例，请使用import {xMessage} from "xinlun-ui";引入
const openMsg1 = () => {
  Message({
    text: "自定义Icon！",
    icon: "icon-icon-test",
  });
};
const openMsg2 = () => {
  Message({
    text: "5秒后消失！",
    icon: "icon-check-item",
    timeout: 5000,
  });
};
</script>