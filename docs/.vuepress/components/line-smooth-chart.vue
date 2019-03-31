<template>
  <v-chart :options="options" />
</template>

<style>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 400px;
}
</style>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  components: {
    "v-chart": ECharts
  },
  props: {
    x: Array,
    title: String,
    xname: String,
    yname: String,
    smooth: {
      type: Boolean,
      default: true
    },
    y: Array
  },
  data() {
    return {
      options: {
        title: {
          text: this.title,
          x: "center",
          y: 0
        },
        xAxis: {
          type: "category",
          name: this.xname,
          data: this.x
        },
        yAxis: {
          type: "value",
          name: this.yname
        },
        series: [
          {
            data: this.y,
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: "line",
            label: {
              show: true,
              formatter: "({b},{c})"
            },
            smooth: this.smooth
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>
