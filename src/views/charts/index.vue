<template>
  <div class="charts">
    <h3>折线图</h3>
    <el-row :gutter="15">
      <el-col :span="8">
        <LineChart :eData="lineData1" />
      </el-col>
      <el-col :span="8">
        <LineChart :eData="lineData2" />
      </el-col>
      <el-col :span="8">
        <LineChart :eData="lineData3" />
      </el-col>
    </el-row>
    <el-row :height="500"
      ><el-col> <LineChartJson /> </el-col
    ></el-row>
    <h3>柱状图</h3>
    <el-row :gutter="15">
      <el-col :span="8">
        <BarChart :eData="barData1" />
      </el-col>
      <el-col :span="8">
        <BarChart :eData="barData2" />
      </el-col>
      <el-col :span="8">
        <BarChart :eData="barData3" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <BarChart :eData="barData4" />
      </el-col>
    </el-row>
    <h3>饼状图</h3>
    <el-row :gutter="15">
      <el-col :span="8">
        <PieChart :eData="pieData1" />
      </el-col>
      <el-col :span="16">
        <PieChart :eData="pieData2" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core";
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
import LineChartJson from "./components/LineChartJson.vue";
import PieChart from "./components/PieChart.vue";
const lineData1 = {
  title: {
    text: "Line",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Email", "Video Ads"],
    right: "10%",
  },
  grid: {
    left: "3%",
    right: "14%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
};
const lineData2 = {
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
  // title: {
  //   text: "Gradient Stacked Area Chart",
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
  },
  toolbox: {
    // feature: {
    //   saveAsImage: {},
    // },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Line 1",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: "Line 2",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(0, 221, 255)",
          },
          {
            offset: 1,
            color: "rgb(77, 119, 255)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: "Line 3",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(55, 162, 255)",
          },
          {
            offset: 1,
            color: "rgb(116, 21, 219)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: "Line 4",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 0, 135)",
          },
          {
            offset: 1,
            color: "rgb(135, 0, 157)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 402, 231, 134, 190, 230, 120],
    },
    {
      name: "Line 5",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 191, 0)",
          },
          {
            offset: 1,
            color: "rgb(224, 62, 76)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 302, 181, 234, 210, 290, 150],
    },
  ],
};
const lineData3 = {
  title: {
    text: "周气温变化",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    right: "10%",
  },
  toolbox: {
    show: true,
    feature: {
      // dataZoom: {
      //   yAxisIndex: "none",
      // },
      // dataView: { readOnly: false },
      // magicType: { type: ["line", "bar"] },
      restore: {},
      // saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} °C",
    },
  },
  series: [
    {
      name: "Highest",
      type: "line",
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }],
      },
    },
    {
      name: "Lowest",
      type: "line",
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: "average", name: "Avg" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max",
            },
            {
              symbol: "circle",
              label: {
                position: "start",
                formatter: "Max",
              },
              type: "max",
              name: "最高点",
            },
          ],
        ],
      },
    },
  ],
};
const barData1 = {
  title: {
    text: "一周消费",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};
const barData2 = {
  title: {
    text: "对换坐标轴",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one",
    ],
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: [
        { value: -0.07, label: "right" },
        { value: -0.09, label: "right" },
        0.2,
        0.44,
        { value: -0.23, label: "right" },
        0.08,
        { value: -0.17, label: "right" },
        0.47,
        { value: -0.36, label: "right" },
        0.18,
      ],
    },
  ],
};
const barData3 = {
  title: {
    text: "气候变化",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["降水", "气温"],
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "降水",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "气温",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "降水",
      type: "bar",
      tooltip: {
        valueFormatter: function (value:any) {
          return value + " ml";
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: "气温",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value:any) {
          return value + " °C";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
};
const barData4 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};
const pieData1 = {
  title: {
    text: "Website",
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
const pieData2 = {
  title: {
    text: "南丁格尔图",
    subtext: "Fake Data",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    left: "center",
    top: "bottom",
    data: [
      "rose1",
      "rose2",
      "rose3",
      "rose4",
      "rose5",
      "rose6",
      "rose7",
      "rose8",
    ],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "Radius Mode",
      type: "pie",
      radius: [20, 140],
      center: ["25%", "50%"],
      roseType: "radius",
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { value: 40, name: "rose 1" },
        { value: 33, name: "rose 2" },
        { value: 28, name: "rose 3" },
        { value: 22, name: "rose 4" },
        { value: 20, name: "rose 5" },
        { value: 15, name: "rose 6" },
        { value: 12, name: "rose 7" },
        { value: 10, name: "rose 8" },
      ],
    },
    {
      name: "Area Mode",
      type: "pie",
      radius: [20, 140],
      center: ["75%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 30, name: "rose 1" },
        { value: 28, name: "rose 2" },
        { value: 26, name: "rose 3" },
        { value: 24, name: "rose 4" },
        { value: 22, name: "rose 5" },
        { value: 20, name: "rose 6" },
        { value: 18, name: "rose 7" },
        { value: 16, name: "rose 8" },
      ],
    },
  ],
};
</script>
<style lang="scss" scoped>
.charts {
  .el-row {
    height: 300px;
    .el-col-8 {
      max-width: calc(33.333% - 15px);
    }
    .el-col-16 {
      max-width: calc(66.66% - 30px);
    }
  }
}
</style>
