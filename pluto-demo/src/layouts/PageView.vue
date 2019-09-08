<template>
    <the-layout>
      <router-view></router-view>
    </the-layout>
</template>

<script>
import TheLayout from './TheLayout'

export default {
  components: {
    TheLayout
  },
  name: 'PageView'
}
</script>

<style lang="less" scoped>
</style>
