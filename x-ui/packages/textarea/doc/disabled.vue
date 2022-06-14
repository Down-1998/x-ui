<template>
    <div>
        <x-textarea v-model="val" rows="5" cols="50" disabled></x-textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref('')
const focus = (e) =>{
    console.log(e);
}
const blur = (e) => {
    console.log(e);
}
</script>

<style lang="scss" scoped>

</style>