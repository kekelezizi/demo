<template>
    <div class="community">
        <ul class="nav">
            <router-link tag="li" to="/community/download">快乐下载</router-link>
            <router-link tag="li" to="/community/academic">日常讨论</router-link>
            <router-link tag="li" to="/community/personal">个人中心</router-link>
        </ul>
        <router-view class="router-view"></router-view> 
    </div>
</template>

<style scoped>
.nav{
    display: flex;
    /* position: absolute; */
    left: 150px;
    margin: 20px auto;
}

.nav li{
    margin-top: 30px;
    margin-right: 30px;
    cursor: pointer;
    padding: 10px 20px;
}

.router-link-exact-active{
    background-color: #38f;
    color: #fff;
}

.router-view{
    /* margin-top: 50px; */
    padding-top: 20px;
    padding-left: 20px;
}
</style>
