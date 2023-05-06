<template>
    <div class="echartsPage">
        <div style="width: 46%;height: 400px;" id="main" ref="candlestick"></div>
        <div style="  width: 46%;      height: 400px;" ref="GraphChartDeom"></div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    CandlestickSeriesOption,
    LineChart,
    LineSeriesOption,
    CandlestickChart,
    GraphChart
} from 'echarts/charts';
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    // 数据集组件
    DatasetComponent,
    DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
    | CandlestickSeriesOption
>;

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    CandlestickChart,
    GraphChart,
    LegendComponent
]);

const option: ECOption = {
    // ...
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
        {
            type: 'candlestick',
            data: [
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
            ]
        }
    ]
};

const candlestick = ref<HTMLElement>()
const GraphChartDeom = ref<HTMLElement>()



onMounted(() => {
    let chart = echarts.init(candlestick.value || document.body)
    chart.setOption(option)
    let graph = echarts.init(GraphChartDeom.value || document.body)
    fetch('./src/mock/graph.json').then(e => e.json()).then(graphData => {
        graph.setOption({
            tooltip: {},
            legend: [
                {
                    data: graphData.categories.map(function (a) {
                        return a.name;
                    })
                }
            ],
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    data: graphData.nodes,
                    links: graphData.links,
                    categories: graphData.categories,
                    roam: true,
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    },
                    labelLayout: {
                        hideOverlap: true
                    },
                    scaleLimit: {
                        min: 0.4,
                        max: 2
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            ]
        })
    })

})

</script>
<style lang='less' scoped>
.echartsPage {
    display: flex;
    width: 100%;
    &>div {
        width: 46%;
        height: 400px;
    }
}
</style>