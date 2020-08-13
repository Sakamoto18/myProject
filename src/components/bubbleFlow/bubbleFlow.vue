<template>
    <div :style="{height: containerHeight}" class="bubbles flex">
        <slot name="card"></slot>
        <div v-for="(item, index) in bubblesCount" :key="index" class="bubble"></div>
    </div>
</template>

<script>
export default {
    name: 'bubbleFlow',
    data () {
        return {
            bubblesCount: []
        }
    },
    mounted() {
        let arr = []
        arr = Array(100)
        arr.fill('')
        this.bubblesCount = arr
        this.flowBubble()
    },
    computed: {
        containerHeight() {
            return `${window.innerHeight - 2}px`
        }
    },
    methods: {
        flowBubble() {
            this.$nextTick(() => {
                const colors = ['#cccccc']
                const bubbles = Array.from(document.querySelectorAll('.bubble'))
                let randomColor = []
                for (let i = 0; i < bubbles.length; i++) {
                    // 双~用法:按对数位取反，得到整数，如果你想使用比Math.floor()更快的方法，那就是它了。对于正数，它向下取整；对于负数，向上取整；非数字取值为0，
                    randomColor.push(~~(Math.random()*colors.length))
                }
                bubbles.map((bubble, index) => {
                    bubble.style.backgroundColor = colors[randomColor[index]]
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
