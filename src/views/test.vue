<template>

</template>
<script>
export default {
    data() {
        arr: [
                [1, 2, 3, 4],
                [5, 6, 7, 8]
            ]
    },
    methods: {
        sortArr(num) {
            const arr = [
                [1, 2, 3, 4],
                [5, 6, 7, 8]
            ]
            let flag = false
            // arr.forEach((item, i) => {
                // let low = 0
                // let high = item.length - 1
                // let begin = item[0]
                // while (low <= high) {
                //     let mid = parseInt((low + high)/2)
                //     if (mid === num) {
                //         flag = true
                //     } else if (mid < num) {
                //         low = mid + 1
                //     } else if (mid > num) {
                //         high = mid - 1
                //     }
                //     if (flag) {
                //         break
                //     }
                // }
                // return flag
                for (let i = 0; i < arr.length;i ++) {
                    if (num > item[item.length - 1]) {
                        continue
                    } else if (num < item[item.length - 1]) {

                    }
                }

            // })
        }
    }
}
</script>
<style scoped>

</style>
