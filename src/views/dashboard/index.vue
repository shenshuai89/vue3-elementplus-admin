<template>
  <div class="dashboard-container">
    <!-- 头部的4块内容 -->
    <el-row>
      <el-col :span="6" v-for="list in smallBoxList" :key="list.desc">
        <div :class="['small-box', list.classType]">
          <div class="inner">
            <h3>
              {{ list.title
              }}<sup v-if="list.sup" style="font-size: 14px">{{
                list.sup
              }}</sup>
            </h3>
            <p>{{ list.desc }}</p>
          </div>
          <div class="icon">
            <I :name="list.icon" :size="70"></I>
          </div>
          <a href="#" class="small-box-footer"
            >More info <I name="ArrowRightBold"></I
          ></a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <PersonInfo />
    </el-row>
    <el-row>
      <el-col :span="14">
        <el-switch
          v-model="showBarOrPie"
          size="large"
          active-text="Bar柱状图"
          inactive-text="Pie饼状图"
        />
        <BarChart height="350px" v-if="showBarOrPie" />
        <PieChart height="350px" v-else />
      </el-col>
      <el-col :span="10">
        <BeefCuts height="350px" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import BeefCuts from "./components/BeefCuts.vue"
import PersonInfo from "./components/PersonInfo.vue"
const smallBoxList = reactive([
  {
    title: "150",
    desc: "New Orders",
    icon: "Suitcase",
    classType: "bg-info",
  },
  {
    title: "53",
    sup: "%",
    desc: "Bounce Rate",
    icon: "Histogram",
    classType: "bg-success",
  },
  {
    title: "44",
    desc: "User Registrations",
    icon: "UserFilled",
    classType: "bg-warning",
  },
  {
    title: "65",
    desc: "Unique Visitors",
    icon: "PieChart",
    classType: "bg-danger",
  },
]);
const showBarOrPie = ref(true);
</script>
<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  .el-row {
    .el-col-6 {
      max-width: calc(25% - 15px);
      position: relative;
      &:not(:last-child) {
        margin-right: 20px;
      }
      .small-box {
        border-radius: 0.25rem;
        box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
        display: block;
        margin-bottom: 18px;
        position: relative;
        .inner {
          padding: 10px;
          h3 {
            font-weight: 700;
            margin: 0 0 10px;
            padding: 0;
            white-space: nowrap;
            sup {
              position: relative;
              top: -0.5em;
              font-size: 12px;
              line-height: 0;
              vertical-align: baseline;
            }
          }
        }
        .icon {
          color: rgba(0, 0, 0, 0.15);
          i {
            position: absolute;
            right: 15px;
            top: 20px;
          }
        }
        .small-box-footer {
          background-color: rgba(0, 0, 0, 0.1);
          color: rgba(255, 255, 255, 0.8);
          display: block;
          padding: 3px 0;
          position: relative;
          text-align: center;
          text-decoration: none;
          z-index: 10;
        }
      }
      .bg-info {
        background-color: #17a2b8 !important;
        .inner {
          color: #fff !important;
        }
      }
      .bg-success {
        background-color: #28a745 !important;
        .inner {
          color: #fff !important;
        }
      }
      .bg-warning {
        background-color: #ffc107 !important;
        .small-box-footer {
          color: #333;
        }
      }
      .bg-danger {
        background-color: #dc3545 !important;
        .inner {
          color: #fff !important;
        }
      }
    }
  }
}
</style>
