<template>
    <div class="add-student">
        <div>添加快乐事物：可以让你开心的事情</div>
        <div>事物名称 ：<input type="text" v-model="name"></div>
        <div>事物描述 ：<input type="text" v-model="dec"></div>
        <div><button @click="handleClick">添加</button></div>
        <hr />
    </div>
</template>

<script>
export default {
    data () {
        return {
            name : '',
            dec : ''
        }
    },
    methods : {
        handleClick () {
            const temp = {
                name : this.name,
                dec : this.dec,
                id : +new Date()
            }
            this.$store.state.studentList.push(temp);
        },
    },
    computed: {
        name () {
            return this.$store.state.name
        }
    }
}
</script>

<style scoped>
div {
    margin: 20 px;
}
</style>
