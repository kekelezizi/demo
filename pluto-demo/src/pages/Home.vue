<template>
    <div class="pluto-home">
      <div class="menu-block">
        <pluto-menu></pluto-menu>
      </div>
      <div class="content-block">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import PlutoMenu from '@/components/PlutoMenu'

export default {
  name: 'Home',
  components: {
    PlutoMenu
  }
}
</script>

<style lang="less" scoped>
.pluto-home {
  height: 100%;
  display: flex;
  .menu-block {
    height: 100%;
    width: 20rem;
    background-color: #FFF;
  }
  .content-block {
    flex: 1;
    background-color: rgba(250, 252, 255);
  }
}
</style>
