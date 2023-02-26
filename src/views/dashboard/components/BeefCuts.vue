<template>
  <div ref="echartMain" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import BeefCuts from "@/assets/svg/Beef_cuts_France.svg";
import { defineProps, ref, onMounted, onUnmounted, nextTick } from "vue";
import * as echarts from "echarts/core";
import axios from "axios";
import {
  TooltipComponent,
  VisualMapComponent,
  GeoComponent
} from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer
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
          text: "牛身体结构图",
        },
        tooltip: {},
        visualMap: {
          left: "center",
          bottom: "10%",
          min: 5,
          max: 100,
          orient: "horizontal",
          text: ["", "Price"],
          realtime: true,
          calculable: true,
          inRange: {
            color: ["#dbac00", "#db6e00", "#cf0000"],
          },
        },
        series: [
          {
            name: "French Beef Cuts",
            type: "map",
            map: "Beef_cuts_France",
            roam: true,
            emphasis: {
              label: {
                show: false,
              },
            },
            selectedMode: false,
            data: [
              { name: "Queue", value: 15 },
              { name: "Langue", value: 35 },
              { name: "Plat de joue", value: 15 },
              { name: "Gros bout de poitrine", value: 25 },
              { name: "Jumeau à pot-au-feu", value: 45 },
              { name: "Onglet", value: 85 },
              { name: "Plat de tranche", value: 25 },
              { name: "Araignée", value: 15 },
              { name: "Gîte à la noix", value: 55 },
              { name: "Bavette d'aloyau", value: 25 },
              { name: "Tende de tranche", value: 65 },
              { name: "Rond de gîte", value: 45 },
              { name: "Bavettede de flanchet", value: 85 },
              { name: "Flanchet", value: 35 },
              { name: "Hampe", value: 75 },
              { name: "Plat de côtes", value: 65 },
              { name: "Tendron Milieu de poitrine", value: 65 },
              { name: "Macreuse à pot-au-feu", value: 85 },
              { name: "Rumsteck", value: 75 },
              { name: "Faux-filet", value: 65 },
              { name: "Côtes Entrecôtes", value: 55 },
              { name: "Basses côtes", value: 45 },
              { name: "Collier", value: 85 },
              { name: "Jumeau à biftek", value: 15 },
              { name: "Paleron", value: 65 },
              { name: "Macreuse à bifteck", value: 45 },
              { name: "Gîte", value: 85 },
              { name: "Aiguillette baronne", value: 65 },
              { name: "Filet", value: 95 },
            ],
          },
        ],
      };
    },
  },
});

let myChart: any = null;
const echartMain = ref();
onMounted(() => {
  // nextTick(() => {
  axios.get(BeefCuts).then((svg) => {
    myChart = echarts.init(echartMain.value);
    echarts.registerMap("Beef_cuts_France", { svg: svg.data });
    myChart?.setOption(props.eData);
  });
  // })
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
