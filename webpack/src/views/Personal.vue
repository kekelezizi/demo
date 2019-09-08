
<template>
    <div class="personal">
        请问仙女姓名：<input type="text">
        <button>确定</button>
    </div>
</template>

<script>
export default {
    // 导航守卫
    beforeRouteLeave (to, from, next) {
        if(this.name){
            const flag = window.confirm('仙女真的要走了吗？');
            if(flag){
                this.name = '';
                next();
            }
        }else {
            next();
        }
        
    },
    data () {
        return {
            name : ''
        }
    },
    methods : {
        handleClick () {
            this.name = ''
        }
    }
}
</script>

<style>
button{
    margin-left: 15px;
}
</style>
