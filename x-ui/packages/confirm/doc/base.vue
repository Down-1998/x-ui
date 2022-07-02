
<!-- html -->
<template>
  <x-button @click="openConfirm">确认消息</x-button>
</template>

<!-- js -->
<script setup>
import Confirm from "../index.js";
import Message from "../../message/index.js";
// 以上为本地示例，请使用import { xConfirm, xMessage } from "xinlun-ui";引入
const openConfirm = () => {
  Confirm({
    text: "您确认要删除这条数据吗？",
  })
    .then(() => {
      Message({ text: "点击了确定" });
    })
    .catch(() => {
      Message({ text: "点击了取消" });
    });
};
</script>