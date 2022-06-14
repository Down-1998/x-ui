<template>
    <div>
        <x-space :size="size" >
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
            <x-button>Space</x-button>
        </x-space>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const size = reactive([40,20])//纵向  横向
</script>

<style lang="scss" scoped>

</style>