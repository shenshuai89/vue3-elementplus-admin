<template>
  <div ref="echartMain" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart, } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  PolarComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LineChart,
  PieChart,
  PolarComponent,
  LegendComponent,
]);

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  eData: {
    type: Object,
    default: () => {
      return {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    },
  },
});

let myChart: any = null;
const echartMain = ref();
onMounted(() => {
  myChart = echarts.init(echartMain.value);
  myChart?.setOption(props.eData);
  window.addEventListener("resize", chartResize);
});

onUnmounted(() => {
  myChart?.dispose();
  window.removeEventListener("resize", chartResize);
});

function chartResize() {
  myChart?.resize();
}
</script>
