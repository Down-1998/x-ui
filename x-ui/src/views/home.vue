<template>
    <div class="container">
        <transition name="fade">
            <div class="left-menu" v-show="showMenu">
                <div class="title-logo">
                    <img src="../../public/assets/imgs/logo.png" alt="">
                    <span>X-UI</span>
                </div>
                <li v-for="(item, index) in menuList[0].children" :key="index"
                    :class="{ active: activeIndex === index }" @click="switchMenu(item, index)">{{ item.name }}</li>
            </div>
        </transition>

        <div class="router-view">
            <transition name="fade">
                <router-view></router-view>
            </transition>

        </div>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import menuList from '@/router/routerPage/pages.js';

const showMenu = ref(true);
const route = useRoute();
const router = useRouter();
const activeIndex = ref(0);

watch(() => {
    if (route.path === '/') {
        showMenu.value = false
    }
    if (route.query.showMenu === 'true') {
        showMenu.value = true;
        activeIndex.value = 1

    }
})
const switchMenu = (item, index) => {
    activeIndex.value = index;
    router.push(item.path)
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .15s ease-in;
}


.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transition: opacity .15s ease-in;
}


.container {
    width: 100%;
    height: 100vh;
    display: flex;

    .left-menu {
        width: 360px;
        height: auto;
        overflow-y: auto;
        border-right: 1px solid #f0f0f0;
        .title-logo{
            img {
            width: 22px;
            height: 22px;
            padding: 0 20px;
            margin-top: 10px;
            vertical-align: -3px;
        }
        span {
            display: inline-block;
            color: #4a5264;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
        }
        }
        

        

        li {
            color: #606266;
            list-style: none;
            line-height: 40px;
            padding: 0 20px;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                color: $primary ;
            }
        }

        li.active {
            border-right: 4px solid #0e80eb;
            color: $primary ;
            font-weight: 600;
            background: rgba(14, 128, 235, 0.1);
        }
    }

    .router-view {

        flex: 1;
        height: auto;
        overflow-y: auto;
        padding: 0 15px;
    }
}
</style>