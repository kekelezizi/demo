<template>
  <div class="project">
    <!-- top -->
    <header class="header">
      <ul>
        <li class="item">
          <a-dropdown>
            <a class="ant-dropdown-link"
               href="#">
              全部任务
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">全部任务</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">今日任务</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">过期任务</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">我的任务</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
        <li class="search">
          <span class="logo"></span>
          <input type="text"
                 placeholder="搜索任务名称或执行人">
        </li>
        <!-- backbutton -->
        <li class="back">
          <span>返回项目管理</span>
          <svg t="1565426007029"
               class="backlogo"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="1731"
               width="200"
               height="200"
               @click="back">
            <path d="M512 499.2m-373.333333 0a373.333333 373.333333 0 1 0 746.666666 0 373.333333 373.333333 0 1 0-746.666666 0Z"
                  fill="#FFFFFF"
                  p-id="1732"></path>
            <path d="M512 891.733333c-215.466667 0-392.533333-177.066667-392.533333-392.533333S296.533333 106.666667 512 106.666667s392.533333 177.066667 392.533333 392.533333S727.466667 891.733333 512 891.733333z m0-744.533333c-194.133333 0-352 157.866667-352 352S317.866667 851.2 512 851.2s352-157.866667 352-352S706.133333 147.2 512 147.2z"
                  fill="#044236"
                  p-id="1733"></path>
            <path d="M887.466667 499.2c0 206.933333-166.4 373.333333-373.333334 373.333333S138.666667 706.133333 138.666667 499.2c76.8 38.4 138.666667 2.133333 138.666666 2.133333s168.533333-78.933333 290.133334 0c121.6 78.933333 245.333333 0 245.333333 0s57.6-38.4 72.533333-49.066666c2.133333 14.933333 2.133333 29.866667 2.133334 46.933333z"
                  fill="#0DE28B"
                  p-id="1734"></path>
            <path d="M896 469.333333l-21.333333-34.133333 27.733333 29.866667c-2.133333 0-6.4 2.133333-6.4 4.266666zM418.133333 689.066667l-189.866666-189.866667 189.866666-192 29.866667 29.866667-162.133333 162.133333L448 661.333333z"
                  fill="#044236"
                  p-id="1735"></path>
            <path d="M686.933333 558.933333c-40.533333 0-83.2-10.666667-128-38.4-110.933333-72.533333-268.8 0-270.933333 2.133334l-17.066667-36.266667c6.4-4.266667 179.2-83.2 309.333334 2.133333 108.8 70.4 219.733333 2.133333 224 0l21.333333 34.133334c-4.266667 0-61.866667 36.266667-138.666667 36.266666z"
                  fill="#044236"
                  p-id="1736"></path>
            <path d="M512 891.733333c-215.466667 0-392.533333-177.066667-392.533333-392.533333S296.533333 106.666667 512 106.666667s392.533333 177.066667 392.533333 392.533333S727.466667 891.733333 512 891.733333z m0-744.533333c-194.133333 0-352 157.866667-352 352S317.866667 851.2 512 851.2s352-157.866667 352-352S706.133333 147.2 512 147.2z"
                  fill="#044236"
                  p-id="1737"></path>
          </svg>
        </li>
      </ul>
    </header>
    <!-- 中间的项目部分 -->

    <body class="body">
      <div class="dairenl">
        <div class="topitem">
          <span>待认领({{ count }})</span>
          <span class="logotop"></span>
        </div>
        <div class="lists">
          <ul>
            <li v-for="(item, index) in tasklist1"
                :key="index"
                class="list"
                draggable="true"
                :id="item.id">{{ item.title }}
              <svg t="1565435287870"
                   class="rightlogo"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="8031"
                   width="200"
                   height="200">
                <path d="M377.6 985.6c117.6-28.8 154.4-140 124.8-257.6C473.6 610.4 389.6 529.6 272 558.4c-93.6 23.2-158.4 103.2-166.4 194.4-0.8 9.6-2.4 20-5.6 29.6-11.2 31.2-36.8 55.2-69.6 63.2 32.8-8 66.4 0.8 91.2 23.2 7.2 6.4 13.6 15.2 18.4 23.2 48.8 76 143.2 116.8 237.6 93.6z"
                      fill="#FFFFFF"
                      p-id="8032"></path>
                <path d="M502.4 728c-2.4-8.8-4.8-17.6-8-26.4-16.8 88.8-72.8 159.2-174.4 184.8-35.2 8.8-69.6 11.2-98.4 12-31.2 0-44 40.8-17.6 58.4 49.6 32 111.2 44.8 172.8 29.6 118.4-30.4 154.4-140.8 125.6-258.4z"
                      fill="#CADBEA"
                      p-id="8033"></path>
                <path d="M502.4 728c-6.4-25.6-15.2-49.6-27.2-71.2-53.6-100.8-206.4-67.2-215.2 46.4-4.8 56 9.6 112.8 39.2 160l77.6 122.4c118.4-29.6 154.4-140 125.6-257.6z"
                      fill="#FF5576"
                      p-id="8034"></path>
                <path d="M320.8 886.4c-1.6 0.8-3.2 0.8-5.6 0.8l62.4 98.4c40-9.6 71.2-29.6 92.8-55.2 43.2-51.2-24-120-76.8-80-22.4 16-47.2 29.6-72.8 36z"
                      fill="#C95065"
                      p-id="8035"></path>
                <path d="M295.2 1014.4c-13.6 0-24-10.4-24-24s10.4-24 24-24c52 0 69.6-2.4 74.4-3.2 0.8-0.8 0 0 2.4-0.8 48.8-12 83.2-40 101.6-81.6 17.6-40 20-92 6.4-146.4-13.6-54.4-40-100-73.6-127.2-36-28.8-79.2-36.8-128-24.8C196.8 602.4 137.6 672 130.4 755.2c-0.8 10.4-2.4 23.2-7.2 35.2-4.8 12.8-18.4 18.4-31.2 14.4-12.8-4.8-18.4-18.4-14.4-31.2 2.4-7.2 4-16 4-23.2 8.8-104 83.2-190.4 184.8-215.2 63.2-16 121.6-4 169.6 34.4 43.2 34.4 74.4 87.2 90.4 152.8 16 65.6 13.6 127.2-8.8 177.6-24.8 56-70.4 93.6-133.6 108.8-16 4-56.8 5.6-88.8 5.6z m73.6-51.2z"
                      fill="#444B54"
                      p-id="8036"></path>
                <path d="M140 915.2c-8 0-16-4-20-11.2-4-6.4-8.8-13.6-14.4-18.4-19.2-16.8-44.8-24-69.6-17.6-12.8 3.2-25.6-4.8-28.8-17.6-3.2-12.8 4.8-25.6 17.6-28.8 40-9.6 82.4 0.8 112.8 28.8 9.6 8.8 16.8 19.2 23.2 28 7.2 11.2 4 25.6-7.2 32.8-4.8 2.4-9.6 4-13.6 4z"
                      fill="#444B54"
                      p-id="8037"></path>
                <path d="M648 900l-28.8-116.8L736 754.4c64-16 129.6 23.2 145.6 88 16 64-23.2 129.6-88 145.6s-129.6-24-145.6-88zM503.2 563.2l38.4 155.2L696.8 680c85.6-21.6 138.4-108 116.8-193.6C792 400.8 705.6 348 620 369.6c-85.6 20.8-138.4 108-116.8 193.6z"
                      fill="#52DDB2"
                      p-id="8038"></path>
                <path d="M541.6 742.4c-10.4 0-20.8-7.2-23.2-18.4-3.2-12.8 4.8-25.6 17.6-28.8l155.2-38.4c72.8-18.4 117.6-92 99.2-164.8-8.8-35.2-30.4-64.8-61.6-84-31.2-18.4-68-24-103.2-15.2-72.8 17.6-117.6 92-99.2 164.8 3.2 12.8-4.8 25.6-17.6 28.8-12.8 3.2-25.6-4.8-28.8-17.6-24-98.4 36-198.4 134.4-222.4 48-12 96.8-4 139.2 20.8 42.4 25.6 72 65.6 83.2 113.6 24 98.4-36 198.4-134.4 222.4l-155.2 38.4c-2.4 0.8-4 0.8-5.6 0.8z"
                      fill="#444B54"
                      p-id="8039"></path>
                <path d="M764 893.6c-6.4 0-13.6-3.2-18.4-8.8-68.8-80-143.2-156.8-236.8-133.6-12.8 3.2-25.6-4.8-28.8-17.6s4.8-25.6 17.6-28.8c120-29.6 209.6 61.6 284.8 149.6 8.8 10.4 7.2 25.6-2.4 33.6-4.8 3.2-10.4 5.6-16 5.6z"
                      fill="#444B54"
                      p-id="8040"></path>
                <path d="M502.4 752c-10.4 0-20.8-7.2-23.2-18.4-3.2-12.8 4.8-25.6 17.6-28.8 116-28.8 131.2-99.2 137.6-181.6 0.8-13.6 12.8-23.2 25.6-22.4 13.6 0.8 23.2 12.8 22.4 25.6-5.6 69.6-14.4 185.6-173.6 224.8-2.4 0.8-4.8 0.8-6.4 0.8z"
                      fill="#444B54"
                      p-id="8041"></path>
                <path d="M764 1015.2c-25.6 0-51.2-7.2-74.4-20.8-32.8-20-56-51.2-65.6-88.8l-30.4-124c-4.8-18.4-20-32.8-39.2-35.2-12.8-1.6-22.4-14.4-20-27.2 1.6-12.8 14.4-22.4 27.2-20 38.4 5.6 69.6 33.6 78.4 71.2l30.4 124c12.8 51.2 64.8 83.2 116 70.4 24.8-6.4 45.6-21.6 59.2-43.2s16.8-48 11.2-72.8c-6.4-24.8-21.6-45.6-43.2-59.2-21.6-13.6-48-16.8-72.8-11.2-12.8 3.2-25.6-4.8-28.8-17.6s4.8-25.6 17.6-28.8c37.6-9.6 76-3.2 108.8 16.8s56 51.2 65.6 88.8c9.6 37.6 3.2 76-16.8 108.8s-51.2 56-88.8 65.6c-11.2 1.6-22.4 3.2-34.4 3.2z"
                      fill="#444B54"
                      p-id="8042"></path>
                <path d="M896 1016l-288-0.8c-13.6 0-24-11.2-24-24 0-13.6 10.4-24 24-24l288 0.8c13.6 0 24 11.2 24 24 0 13.6-10.4 24-24 24z"
                      fill="#444B54"
                      p-id="8043"></path>
                <path d="M608 1015.2l-422.4-1.6c-13.6 0-24-11.2-24-24 0-13.6 10.4-24 24-24l422.4 1.6c13.6 0 24 11.2 24 24s-10.4 24-24 24z"
                      fill="#444B54"
                      p-id="8044"></path>
                <path d="M992 1016c-1.6 0-3.2 0-4.8-0.8-1.6 0-3.2-0.8-4.8-1.6-1.6-0.8-2.4-1.6-4-2.4-1.6-0.8-2.4-1.6-4-3.2l-3.2-3.2c-0.8-1.6-1.6-2.4-2.4-4-0.8-1.6-0.8-3.2-1.6-4.8 0-1.6-0.8-3.2-0.8-4.8 0-6.4 2.4-12.8 7.2-16.8 0.8-0.8 2.4-2.4 4-3.2 1.6-0.8 2.4-1.6 4-2.4 1.6-0.8 3.2-0.8 4.8-1.6 3.2-0.8 6.4-0.8 9.6 0 1.6 0 3.2 0.8 4.8 1.6 1.6 0.8 3.2 1.6 4 2.4 1.6 0.8 2.4 1.6 4 3.2 4.8 4.8 7.2 10.4 7.2 16.8 0 1.6 0 3.2-0.8 4.8 0 1.6-0.8 3.2-1.6 4.8s-1.6 3.2-2.4 4c-0.8 1.6-1.6 2.4-3.2 3.2-3.2 5.6-9.6 8-16 8z"
                      fill="#444B54"
                      p-id="8045"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="dairenl">
        <div class="topitem">
          <span>待认领({{ count }})</span>
          <span class="logotop"></span>
        </div>
        <div class="lists">
          <ul>
            <li v-for="(item, index) in tasklist2"
                :key="index"
                class="list"
                draggable="true"
                :id="item.id">{{ item.title }}
              <svg t="1565435968581"
                   class="rightlogo"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="8183"
                   width="200"
                   height="200">
                <path d="M612.266667 170.666667c-6.4-6.4-14.933333-8.533333-23.466667-4.266667l-151.466667 59.733333c-4.266667 2.133333-8.533333 4.266667-10.666666 8.533334L64 900.266667c-4.266667 8.533333-2.133333 19.2 4.266667 25.6l29.866666 29.866666c4.266667 4.266667 8.533333 6.4 14.933334 6.4 4.266667 0 6.4 0 10.666666-2.133333l663.466667-362.666667c4.266667-2.133333 8.533333-6.4 8.533333-10.666666l59.733334-151.466667c2.133333-8.533333 2.133333-17.066667-4.266667-23.466667L612.266667 170.666667z m147.2 392.533333l-349.866667 189.866667-81.066667-81.066667-29.866666 29.866667 72.533333 72.533333-253.866667 140.8-8.533333-8.533333 256-469.333334 34.133333 34.133334 29.866667-29.866667-42.666667-42.666667 42.666667-78.933333 91.733333 91.733333 29.866667-29.866666-100.266667-100.266667 10.666667-19.2 130.133333-53.333333 221.866667 221.866666-53.333333 132.266667zM970.666667 279.466667l-2.133334-42.666667-162.133333 10.666667 91.733333-91.733334-29.866666-29.866666-102.4 102.4 10.666666-170.666667-42.666666-4.266667-8.533334 140.8-38.4-38.4-29.866666 29.866667 181.333333 181.333333 29.866667-29.866666-49.066667-46.933334z"
                      p-id="8184"
                      fill="#d81e06"></path>
              </svg></li>
          </ul>
        </div>
      </div>
      <div class="dairenl">
        <div class="topitem">
          <span>待认领({{ count }})</span>
          <span class="logotop"></span>
        </div>
        <div class="lists">
          <ul>
            <li v-for="(item, index) in tasklist3"
                :key="index"
                class="list"
                draggable="true"
                :id="item.id">{{ item.title }}
              <svg t="1565436045259"
                   class="rightlogo"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="8356"
                   width="200"
                   height="200">
                <path d="M468.7 615.2c4.5 76.4 22.8 147.4-36.2 182.6-57.8 34.4-108-17-173.5-53-51.9 9.7-109.2-16.6-140.5-69.3-31.5-52.9-27-116.2 6.7-157.2-5.9-6-11.2-12.8-15.7-20.3-32.8-55-11.5-128.1 47.6-163.3 59.1-35.1 133.5-19 166.2 36.1 5 8.4 8.7 17.2 11.2 26.2 50.1-6.4 103.9 19.8 133.9 70.3 29.3 49.1 27.6 107.1 0.3 147.9z"
                      fill="#6CB310"
                      p-id="8357"></path>
                <path d="M258.9 744.8c-51.9 9.7-109.2-16.6-140.5-69.3-31.5-52.9-27-116.2 6.7-157.2-5.9-6-11.2-12.8-15.7-20.3-32.7-55-11.4-128.1 47.7-163.3 1.8-1.1 3.7-2 5.5-2.9l269.2 466.3c-57.5 33.7-107.6-17.5-172.9-53.3z"
                      fill="#78C613"
                      p-id="8358"></path>
                <path d="M916.7 496.8c-4.5 7.5-9.9 14.2-15.8 20.3 33.9 40.9 38.4 104 6.7 156.8-31.5 52.5-89.1 78.8-141.3 69.1-65.9 35.9-116.3 87.2-174.4 52.9-59.4-35.1-40.9-105.9-36.4-182.2-27.5-40.8-29.1-98.7 0.2-147.6 30.1-50.3 84.2-76.5 134.6-70.1 2.5-9 6.3-17.8 11.3-26.2 32.9-54.9 107.7-71 167.1-36 59.5 35.1 80.9 108.1 48 163z"
                      fill="#73BE12"
                      p-id="8359"></path>
                <path d="M916.7 496.8c-4.5 7.5-9.9 14.2-15.8 20.3 33.9 40.9 38.4 104 6.7 156.8-31.5 52.5-89.1 78.8-141.3 69.1-65.6 35.8-115.9 86.8-173.8 53.2l270.6-465.3c1.8 1 3.7 1.9 5.5 2.9 59.6 35.1 81 108.1 48.1 163z"
                      fill="#6CB310"
                      p-id="8360"></path>
                <path d="M789.4 460.8c-34.2-20.4-237.2 260.8-250.8 283.7-13.5 23 3.2 58.1 37.4 78.6 34.2 20.4 72.9 18.4 86.4-4.6 13.6-23 161.2-337.3 127-357.7z"
                      fill="#DBF4B8"
                      p-id="8361"></path>
                <path d="M704.3 577.2c6.8 9.3 3.9 22.8-6.4 30.2-10.3 7.4-24.1 5.8-30.9-3.5-6.8-9.3-71.3-111.1-61-118.5 10.3-7.4 91.6 82.5 98.3 91.8zM735.5 595.2c-11.3-1.5-21.7 7.3-23.3 19.6-1.6 12.3 6.4 23.5 17.7 24.9 11.3 1.5 130.6 9.4 132.2-2.8 1.5-12.4-115.3-40.3-126.6-41.7z"
                      fill="#E4F4CB"
                      p-id="8362"></path>
                <path d="M760.8 463.2c0.9 69.6-36.3 129.8-90.1 156.3-41.9 83.4-65.8 169.6-149.7 170.7-82.1 1.1-103.7-83.8-151-161.8-60.8-21.4-105.3-84.1-106.3-158.8-1-75 42.3-139.1 103-161.9-2.5-10-4.1-20.3-4.2-31-1-78.1 66.2-142.3 150.1-143.4 83.9-1.1 152.7 61.3 153.7 139.4 0.2 11.9-1.3 23.5-4.1 34.6 56.8 24 97.7 84.4 98.6 155.9z"
                      fill="#78C613"
                      p-id="8363"></path>
                <path d="M320.7 578.6c-6.7 9.3-3.9 22.9 6.4 30.3 10.2 7.4 24 5.8 30.7-3.5 6.7-9.3 71-111.3 60.7-118.7-10.2-7.5-91.1 82.6-97.8 91.9zM289.7 596.6c11.2-1.5 21.6 7.3 23.2 19.6 1.5 12.3-6.3 23.5-17.6 25-11.2 1.5-129.9 9.5-131.5-2.9-1.6-12.3 114.6-40.2 125.9-41.7z"
                      fill="#E4F4CB"
                      p-id="8364"></path>
                <path d="M236.1 461.9c34-20.5 236 261.3 249.5 284.3 13.4 23-3.2 58.3-37.3 78.7-34 20.5-72.5 18.4-86-4.6-13.4-22.9-160.2-337.9-126.2-358.4z"
                      fill="#DBF4B8"
                      p-id="8365"></path>
                <path d="M515 790c-77-3.3-98.8-85.5-144.9-161.4-60.8-21.4-105.3-84.1-106.3-158.8-1-75 42.3-139.1 103-161.9-2.5-10-4.1-20.3-4.2-31-1-78.1 66.2-142.3 150.1-143.4 0.8 0 1.5 0.1 2.3 0.1V790z"
                      fill="#A6DB1E"
                      p-id="8366"></path>
                <path d="M507 388.4c45.2-0.8 84 392.3 84.2 422.7 0.2 30.4-36.4 55.6-81.6 56.5-45.2 0.8-82-23.1-82.2-53.5-0.2-30.4 34.4-424.9 79.6-425.7z"
                      fill="#EFFBDD"
                      p-id="8367"></path>
                <path d="M524 551.7c-12 5.4-16.9 20.3-11 33.5 5.9 13.1 20.4 19.4 32.3 14.1 11.9-5.4 133.4-69.4 127.6-82.6-5.9-13.2-136.9 29.6-148.9 35zM483.2 551.8c11.9 4.9 17.2 19.5 11.7 32.6-5.5 13-19.6 19.6-31.6 14.6-11.9-4.9-133.6-64.7-128.1-77.7 5.4-13.1 136 25.5 148 30.5z"
                      fill="#E4F4CB"
                      p-id="8368"></path>
              </svg></li>
          </ul>
        </div>
      </div>
      <div class="dairenl">
        <div class="topitem">
          <span>待认领({{ count }})</span>
          <span class="logotop"></span>
        </div>
        <div class="lists">
          <ul>
            <li v-for="(item, index) in tasklist4"
                :key="index"
                class="list"
                draggable="true"
                :id="item.id">{{ item.title }}
              <svg t="1565436083492"
                   class="rightlogo"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="8496"
                   width="200"
                   height="200">
                <path d="M 216.1 491.1 a 187.2 318.6 0 1 0 374.4 0 a 187.2 318.6 0 1 0 -374.4 0 Z"
                      fill="#ff965c"
                      p-id="8497"></path>
                <path d="M 403.3 829.7 c -29.6 0 -58 -9.7 -84.6 -28.8 c -24.6 -17.7 -46.5 -42.7 -65.1 -74.4 c -37.1 -63.2 -57.6 -146.8 -57.6 -235.4 s 20.5 -172.2 57.6 -235.4 c 18.6 -31.7 40.5 -56.7 65.1 -74.4 c 26.6 -19.1 55 -28.8 84.6 -28.8 s 58 9.7 84.6 28.8 c 24.6 17.7 46.5 42.7 65.1 74.4 c 37.1 63.2 57.6 146.8 57.6 235.4 S 590.1 663.3 553 726.5 c -18.6 31.7 -40.5 56.7 -65.1 74.4 c -26.6 19.2 -55 28.8 -84.6 28.8 Z m 0 -637.2 c -42.6 0 -83.5 29.6 -115.2 83.5 c -33.6 57.2 -52.1 133.6 -52.1 215.2 s 18.5 158 52.1 215.2 c 31.6 53.8 72.5 83.5 115.2 83.5 s 83.5 -29.6 115.2 -83.5 c 33.6 -57.2 52.1 -133.6 52.1 -215.2 S 552 333.1 518.5 276 c -31.7 -53.8 -72.6 -83.5 -115.2 -83.5 Z"
                      fill=""
                      p-id="8498"></path>
                <path d="M 434.5 491.5 a 187.2 318.6 0 1 0 374.4 0 a 187.2 318.6 0 1 0 -374.4 0 Z"
                      fill="#ff965c"
                      p-id="8499"></path>
                <path d="M 621.7 830.1 c -29.6 0 -58 -9.7 -84.6 -28.8 c -24.6 -17.7 -46.5 -42.7 -65.1 -74.4 c -37.1 -63.2 -57.6 -146.8 -57.6 -235.4 s 20.5 -172.2 57.6 -235.4 c 18.6 -31.7 40.5 -56.7 65.1 -74.4 c 26.6 -19.1 55 -28.8 84.6 -28.8 s 58 9.7 84.6 28.8 c 24.6 17.7 46.5 42.7 65.1 74.4 c 37.1 63.2 57.6 146.8 57.6 235.4 s -20.5 172.2 -57.6 235.4 c -18.6 31.7 -40.5 56.7 -65.1 74.4 c -26.6 19.1 -55 28.8 -84.6 28.8 Z m 0 -637.2 c -42.6 0 -83.5 29.6 -115.2 83.5 c -33.6 57.2 -52.1 133.6 -52.1 215.2 s 18.5 158 52.1 215.2 c 31.6 53.8 72.5 83.5 115.2 83.5 c 42.6 0 83.5 -29.6 115.2 -83.5 c 33.6 -57.2 52.1 -133.6 52.1 -215.2 s -18.5 -158 -52.1 -215.2 c -31.6 -53.9 -72.5 -83.5 -115.2 -83.5 Z"
                      fill=""
                      p-id="8500"></path>
                <path d="M 519.8 332.6 h -11.2 c -19.2 0 -34.8 -15.7 -34.8 -34.8 V 120.9 c 0 -19.2 15.7 -34.8 34.8 -34.8 h 11.2 c 19.2 0 34.8 15.7 34.8 34.8 v 176.9 c 0.1 19.1 -15.6 34.8 -34.8 34.8 Z"
                      fill="#46c373"
                      p-id="8501"></path>
                <path d="M 519.8 352.6 h -11.2 c -30.2 0 -54.8 -24.6 -54.8 -54.8 V 120.9 c 0 -30.2 24.6 -54.8 54.8 -54.8 h 11.2 c 30.2 0 54.8 24.6 54.8 54.8 v 176.9 c 0.1 30.2 -24.5 54.8 -54.8 54.8 Z m -11.1 -246.5 c -8.2 0 -14.8 6.6 -14.8 14.8 v 176.9 c 0 8.2 6.6 14.8 14.8 14.8 h 11.2 c 8.2 0 14.8 -6.6 14.8 -14.8 V 120.9 c 0 -8.2 -6.6 -14.8 -14.8 -14.8 h -11.2 Z"
                      fill=""
                      p-id="8502"></path>
                <path d="M 511 555.9 a 187.2 318.6 0 1 0 374.4 0 a 187.2 318.6 0 1 0 -374.4 0 Z"
                      fill="#ff965c"
                      p-id="8503"></path>
                <path d="M 698.2 894.5 c -29.6 0 -58 -9.7 -84.6 -28.8 c -24.6 -17.7 -46.5 -42.7 -65.1 -74.4 c -37.1 -63.2 -57.6 -146.8 -57.6 -235.4 s 20.5 -172.2 57.6 -235.4 c 18.6 -31.7 40.5 -56.7 65.1 -74.4 c 26.6 -19.1 55 -28.8 84.6 -28.8 s 58 9.7 84.6 28.8 c 24.6 17.7 46.5 42.7 65.1 74.4 c 37.1 63.2 57.6 146.8 57.6 235.4 S 885 728.2 847.8 791.4 c -18.6 31.7 -40.5 56.7 -65.1 74.4 c -26.5 19 -55 28.7 -84.5 28.7 Z m 0 -637.2 c -42.6 0 -83.5 29.6 -115.2 83.5 c -33.6 57.2 -52.1 133.6 -52.1 215.2 s 18.5 158 52.1 215.2 c 31.6 53.8 72.5 83.5 115.2 83.5 c 42.6 0 83.5 -29.6 115.2 -83.5 C 847 714 865.5 637.6 865.5 556 S 847 398 813.4 340.8 c -31.7 -53.9 -72.6 -83.5 -115.2 -83.5 Z"
                      fill=""
                      p-id="8504"></path>
                <path d="M 138.2 555.9 a 187.2 318.6 0 1 0 374.4 0 a 187.2 318.6 0 1 0 -374.4 0 Z"
                      fill="#ff965c"
                      p-id="8505"></path>
                <path d="M 325.4 894.5 c -29.6 0 -58 -9.7 -84.6 -28.8 c -24.6 -17.7 -46.5 -42.7 -65.1 -74.4 c -37.1 -63.2 -57.6 -146.8 -57.6 -235.4 s 20.5 -172.2 57.6 -235.4 c 18.6 -31.7 40.5 -56.7 65.1 -74.4 c 26.6 -19.1 55 -28.8 84.6 -28.8 s 58 9.7 84.6 28.8 c 24.6 17.7 46.5 42.7 65.1 74.4 c 37.1 63.2 57.6 146.8 57.6 235.4 S 512.2 728.2 475 791.4 c -18.6 31.7 -40.5 56.7 -65.1 74.4 c -26.5 19 -55 28.7 -84.5 28.7 Z m 0 -637.2 c -42.6 0 -83.5 29.6 -115.2 83.5 c -33.6 57.2 -52.1 133.6 -52.1 215.2 s 18.5 158 52.1 215.2 c 31.6 53.8 72.5 83.5 115.2 83.5 s 83.5 -29.6 115.2 -83.5 c 33.6 -57.2 52.1 -133.6 52.1 -215.2 s -18.5 -158 -52.1 -215.2 c -31.7 -53.9 -72.6 -83.5 -115.2 -83.5 Z"
                      fill=""
                      p-id="8506"></path>
                <path d="M 349.8 588.1 a 168.3 286.5 0 1 0 336.6 0 a 168.3 286.5 0 1 0 -336.6 0 Z"
                      fill="#ff965c"
                      p-id="8507"></path>
                <path d="M 518.1 894.5 c -52.3 0 -100.7 -33.3 -136.3 -93.8 c -33.6 -57.1 -52.1 -132.7 -52.1 -212.7 s 18.5 -155.6 52.1 -212.7 c 35.5 -60.5 83.9 -93.8 136.3 -93.8 c 52.3 0 100.7 33.3 136.3 93.8 C 688 432.4 706.5 508 706.5 588 S 688 743.6 654.4 800.7 c -35.5 60.5 -83.9 93.8 -136.3 93.8 Z m 0 -572.9 c -37.6 0 -73.7 26.3 -101.8 74 c -30 51.1 -46.6 119.4 -46.6 192.4 s 16.5 141.3 46.6 192.4 c 28.1 47.7 64.2 74 101.8 74 c 37.6 0 73.7 -26.3 101.8 -74 c 30 -51.1 46.6 -119.4 46.6 -192.4 S 650 446.7 619.9 395.6 c -28.1 -47.7 -64.2 -74 -101.8 -74 Z"
                      fill=""
                      p-id="8508"></path>
                <path d="M 633.1 655.4 c -2.9 14.3 -6.7 27.8 -11.3 40.5"
                      fill="#ff965c"
                      p-id="8509"></path>
                <path d="M 635.2 700.8 l -26.8 -9.8 c 4.4 -12.1 8 -25 10.7 -38.4 l 28 5.7 c -3.1 14.8 -7.1 29.1 -11.9 42.5 Z"
                      fill=""
                      p-id="8510"></path>
                <path d="M 590.6 423.4 c 29.8 37.2 49.1 97.2 49.1 165 c 0 13.8 -0.8 27.3 -2.3 40.4"
                      fill="#ff965c"
                      p-id="8511"></path>
                <path d="M 651.5 630.4 l -28.4 -3.3 c 1.5 -12.7 2.2 -25.7 2.2 -38.7 c 0 -61.7 -17.2 -120 -46 -156 l 22.3 -17.8 c 33.2 41.5 52.2 104.9 52.2 173.9 c 0.1 14 -0.7 28.1 -2.3 41.9 Z"
                      fill=""
                      p-id="8512"></path>
              </svg></li>
          </ul>
        </div>
      </div>
      <div class="dairenl"
           id="right">
        <div class="timeph">
          <div class="topitem">
            <span>工时排行榜</span>
          </div>
          <div class="person"></div>
          <div class=""></div>
        </div>
        <div class="timeph">
          <div class="topitem">
            <span>工时排行榜</span>
          </div>
          <div class="person"></div>
        </div>
        <div class="timeph">
          <div class="topitem">
            <span>工时排行榜</span>
          </div>
          <div class="person"></div>
        </div>
      </div>
    </body>
    <!-- 下部分的小标签 -->
    <footer class="footer">
      <div class="leftitem">
        <span class="logoleftitem Logo"
              @click="showModal"></span>
        <span class="creatitem">创建任务</span>
      </div>
      <div class="leftitem">
        <span class="logocenteritem Logo"></span>
        <span class="creatitem">工作周记 </span>
      </div>
      <div class="leftitem">
        <span class="logorightitem Logo"></span>
        <span class="creatitem">项目管理</span>
      </div>
      <!-- 弹框 -->
      <div>
        <a-modal title="创建任务"
                 :visible="visible"
                 @ok="handleOk"
                 :confirmLoading="confirmLoading"
                 @cancel="handleCancel"
                 width="800px">
          <div class="nandumiaoshu">
            <div class="creatleft">
              <div class="space">
                <h4>任务工时</h4>
                <a-slider id="test"
                          :defaultValue="1"
                          :max="24"
                          :min="1"
                          v-model="form.timevalue" />
              </div>
              <div class="space">
                <a-form-item label="任务优先级"
                             :required="true"></a-form-item>
                <a-radio-group defaultValue="a"
                               buttonStyle="solid"
                               v-model="form.nanduvalue">
                  <a-radio-button value="a">普通</a-radio-button>
                  <a-radio-button value="b">加急</a-radio-button>
                </a-radio-group>
              </div>
              <div class="space">
                <h4>执行人</h4>
                <a-select :size="size"
                          defaultValue="eleven"
                          style="width: 200px"
                          @change="handleChange">
                  <a-select-option v-for="(item, index) in selectperson"
                                   :key="index"
                                   v-model="personvalue">
                    {{item.name}}
                  </a-select-option>
                </a-select>
              </div>
              <div class="space">
                <h4>计划完成时间</h4>
                <a-range-picker v-model="form.completevalue"
                                :disabledDate="disabledDate"
                                :disabledTime="disabledRangeTime"
                                :showTime="{
                                  hideDisabledOptions: true,
                                  defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]
                                }"
                                format="YYYY-MM-DD HH:mm:ss"
                                style="width: 270px" />
              </div>
            </div>
            <div class="creatright">
              <div>
                <h4 required:
                    true>任务名称</h4>
                <a-input placeholder="请输入任务名称 "
                         v-model="form.namevalue" />
              </div>
              <div>
                <h4>任务描述</h4>
                <a-textarea rows="10"
                            cols="65"
                            v-model="form.decvalue">
                </a-textarea>
              </div>
            </div>
          </div>
        </a-modal>
      </div>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'
import selectperson from './SelectPerson'
export default {
  name: 'Project',
  data () {
    return {
      count: 0,
      visible: false,
      confirmLoading: false,
      ghost: false,
      block: false,
      selectperson,
      tasklist1: [
        { id: '1', title: 'Ant Design Title 1' },
        { id: '2', title: 'Ant Design Title 2' },
        { id: '3', title: 'Ant Design Title 3' },
        { id: '4', title: 'Ant Design Title 4' }
      ],
      tasklist2: [
        { id: '1', title: 'Ant Design Title 1' },
        { id: '2', title: 'Ant Design Title 2' },
        { id: '3', title: 'Ant Design Title 3' },
        { id: '4', title: 'Ant Design Title 4' },
        { id: '5', title: 'Ant Design Title 5' },
        { id: '6', title: 'Ant Design Title 6' }
      ],
      tasklist3: [
        { id: '1', title: 'Ant Design Title 1' },
        { id: '2', title: 'Ant Design Title 2' },
        { id: '3', title: 'Ant Design Title 3' },
        { id: '4', title: 'Ant Design Title 4' },
        { id: '5', title: 'Ant Design Title 5' },
        { id: '6', title: 'Ant Design Title 6' },
        { id: '7', title: 'Ant Design Title 7' },
        { id: '8', title: 'Ant Design Title 8' }
      ],
      tasklist4: [
        { id: '1', title: 'Ant Design Title 1' },
        { id: '2', title: 'Ant Design Title 2' },
        { id: '3', title: 'Ant Design Title 3' },
        { id: '4', title: 'Ant Design Title 4' }
      ],
      form: {
        timevalue: '',
        nanduvalue: '',
        personvalue: '',
        completevalue: '',
        namevalue: '',
        decvalue: ''
      }
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
      this.tasklist1.push({
        id: '154',
        title: this.form.namevalue
      })
    },
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleDisabledChange (disabled) {
      this.disabled = disabled
    },
    moment,
    range (start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },
    disabledDate (current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day')
    },
    disabledRangeTime (_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56]
        }
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56]
      }
    },
    back () {
      this.$router.go(-1)
    },
    handleChange (value) {
      console.log(`Selected: ${value}`)
    }
  },
  changeStyle () {
    this.ghost = !this.ghost
  },
  computed: {
    // count(){
    //   return
    // }
  }
}
document.ondragstart = function (e) {
  e.target.style.opacity = 0.5
  e.dataTransfer.setData('text', e.target.id)
  console.log(e.target.id)
}
document.ondragend = function (e) {
  e.target.style.opacity = 1
}
document.ondragover = function (e) {
  e.preventDefault()
}
document.ondrop = function (e) {
  var data = e.dataTransfer.getData('text')
  e.target.appendChild(document.getElementById(data))
}
</script>

<style lang="less" scoped>
.header {
  height: 4rem;
  // left: 80px;
}

li {
  list-style: none;
}

.header .item {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  color: black;
  line-height: 4rem;
  padding: 0;
  margin: 0 34rem 0 5rem;
}

.header .search {
  display: inline-block;
  font-size: 1rem;
  input::before {
    content: "";
    width: 2.3rem;
    height: 2.3rem;
    border: 1px solid gray;
    background-image: url(../../../static/logo6.png);
    display: inline-flex;
    line-height: 5.4rem;
    background-color: aqua;
  }
  input {
    border-radius: 20px;
    border: none;
    padding: 0.5rem;
    border: 1px solid black;
    outline: none;
  }
}

.ant-radio-group {
  .ant-radio-button-wrapper {
    padding: 0 50px;
  }
}

.header .back {
  display: inline-block;
  font-size: 1rem;
  float: right;
  span {
    width: 4rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 15px;
  }
  .backlogo {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 50px;
    margin: 0.8rem 7rem 0 0.8rem;
    cursor: pointer;
  }
}

.body {
  margin-left: 45px;
  .dairenl {
    float: left;
    background-color: cornsilk;
    border-radius: 10px;
    border-right: #ffffff;
    box-shadow: 0 10px 3px 0 rgba(0, 0, 0, 0.24);
  }
  #right {
    margin-left: 10px;
    .timeph .topitem span {
      text-align: center;
      font-size: 1.7rem;
      font-weight: 400;
    }
  }
  span {
    display: inline-block;
    line-height: 50px;
    font-size: 15px;
  }
  .topitem {
    width: 225px;
    height: 45px;
    // border: 1px solid black;
    padding: 0 15px;
  }
  .logotop {
    margin-top: 10px;
    background-image: url(../../../static/logo7.png);
    float: right;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
  }
  ul {
    padding: 0;
  }
  .lists {
    width: 225px;
    height: 450px;
    // border: 1px solid black;
    border-radius: 10px;
    border-right: #fffffd;
  }
  .list {
    display: block;
    margin: 0 8px 20px 10px;
    height: 35px;
    line-height: 35px;
    background-color: #fffffd;
    border-radius: 5px;
    cursor: pointer;
    .rightlogo {
      width: 35px;
      height: 35px;
      display: inline-block;
      float: right;
    }
  }
}

.footer {
  height: 5.4rem;
  display: inline-block;
  .leftitem {
    float: left;
    display: flex;
    align-items: center;
    height: 80px;
    width: 200px;
    margin: 10px 45px 0;
    cursor: pointer;
    .Logo {
      display: inline-block;
      width: 30px;
      height: 30px;
      // border: 1px solid black;
    }
    .creatitem {
      // line-height: 30px;
      display: inline-block;
      margin-right: 5rem;
    }
    .logoleftitem {
      background-image: url(../../../static/logo1.png);
    }
    .logocenteritem {
      background-image: url(../../../static/logo3.png);
    }
    .logorightitem {
      background-image: url(../../../static/logo4.png);
    }
  }
}

.nandumiaoshu {
  display: flex;
  .creatleft {
    width: 300px;
    height: 400px;
    border-right: 1px solid #00000f;
    padding-right: 20px;
    .space {
      margin-bottom: 30px;
      height: 70px;
    }
    .code-box-demo .ant-slider {
      width: 270px;
    }
    .ant-btn {
      padding: 0 50px;
      // display: inline-block;
      float: left;
    }
  }
  .creatright {
    width: 500px;
    height: 400px;
    // background-color: aqua;
    > div {
      padding: 15px 25px 30px 25px;
    }
  }
}

.ant-row {
  margin-bottom: 10px;
}
</style>
