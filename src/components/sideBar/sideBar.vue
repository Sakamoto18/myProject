<template>
    <div :style="{height: containerHeight}">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo z-1000"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="changeToPage"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span slot="title">关于我</span>
            </el-menu-item>
            <el-menu-item index="3">
                <span slot="title">技能掌握</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span slot="title">联系我</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            bubbleCount: []
        }
    },
    mounted() {

    },
    computed: {
        containerHeight() {
            return `${window.innerHeight - 2}px`
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        changeToPage(index) {
            this.$emit('changePage', index)
            this.isCollapse = false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
