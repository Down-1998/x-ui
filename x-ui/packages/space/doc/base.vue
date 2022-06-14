<template>
    <div>
        <x-space >
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
            <x-button type="primary">Space</x-button>
        </x-space>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const size = reactive([40,10])//纵向  横向
</script>

<style lang="scss" scoped>

</style>