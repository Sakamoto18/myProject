<template>
    <div class="main-out relative overflow-hidden" :style="{height: containerHeight}">
        <transition name="el-zoom-in-top">
            <div class="hide-page absolute" v-if="showGuideBar" :style="{height: containerHeight, width: containerWidth}"></div>
        </transition>
        <div class="absolute z-1000 bg-transparent personal-card">
            <el-popover placement="bottom" title trigger="hover" width="205" class="z-1000" transition="fade-in-linear">
                <div class="QR-code inline-block">
                    <img style="width:100%;height:100%;" :src="Bilibili"/>
                </div>
                <svg-icon slot="reference" icon-class="bilibili" class="icon-space pointer h-20 mt-1 ml-2"></svg-icon>
            </el-popover>
            <el-popover placement="bottom" title trigger="hover" width="205" class="z-1000" transition="fade-in-linear">
                <div class="QR-code inline-block">
                    <img style="width:100%;height:100%;" :src="QQImg"/>
                </div>
                <svg-icon slot="reference" icon-class="qq" class="icon-space pointer h-20 mt-1"></svg-icon>
            </el-popover>
            <el-popover placement="bottom" title trigger="hover" width="205" class="z-1000" transition="fade-in-linear">
                <div class="QR-code inline-block">
                    <img style="width:100%;height:100%;" :src="weChatImg"/>
                </div>
                <svg-icon slot="reference" icon-class="we-chat" class="icon-space pointer h-20 mt-1"></svg-icon>
            </el-popover>
            <el-popover content="github" placement="bottom" title trigger="hover" width="40" class="z-1000" transition="fade-in-linear">
                <svg-icon slot="reference" icon-class="GitHub" class="icon-space pointer h-20 mt-1"></svg-icon>
            </el-popover>
        </div>
        <div class="t-center relative" @wheel.prevent="scrollMethod">
            <el-carousel @change="getIndex" ref="carousel" :loop="false" :autoplay="false" trigger="click" :height="containerHeight" direction="vertical" indicator-position="none">
                <el-carousel-item :style="item === '2' ? bgImg : (item === '3' ? bgImg1 : (item === '4' ? bgImg2 : ''))"
                    :height="containerHeight" v-for="(item, index) in testItem" :key="index">
                    <div v-if="item === '1'">
                        <bubble-flow>
                                <div slot="card" class="name-card animation-0 flex absolute-center relative" :class="{shadow: ifMouseMove}">
                                    <div class="h-70 font-family-kai color-white bold full">我叫吕宇宁</div>
                                    <div class="h-20 font-family-roman color-white full">Love Code. Show Code</div>
                                    <div class="h-20 font-family-kai color-white full">一名前端开发工程师</div>
                                    <div class="h-20 color-white font-family-roman full">
                                        <span class="pointer e-mail">lvyuning.banben@foxmail.com</span>
                                    </div>
                                </div>
                        </bubble-flow>
                    </div>
                    <transition>
                        <div v-if="item === '2' && fadeFlag" :style="{height: containerHeight}" class="flex absolute-center">
                            <div class="name-card introduce-card bd-black animation-0 shadow-black relative flex t-left px-8 h-18 absolute-center" :class="{shadow: ifMouseMove}" style="height: 600px;width: 800px">
                                <div :style="photoImg" class="photo absolute bg-transparent full"></div>
                                <div class="cover-block font-family-roman color-white h-40 t-center bold">About me</div>
                                <div class="absolute nail">
                                    <svg-icon icon-class="nail" class="icon-space h-40 m-1"></svg-icon>
                                </div>
                                <div class="bold mt-32 full py-2">--Hello，我是吕宇宁</div>
                                <div class="full">前端开发攻城狮一只。开发创造一个产品，需要的是持之以恒的耐心和细致，能成为你们的拍档，我感到十分荣幸。</div>
                                <div class="full bold py-2">--我可以</div>
                                <div class="full">前端开发，利用各种技巧实现交互丰富的页面，以及组件化开发。</div>
                                <div class="bold full py-2">--关于我</div>
                                <div class="full">坐标上海，现居虹口。目前任职于张江某科技公司，程序猿，前端攻城狮。业务方向是金融，为交易所，证券公司提供稳定的营运、交易系统。技术栈 Vue + ES6 + js + Element-ui。</div>
                                <div class="full py-2">执行力强，有耐心，细致，善于学习！目前可以做点粗粗糙糙的设计。</div>
                            </div>
                        </div>
                    </transition>
                    <transition>
                        <div v-show="item === '3' && fadeFlag1" :style="{height: containerHeight}" class="flex absolute-center relative">
                            <div class="color-white absolute ap-21 h-30 color-yellow bold skills-block"><span>skills:</span></div>
                            <my-chart class="ap-21" :chartData="skillsPie" :refresh="fadeFlag1"></my-chart>
                        </div>
                    </transition>
                    <transition>
                        <div v-if="item === '4' && fadeFlag2" :style="{height: containerHeight}" class="flex absolute-center relative">
                            <time-line class="ap-26"></time-line>
                        </div>
                    </transition>
                </el-carousel-item>
            </el-carousel>
            <transition name="el-zoom-in-top">
                <div v-show="showGuideBar" class="absolute h-18 guide-block flex t-right color-white">
                    <div class="parent-list relative flex" v-for="(item, index) in sideBarList" :key="index">
                        <div class="f-right"><p @click="jumpTo(index)" class="side-list pr-5 pointer" :class="{'side-list-selected': pageFlag === index}">{{ item }}</p></div>
                    </div>
                    <!-- <div :style="arrowImg" class="flex relative jojo"></div> -->
                </div>
            </transition>
            <el-popover placement="bottom" title trigger="hover" class="z-1000" transition="fade-in-linear" :content="showGuideBar ? '关闭' : '导航'">
                <div @click="showGuideBar = !showGuideBar" slot="reference" class="absolute color-gray bg-white guide-button bg-transparent animation-0 tigger-block pointer">
                    <svg-icon v-if="!showGuideBar" icon-class="guide" class="icon-space h-40 m-1"></svg-icon>
                    <svg-icon v-if="showGuideBar" icon-class="close" class="icon-space h-30 mx-1 mt-2"></svg-icon>
                </div>
            </el-popover>
            <div @click="goahead" class="absolute color-gray bg-white bg-transparent ap-45 tigger-block pointer">
                <svg-icon icon-class="arrow_up" class="icon-space h-30 mr-2"></svg-icon>
            </div>
            <div @click="goNext" class="absolute color-gray bg-white bg-transparent apb-delete-45 tigger-block pointer">
                <svg-icon icon-class="arrow_down" class="icon-space h-30 mr-2"></svg-icon>
            </div>
        </div>
    </div>
</template>

<script>
import bubbleFlow from '@/components/bubbleFlow/bubbleFlow'
import myChart from '@/components/myChart/myChart'
import timeLine from '@/components/timeLine/timeLine'

export default {
    name: 'myProject',
    components: {
        bubbleFlow,
        myChart,
        timeLine
    },
    data () {
        return {
            testItem: ['1', '2', '3', '4'],
            sideBarList: ['首页', '关于我', '技能掌握', '我的经历'],
            bgImg: {
                backgroundImage: `url(${require('@/assets/pp.jpg')})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            bgImg1: {
                backgroundImage: `url(${require('@/assets/bg2.jpg')})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            bgImg2: {
                backgroundImage: `url(${require('@/assets/bg1.jpg')})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            photoImg: {
                backgroundImage: `url(${require('@/assets/photo.jpg')})`,
                backgroundRepeat: "no-repeat 0 -20px", // 上移背景图
                backgroundSize: "140px 180px",
            },
            arrowImg: {
                backgroundImage: `url(${require('@/assets/QQ.jpg')})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            skillsPie: [
                {value: 50, name: 'JavaScript'},
                {value: 80, name: 'HTML5'},
                {value: 50, name: 'ES6'},
                {value: 60, name: 'Vue'},
                {value: 65, name: 'CSS3'}
            ],
            QQImg: require('@/assets/QQ.jpg'),
            weChatImg: require('@/assets/weChat.jpg'),
            Bilibili: require('@/assets/bilibili.jpg'),
            ifMouseMove: true,
            showGuideBar: false,
            fadeFlag: false, // 渲染标志
            fadeFlag1: false,
            fadeFlag2: false,
            pageFlag: 0 // 当前页标志,用于导航条的页面选中
        }
    },
    mounted() {},
    computed: {
        containerHeight() {
            return `${window.innerHeight - 2}px`
        },
        carsouelHeight() {
            return window.innerHeight - 2
        },
        containerWidth() {
            return `${window.innerWidth}px`
        }
    },
    methods: {
        goahead() {
            this.$utl.debounce(() => {
                this.$refs['carousel'].prev()
                this.showFade()
            }, 400)
        },
        goNext() {
            this.$utl.debounce(() => {
                this.$refs['carousel'].next()
                this.showFade()
            }, 400)
        },
        scrollMethod(e) {
            this.$utl.throttle(() => {
                if (!this.showGuideBar) {
                    if (e.wheelDelta > 0) {
                        this.goahead()
                    } else if (e.wheelDelta < 0) {
                        this.goNext()
                    }
                }
            }, 700)
        },
        showFade() {
            this.$utl.debounce(() => {
                this.$nextTick(() => {
                    switch(this.pageFlag) {
                    case 0:
                        this.fadeFlag = false
                        this.fadeFlag1 = false
                        this.fadeFlag2 = false
                        break
                    case 1:
                        this.fadeFlag = true
                        this.fadeFlag1 = false
                        this.fadeFlag2 = false
                        break
                    case 2:
                        this.fadeFlag = false
                        this.fadeFlag1 = true
                        this.fadeFlag2 = false
                        break
                    case 3:
                        this.fadeFlag = false
                        this.fadeFlag1 = false
                        this.fadeFlag2 = true
                    }
                })
            }, 400)
        },
        getIndex(index) {
            this.pageFlag = index
        },
        jumpTo(index) {
            this.pageFlag = index
            this.$refs['carousel'].setActiveItem(index)
            this.showGuideBar = false
            this.showFade()
        }
    }
}
</script>
<style scoped lang="scss">
.tigger-block {
    z-index: 1000 !important;
    height: 30px;
    width: 30px;
    border-bottom: 2px solid #cccccc;
    border-radius: 30px;
    right: 25px;
}
.tigger-block:hover {
    color: #ffffff;
    // transition: box-shadow 0.5s;
    transition: background 0.4s;
    background: rgba(51,122,183,0.7);
    box-shadow: 0 2px 3px 0 rgba(222,225,230,1);
}
.personal-card {
    height: 40px;
    width: 155px;
    top: 10px; left: 5px;
    border-radius: 5px;
}
.guide-button {
    z-index: 1001 !important;
    height: 50px;
    width: 50px;
    top: 20px;
    border-radius: 50px;
}
.guide-button:focus {
    outline: none;
}
.e-mail:hover {
    text-decoration: underline
}
.name-card {
    z-index: 1000 !important;
    background-color: transparent;
    height:300px;
    width: 700px;
    border-radius: 15px;
    flex-direction:  column;
}
.shadow {
    transition: box-shadow 0.5s;
    box-shadow: 2px 2px 20px 2px rgba(0,0,0,0.7);
}
.name-card:hover {
    z-index: 1000 !important;
    transition: box-shadow 0.5s;
    box-shadow: 2px 2px 35px 2px rgba(255,255,255,0.9);
    background-color: rgba(255,255,255,0.4) transparent;
}
.photo {
    width: 140px;
    height: 180px;
    border-radius: 100px / 140px;
    top: 50px;
    left: 360px;
}
.jojo {
    height: 130px;
    transform: skewY(64deg);
    flex-direction:  column;
    top: 8%;
}
.guide-block {
    z-index: 1001 !important;
    width: 700px;
    background: rgba(180,180,180, 0.8);
    right: 0px;
    top: 230px;
    height: 1500px;
    transform: skewY(-64deg);
    flex-direction:  column;
}
.hide-page {
    z-index: 1001 !important;
    background: rgba(0,0,0, 0.7);
}
.parent-list {
    top: 5%;
    flex-direction:  column;
    transform: skewY(64deg);
}
.side-list-selected {
    text-decoration: underline;
    color: rgba(51,122,183,0.7);
}
.side-list:hover {
    transition: color 0.4s;
    text-decoration: underline;
    color: rgba(51,122,183,0.7);
}
.cover-block {
    height: 70px;
    width: 600px;
    z-index: 1000;
    top: -100px;
    position: relative;
    font-family: 'Microsoft YaHei';
    /*文字阴影，多次使用堆叠3d效果*/
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.25);
}
// 梯形
.cover-block::before {
    content:'';    /*用伪元素来生成一个矩形*/
    position:absolute;
    top:0; left:0; right:0; bottom:0;
    z-index:-1;    /*背景色要在文字的下一层，以免挡住文字*/
    background: rgba(204,204,204,0.7);
    background-image:linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0));  /*添加一层白色的渐变*/
    transform: scaleY(1.65) perspective(100px) rotateX(30deg);
    transform-origin: bottom;
    // border:3px solid #cccccc;   /*描边*/
    border-radius: .7em .7em 0 0;
    border-bottom: none;   /*去掉底边框*/
    box-shadow: 0 0.1em #F5F5F5 inset;  /*白色的内阴影，打造高光的效果*/
}
.nail {
    top: 30px; left: 20px;
}
.skills-block {
    top: 150px;
    left: 18%;
    text-shadow: 3px 3px 3px white; /*单层阴影*/
}
.introduce-card{
    width: 800px;
    height: 600px;
}
.introduce-card::before, .introduce-card::after {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
}
/*定义两个伪类的样式及动画开始*/
.introduce-card::before, .introduce-card::after {
    content: '';
    z-index: -1;
    margin: -2%;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);
    animation: clipMe 8s linear infinite;
}
/*前一个伪类的动画提前4s执行*/
.introduce-card::before {
    animation-delay: -4s;
}
@keyframes clipMe {
    0%, 100% {
        clip: rect(0px, 1700.0px, 200px, 0px);
    }
    25% {
        clip: rect(0px, 200px, 1200px, 0px);
    }
    50% {
        clip: rect(1200px, 1700px, 1200px, 0px);
    }
    75% {
        clip: rect(0px, 1640px, 1300px, 1620px);

    }
}
</style>
