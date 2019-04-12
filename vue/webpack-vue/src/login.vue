<!-- login.vue -->
<template>
    <div>
        <h1>这个组件是使用 .vue 文件定义出来的 --- {{msg}}</h1>
    </div>
</template>
<script>
export default {
    data() { // 组件中的 data 必须是 function
        return {
            msg: 123
        }
    },
    methods: {
        show() {
            console.log('调用了 login.vue 组件')
        }
    }
}

</script>

<style>
</style>