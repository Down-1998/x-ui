<template>
        <space-div />
</template>

<script>
export default {
    name: 'xSpace'
}
</script>

<script setup>
import { useSlots, ref, h, computed } from 'vue';

const props = defineProps({
    inline:{
        type:Boolean,
        default:true
    },
    size:{
        type:Array,
        default:[20,20]

    }
})
const slotList = ref([]);
const $slots = useSlots();
const xStyle = computed(() =>{
    return {
        display:'flex',
        gap:`${props.size[0]}px ${props.size[1]}px`,
        'flex-direction':props.inline ?'row':'column',
        'flex-wrap':'wrap',
        width:'100%'
    }
})
$slots.default().map((item, index) => {
    slotList.value.push(
        h(
            'div',
            {
                className: 'x-space-item',
                style: "width:fit-content"
            },
            item
        )
    )
})
const SpaceDiv = h(
    'div',
    {
        className: 'x-space',
        style: xStyle.value
    },
    slotList.value
)
</script>



<style lang="scss" scoped>

</style>