<template>
    <div>
        <x-input v-model="val" placeholder="请输入" type="password"></x-input>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref('');
</script>

<style lang="scss" scoped>

</style>