<template>
    <div ref="myCharts" :style="{height: '400px', width: '800px'}" class="absolute z-1000"></div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
export default {
    name: 'myChart',
    props: {
        chartData: {
            type: Array
        },
        refresh: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            count: 0,
            chart: null,
            isfirstPlay: true,
            labelList: []
        }
    },
    watch: {
        refresh: {
            handler(val) {
                this.$nextTick(() => {
                    this.getData()
                }, 1100)
            }
        }
    },
    computed: {
        containerHeight() {
            return `${window.innerHeight - 2}px`
        },
        containerWidth() {
            return `${window.innerWidth}px`
        }
    },
    mouted() {},
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            let index = 0 // 默认选中索引第一个
            this.chart = echarts.init(this.$refs.myCharts, 'macarons')
            this.chart.setOption({
                title: {
                    zlevel: 0,
                    text: [
                        '{value|' + this.count + '分' + '}'
                    ].join('\n'),
                    rich: {
                        value: {
                            color: '#ffffff',
                            fontSize: 10,
                            fontWeight: 'bold',
                            lineHeight: 40
                        },
                        name: {
                            color: '#ffffff',
                            lineHeight: 20
                        }
                    },
                    top: 'center',
                    left: '50%',
                    textAlign: 'center',
                    textStyle: {
                        rich: {
                            value: {
                                color: '#ffffff',
                                fontSize: 18,
                                fontWeight: 'bold',
                                lineHeight: 40
                            },
                            name: {
                                color: '#ffffff',
                                lineHeight: 20
                            }
                        }
                    }
                },
                tooltip: {
                    show: true, // 显示悬浮提示
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}分 ({d}%)' // 提示格式

                },
                legend: {
                    orient: 'vertical', // 垂直展示图例
                    itemWidth: 10, // 设置图例图形宽度
                    itemHeight: 10, // 设置高度
                    left: '2%',
                    y: 'top',
                    selectedMode: false, // 取消图例点击事件
                    textStyle: { //图例文字的样式
                        color: '#fff'
                    },
                    data: this.labelList
                },
                calculable: true,
                series: [
                    {
                        name: 'Skill Name',
                        type: 'pie',
                        center: ['50%', '50%'], // 图位置定位，两边和上下
                        radius: ['21%', '70%'], // 内外环大小比例
                        roseType: 'radius',
                        avoidLabelOverlap: true,
                        label: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c} 分 {per|{d}%}  ',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#fff',
                                    lineHeight: 22,
                                    align: 'center',
                                    fontWeight: 'bold'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     color: '#fff',
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        },
                        data: this.chartData
                    }
                ]
            }, true)
        },
        getData() {
            // 查询重置数据
            this.count = 0
            const data = this.chartData
            data.forEach(item => {
                this.labelList.push(item.name)
                this.count += item.value
            })
            this.initChart()
            // 判断是否是初次加载此图，如果是则执行一次图例函数，并且将标记置为false，
            // 这样就可以在渲染一个图的时候只加载一次这个函数
            // 防止多次点击查询相同图的时候重复触发此函数，导致每次判断的总笔数出现错误计算
            if (this.isfirstPlay && this.chartData.length > 0) {
                this.changeTotalCount()
                this.isfirstPlay = false
            }
        },
        // 饼图动态数据
        changeTotalCount() {
            // 注意指向，下面this已经被指向Echarts，所以要取全局的总笔数需要改变指向，要重新加载图也需要换
            var $this = this
            this.chart.on('legendselectchanged', function(params) {
                // params中有两个参数，1.name，当前点击的图例名；2.selected对象，里面存放图例名以及对应的选中状态
                if (!params.selected[params.name]) {
                    $this.chartData.forEach(item => {
                        if (item.name === params.name) {
                            $this.count = $this.count - item.value
                        }
                    })
                } else {
                    // 反之则加上
                    $this.chartData.forEach((item) => {
                        if (item.name === params.name) {
                            $this.count = $this.count + item.value
                        }
                    })
                }
                if (params.selected !== undefined) {
                    $this.initChart()
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
</style>
