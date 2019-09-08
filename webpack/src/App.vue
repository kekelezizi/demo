<template>
  <div id="app">
    <div class="header">
      <!-- <div class="logo" >快乐源泉</div>       -->
      <router-link tag="div" class="logo" to="/learn">快乐源泉</router-link>
      <ul class="nav">
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/learn">笑话学习</router-link>
        <router-link tag="li" to="/student">乐趣展示</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
        <!-- <router-link tag="li" to="/NotFound"></router-link> -->
      </ul>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- 上一行代码可等于 如下-->
      <!-- <router-link :to="{path:'./'}"></router-link> -->
      <!-- <router-link :to="{name : 'home'}"></router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header{
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  padding-bottom: 2px;
  color: #fff;
}

.nav{
  display: flex;
}

.logo{
  cursor: pointer;
}

.nav li{
  margin: 0 20px;
  cursor: pointer;
}

.router-link-exact-active {
  font-weight: bold;
}

.view{
  padding: 50px 200px;
}


</style>
