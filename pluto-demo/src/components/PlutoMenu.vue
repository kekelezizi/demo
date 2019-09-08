<template>
  <div class="pluto-menu">
    <a-menu>
      <a-menu-item v-for="item in menu"
                   :key="item.code">
        <router-link :to="item.path">
          <a-icon :type="item.icon"></a-icon>
          {{ item.title }}
        </router-link>
      </a-menu-item>
    </a-menu>
    <footer class="footer">
      <svg t="1565428265112"
           class="existlogo"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2487"
           width="200"
           height="200"
           @click="exist">
        <path d="M542.7 373.6h-59.5c-24.8 0-44.8-20.1-44.8-44.8V167.9c0-24.8 20.1-44.8 44.8-44.8h59.5c24.8 0 44.8 20.1 44.8 44.8v160.9c0.1 24.7-20 44.8-44.8 44.8z m0 0"
              fill="#1296db"
              p-id="2488"></path>
        <path d="M542.7 398.5h-59.5c-38.5 0-69.7-31.3-69.7-69.7V167.9c0-38.5 31.3-69.7 69.7-69.7h59.5c38.5 0 69.7 31.3 69.7 69.7v160.9c0.1 38.4-31.2 69.7-69.7 69.7zM483.3 148c-11 0-19.9 8.9-19.9 19.9v160.9c0 11 8.9 19.9 19.9 19.9h59.5c11 0 19.9-8.9 19.9-19.9V167.9c0-11-8.9-19.9-19.9-19.9h-59.5zM513 811.4"
              fill="#1296db"
              p-id="2489"></path>
        <path d="M513 928.3c-218.7 0-396.6-177.9-396.6-396.6 0-132.3 65.4-255.3 175-329 11.4-7.7 26.9-4.6 34.6 6.8 7.7 11.4 4.6 26.9-6.8 34.6-95.7 64.4-152.9 171.9-152.9 287.6 0 191.2 155.5 346.7 346.7 346.7s346.7-155.5 346.7-346.7c0-115.7-57.2-223.2-152.9-287.6-11.4-7.7-14.5-23.2-6.8-34.6 7.7-11.4 23.2-14.5 34.6-6.8 109.6 73.6 175 196.6 175 329 0 218.7-177.9 396.6-396.6 396.6z m0 0"
              fill="#1296db"
              p-id="2490"></path>
      </svg>
      <span>退出登录</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PlutoMenu',
  data: function () {
    return {
      menu: [
        { code: 'PROJECT_MANAGEMENT', title: '项目管理', icon: 'project', path: '/home/promenu' },
        { code: 'MEMBER_MANAGEMENT', title: '成员管理', icon: 'team', path: '/home/personmanage' },
        { code: 'MESSAGE_MANAGEMENT', title: '消息中心', icon: 'bell', path: '' },
        { code: 'PERSONAL_MANAGEMENT', title: '个人中心', icon: 'user', path: '' },
        { code: 'SYSTEM_MANAGEMENT', title: '系统管理', icon: 'laptop', path: '' },
        { code: 'MARKET_MANAGEMENT', title: '任务市场管理', icon: 'shop', path: '' }
      ]
    }
  },
  methods: {
    exist () {
      alert('确定退出?')
    }
  }
}
</script>

<style lang="less" scoped>
.pluto-menu {
  text-align: left;
}

.footer {
  height: 10rem;
  margin-top: 20rem;
  .existlogo {
    width: 30px;
    height: 30px;
    text-align: center;
    display: block;
    margin: auto;
    cursor: pointer;
  }
  span {
    display: block;
    margin: 0 auto;
    margin-left: 7.5rem;
  }
}
</style>
