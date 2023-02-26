<template>
  <div class="dashboard-container">
    <Box style="position: absolute; top: -20px; z-index: 9;"/>
    <Per3d />
    <Charts :eData="edataObj" height="500px" />
  </div>
</template>

<script setup lang="ts">
import Charts from "./components/Charts.vue";
import Per3d from "./components/Per3d.vue";
import Box from "./components/Box.vue";
const data: any[] = [];
for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI;
  let r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}
const edataObj = {
  title: {
    text: 'Two Value-Axes in Polar'
  },
  legend: {
    data: ['line']
  },
  polar: {
    center: ['50%', '54%']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: data
    }
  ],
  animationDuration: 2000
};
</script>
<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
}
</style>
