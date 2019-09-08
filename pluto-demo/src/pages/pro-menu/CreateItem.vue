<template>
  <div class="create-item">
    <div class="mask">
      <div class="content">
        <header class="header">
          <p>创建任务</p>
          <a href="#" class="close">x</a>
        </header>
        <body class="body">
          <div class="left"></div>
          <div class="right"></div>
        </body>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateItem'
}
</script>

<style lang="less" scoped>
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  .content{
    position: absolute;
    left: 50%;
    top: 20px;
    background: #ffffff;
    .header{
      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      height: 44px;
      border-bottom: 1px solid #eeeeee;
      p{
        float: left;
      }
      a{
        display: block;
        float: right;
        color: #cccccc;
      }
    }
  }
}

</style>
