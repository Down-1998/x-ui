<template>
        <button :class="xClass" :disabled="disabled"> 
            <span><slot></slot></span>
        </button>
</template>

<script>
export default{
    name:'xButton'
}
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    type:{
        type:String,
        default:'default'
    },
    disabled:{
        type:Boolean,
        default:false
    },
    round:{
         type:Boolean,
         default:false
    },
    plain:{
        type:Boolean,
        default:false
    },
    size:{
        type:String,
        default:'default'
    }
       
})
const xClass = computed(() =>{
    return [
        'x-button',
        `x-button-${props.type}`,
        props.disabled ? 'x-button-disabled' :'',
        props.round ? 'x-button-round' :'',
        props.plain ? 'x-button-plain' :'',
        props.size ? `x-button-${props.size}` :'',
    ]
})
</script>

<style lang="scss" scoped>
    .x-button{
        border: 0;;
        padding: 12px 24px;
        outline: none;
        background: none;
        line-height: 1;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 10px;
        margin-right: 10px;
        &:hover,&:focus{
            opacity: 0.8;
        }
    }
    .x-button-default{
        color: #333;
        border: 1px solid #dcdfe6;
        // &:hover,&:focus{
        //     color: #409eff;
        //     border-color: #c6e2ff;
        //     background-color: #ecf5ff;
        // }
        &.x-button-plain{
            color:  #333;
            background: $white;
            border: 1px solid #dcdfe6;
            &:hover,&:focus{
                color: $primary;
                background: $white;
                border-color: $primary;
            }
        }
        
    }
    .x-button-primary{
        color: #fff;
        background: $primary;
        border-color: $primary;
        &.x-button-plain{
            color:  $primary;
            background: $primary-light;
            border-color: $primary-light;
            &:hover,&:focus{
                color: #fff;
                background: $primary;
                border-color: $primary;
            }
        }
        
    }
    .x-button-success{
        color: #fff;
        background: $success;
        border-color: $success;
        &.x-button-plain{
            color:  $success;
            background: $success-light;
            border-color: $success-light;
            &:hover,&:focus{
                color: #fff;
                background: $success;
                border-color: $success;
            }
        }
        
    }
    .x-button-warning{
        color: #fff;
        background: $warning;
        border-color: $warning;
        &.x-button-plain{
            color:  $warning;
            background: $warning-light;
            border-color: $warning-light;
            &:hover,&:focus{
                color: #fff;
                background: $warning;
                border-color: $warning;
            }
        }
        
        
    }
    .x-button-info{
        color: #fff;
        background: $info;
        border-color: $info;
        &.x-button-plain{
            color:  $info;
            background: $info-light;
            border-color: $info-light;
            &:hover,&:focus{
                color: #fff;
                background: $info;
                border-color: $info;
            }
        }
        
    }
    .x-button-danger{
        color: #fff;
        background: $danger;
        border-color: $danger;
        &.x-button-plain{
            color:  $danger;
            background: $danger-light;
            border-color: $danger-light;
            &:hover,&:focus{
                color: #fff;
                background: $danger;
                border-color: $danger;
            }
        }
        
    }
    .x-button-text{
        color: #fff;
        background: $text;
        border-color: $text;
        &.x-button-plain{
            color:  $text;
            background: $text-light;
            border-color: $text-light;
            &:hover,&:focus{
                color: #fff;
                background: $text;
                border-color: $text;
            }
        }
        
    }
    .x-button-disabled{
        opacity: 0.4 ;
        cursor: no-drop;
        &:hover,&:focus{
            opacity: 0.4 ;
        }
    }
    .x-button-round{
        border-radius: 20px;
    }
    .x-button-large{
          padding: 16px 40px;
    }
    .x-button-small{
          padding: 8px 16px;
    }
    
</style>