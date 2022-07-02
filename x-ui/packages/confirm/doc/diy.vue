<template>
  <x-button @click="openConfirm">自定义配置</x-button>
</template>

<!-- js -->
<script setup>
import Confirm from "../index.js";
import Message from "../../message/index.js";
// 以上为本地示例，请使用import { xConfirm, xMessage } from "mzl-ui";引入
const openConfirm = () => {
  Confirm({
    title: "提示信息",
    text: "确认2022-07-02是您的生日吗？",
    icon: "icon-calendar-v2",
    confirmText: "是的",
    cancelText: "不是",
    closeShow: false,
  })
    .then(() => {
      Message({ text: "是的" });
    })
    .catch(() => {
      Message({ text: "不是" });
    });
};
</script>