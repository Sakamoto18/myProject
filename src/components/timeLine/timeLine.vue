<template>
    <div class="timeline-small absolute">
        <div class="timeline-small-body">
            <div id="bubble" class="year-bubble pointer relative ml-16 h-30 bold flex absolute-center mt-4">
                <span v-if="year">{{ year }}</span>
                <svg-icon v-else slot="reference" icon-class="timeLine" class="icon-space pointer h-40 ml-1 mt-1"></svg-icon>
            </div>
            <ul>
                <li class="pointer" @mouseover="changeYears(index)" @mouseleave="rollBackStyle(index)" v-for="(item, index) in experienseList" :key="index">
                    <div :id="`bullet${index}`" class="bullet"></div>
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
                { date: '2020年', company: '上海金仕达数据系统有限公司', content: `前端开发工程师\n负责前端页面开发及数据联调，并且与产品沟通交互，优化性能以及产品的后期维护` },
                { date: '2019年6月', company: '天津科技大学', content: `软件工程\n校三级奖学金，大学英语六级` },
                { date: '2018年10月', company: '上海金仕达数据系统有限公司', content: `前端开发工程师（实习）\n负责Vue前端页面开发和数据联调` }
            ],
            year: ''
        }
    },
    mounted() {

    },
    methods: {
        changeYears(index) {
            this.$nextTick(() => {
                this.year = this.experienseList[index].date.split('年')[0]
                document.getElementById(`bullet${index}`).style.border = '5px solid #A6DB6D'
                document.getElementById(`bullet${index}`).style.transition = 'border 0.2s'
                document.getElementById('bubble').style.textShadow = '2px 2px 2px rgba(0,0,0,0.5)'
                document.getElementById('bubble').style.transition = 'text-shadow 0.5s'
            })
        },
        rollBackStyle(index) {
            document.getElementById(`bullet${index}`).style.border = '3px solid #A6DB6D'
            document.getElementById('bubble').style.textShadow = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.year-bubble {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: no-repeat 50%/70% #eee;
    color: #69ca62;
    box-shadow: inset 0 0 0 5px rgba(105, 202, 98, 0.5); /* inset 为内阴影，设置后阴影方向在边框内部 */

}
.year-bubble::before, .year-bubble::after {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
}
/*定义两个伪类的样式及动画开始*/
.year-bubble::before, .year-bubble::after {
    content: '';
    z-index: -1;
    margin: -3%;
    border-radius: 50%;
    box-shadow: 0 0 0 2px;
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
        clip: rect(-4px, 220.0px, 2px, -4px); /* 描边 */
    }
    25% {
        clip: rect(-4px, 2px, 220.0px, -4px); /* 防止遮挡，定位边框位置为-4px，不然会出现断层 */
    }
    50% {
        clip: rect(218.0px, 220.0px, 220.0px, 0px);
    }
    75% {
        clip: rect(0px, 220.0px, 220.0px, 218.0px);
    }
}
</style>
