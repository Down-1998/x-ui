<template>
    <div>
        <x-space :size="size" :inline="false">
            <x-button type="success">Space</x-button>
            <x-button type="success">Space</x-button>
            <x-button type="success">Space</x-button>
            <x-button type="success">Space</x-button>
        </x-space>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const size = reactive([10,10])//纵向  横向
</script>

<style lang="scss" scoped>

</style>