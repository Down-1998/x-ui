<template>
   <div class="container">
    <div class="left-menu">
        <li v-for="(item,index) in menuList[0].children" 
        :key="index" 
        :class="{active:activeIndex === index}"
        @click="switchMenu(item,index)"
        >{{ item.name }}</li>
    </div>
    <div class="router-view">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from'vue';
import { useRouter } from 'vue-router'
import menuList from '@/router/routerPage/pages.js'

const router = useRouter();
const activeIndex = ref(0);
const switchMenu = (item,index) =>{
    activeIndex.value = index;
    router.push(item.path)
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    .left-menu{
        width: 360px;
        height: auto;
        overflow-y: auto;
        border-right: 1px solid #f0f0f0;
        li{
            color: #606266;
            list-style: none;
            line-height: 40px;
            padding: 0 20px;
            box-sizing: border-box;
            cursor: pointer;
            &:hover{
                color:$primary ;
            }
        }
        li.active{
            border-right:4px solid #0e80eb ;
            color:$primary ;
            font-weight: 600;
            background: rgba( 14,128,235,0.1 );
        }
    }
    .router-view{
        flex: 1;
        height: auto;
        overflow-y: auto;
        padding: 0 15px;
    }
}

</style>