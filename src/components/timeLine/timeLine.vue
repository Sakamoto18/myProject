<template>
    <div class="timeline-small absolute">
        <div class="timeline-small-body">
            <div class="year-bubble pointer relative ml-16 h-30 bold flex absolute-center mt-4">
                <span>2017</span>
            </div>
            <ul>
                <li v-for="(item, index) in experienseList" :key="index">
                    <div class="bullet"></div>
                    <div class="date"><span>{{ item.date }}</span></div>
                    <div class="desc">
                        <h3 class="bold">{{ item.company }}</h3>
                        <h4>{{ item.content }}</h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experienseList: [
                { date: '2020年', company: '上海金仕达数据系统有限公司', content: '' },
                { date: '2019年6月', company: '天津科技大学', content: '' },
                { date: '2018年10月', company: '上海金仕达数据系统有限公司', content: '' }
            ]
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.year-bubble {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: auto;
    background: no-repeat 50%/70% #eee;
    color: #69ca62;
    box-shadow: inset 0 0 0 6px rgba(105, 202, 98, 0.5);

}
.year-bubble::before, .year-bubble::after {
    position: absolute;
    border-radius: 50%;
    top: 0; bottom: 0; left: 0; right: 0;
}
/*定义两个伪类的样式及动画开始*/
.year-bubble::before, .year-bubble::after {
    content: '';
    z-index: -1;
    margin: -5%;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px;
    animation: clipMe 8s linear infinite;
}
/*前一个伪类的动画提前4s执行*/
.year-bubble::before {
    animation-delay: -4s;
}
.year-bubble:hover {
    transition: text-shadow 0.5s;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5)
}
 /*定义帧动画*/
// @keyframes clipMe {
//     0%, 100% {
//         -webkit-transform:rotate(0deg); /*旋转*/
//     }
//     25% {
//         -webkit-transform:rotate(90deg);
//     }
//     50% {
//         -webkit-transform:rotate(45deg);
//     }
//     75% {
//         -webkit-transform:rotate(270deg);
//     }
// }
@keyframes clipMe {
    0%, 100% {
        clip: rect(0px, 220.0px, 2px, 0px);
    }
    25% {
        clip: rect(0px, 2px, 220.0px, 0px);
    }
    50% {
        clip: rect(218.0px, 220.0px, 220.0px, 0px);
    }
    75% {
        clip: rect(0px, 220.0px, 220.0px, 218.0px);
    }
}
</style>
