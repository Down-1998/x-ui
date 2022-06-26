<template>
    <div class="container">
        <div class="logo">
            <img src="../public/assets/imgs/logo.jpg" alt="">
        </div>
        <!-- -->
    </div>
    <div class="tips"> 一套适合开发者使用的轻量级UI组件库，完美支持vue3</div>
    <p class="dec-tips"> 完美支持vite+vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的vue世界！ </p>
    <div class="button-container">
        <button class="begin-use" @click="handleJumpUse">立即上手</button>
        <button class="go-github" @click="jumpToGitHub">GitHub</button>
        <button class="go-npm" @click="jumpToNpm">NPM</button>
    </div>
    <div class="card-box">
        <li>
            <p>更小的体积</p>
            <div>组件体积更小，灵活使用，按需使用。</div>
        </li>
        <li>
            <p>更快的响应</p>
            <div>配合vue3的composition API，更快的相应。</div>
        </li>
        <li>
            <p>更强的拓展性</p>
            <div>给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。</div>
        </li>
        <li>
            <p>更完美的支持</p>
            <div>专为vue3版本开发。。</div>
        </li>
        <li>
            <p>更友好的渲染</p>
            <div>极少的代码量，极简配置项。</div>
        </li>
    </div>
    <div class="links">
        <p class="title">链接</p>
        <span  @click="jumpToGitHub">GitHub</span>
        <span @click="jumpToNpm">NPM</span>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
const handleJumpUse = () =>{
    router.push({
        path:'introduce',
        query:{
            showMenu:true
        }
    })
}

const jumpToGitHub = () =>{
    window.location.href = 'https://github.com/Down-1998/x-ui';
}
const jumpToNpm = () =>{
    window.location.href = 'https://www.npmjs.com/package/xinlun-ui';
}
</script>

<style lang="scss" scoped>


.container {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: rgba(9, 195, 190, .02);

    .logo {
        margin: 60px auto;
        display: block;
        width: 12vw;
        position: relative;

        img {
            width: 100%;
            display: block;
        }
    }

    .tips {
        text-align: center;
        font-size: 2vw;
        color: #4a5264;
        margin: 16px 0 0;
    }

}

.dec-tips {
    text-align: center;
    color: #636e86;
    font-size: .9vw;
}

.button-container {
    width: 100%;
    text-align: center;
    height: auto;
    overflow: hidden;
    margin-top: 5vh;

    .begin-use {
        border: 1px solid #0e80eb;
        color: #fff;
        background-color: #0e80eb;
        padding: 15px 50px;
        border-radius: 22px;
        font-size: 17px;
        transition: all 0.15s ease-in;
        cursor: pointer;
        margin-right: 2vw;

        &:hover {
            opacity: 0.8;
        }
    }

    .go-github {
        border: 1px solid #d9d9d9;
        background: #fff;
        color: #333;
        padding: 15px 50px;
        border-radius: 22px;
        font-size: 17px;
        transition: all 0.15s ease-in;
        margin-right: 2vw;
        cursor: pointer;

        &:hover {
            color: #0e80eb;
            border-color: #0e80eb;
            opacity: .8;
        }
    }

    .go-npm {
        border: 1px solid #d9d9d9;
        background: #fff;
        color: #333;
        padding: 15px 50px;
        border-radius: 22px;
        font-size: 17px;
        transition: all 0.15s ease-in;
        margin-right: 2vw;
        cursor: pointer;

        &:hover {
            color: #0e80eb;
            border-color: #0e80eb;
            opacity: .8;
        }
    }
}

.card-box {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    margin-top: 5vh;
    display: flex;
    justify-content: center;

    li {
        text-align: center;
        width: 19%;
        padding: 0 5px 25px;
        float: left;
        list-style: none;
        background: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        margin-right: 1%;
        cursor: pointer;

        &:hover {
            background: rgba(9, 195, 190, .1)
        }

        p {
            font-size: 18px;
            color: #1f2f3d;
            font-weight: 400;
            padding: 0 14px;
        }

        div {
            font-size: 14px;
            color: #919cac;
            padding: 0;
            line-height: 20px;
            text-align: center;
        }
    }
}

.links {
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 1vh;

    .title {
        font-size: 20px;
        font-weight: 600;
        color: #515a6e;
        margin: 0;
        line-height: 50px;
    }

    span {
        display: inline-block;
        line-height: 30px;
        color: #0b6bc5;
        font-size: 16px;
        margin: 5px 10px;
        cursor: pointer;
    }
}
</style>