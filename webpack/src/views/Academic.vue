<template>
    <div class="academic">
        <li
            v-for="item in quesetionList"
            :key="item.quesetionId"
        >
        {{ item.title }}
        </li>
    </div>
</template>

<script>
export default {
    beforeRouterEnter (to, from, next) {
        
        next();
    },
    data () {
        return {
            quesetionList : [
                {
                    quesetionId : 1,
                    title : "今天晚上吃什么"
                },
                {
                    quesetionId : 2,
                    title : "明天穿什么衣服"
                },
                {
                    quesetionId : 3,
                    title : "我最近花了多少钱，应该是没有长胖……"
                },
            ]
        }
    }
}
</script>

<style>
li{
    margin-bottom: 20px;
    top: 50px;
}
</style>
