<template>
    <a-layout class="the-layout">
        <the-header></the-header>
        <a-layout-content>
          <slot>
          </slot>
        </a-layout-content>
    </a-layout>
</template>

<script>
import TheHeader from './TheHeader'

export default {
  components: {
    TheHeader
  },
  name: 'TheLayout'
}
</script>

<style lang="less" scoped>
.the-layout {
  display: flex;
  .ant-layout-content {
    flex: 1;
  }
}

</style>
