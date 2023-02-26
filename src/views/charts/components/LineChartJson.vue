<template>
  <div ref="echartMain" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  VisualMapComponent,
  PolarComponent,
  DataZoomComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import AQI from "./aqi-beijing.json";

echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  GridComponent,
  CanvasRenderer,
  LineChart,
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
          text: "北京AQI",
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
        },
        xAxis: {
          data: AQI.map(function (item) {
            return item[0];
          }),
        },
        yAxis: {},
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            startValue: "2020-06-01",
          },
          {
            type: "inside",
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#93CE07",
            },
            {
              gt: 50,
              lte: 100,
              color: "#FBDB0F",
            },
            {
              gt: 100,
              lte: 150,
              color: "#FC7D02",
            },
            {
              gt: 150,
              lte: 200,
              color: "#FD0100",
            },
            {
              gt: 200,
              lte: 300,
              color: "#AA069F",
            },
            {
              gt: 300,
              color: "#AC3B2A",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: {
          name: "Beijing AQI",
          type: "line",
          data: AQI.map(function (item) {
            return item[1];
          }),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#333",
            },
            data: [
              {
                yAxis: 50,
              },
              {
                yAxis: 100,
              },
              {
                yAxis: 150,
              },
              {
                yAxis: 200,
              },
              {
                yAxis: 300,
              },
              {
                yAxis: 600,
              },
            ],
          },
        },
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
