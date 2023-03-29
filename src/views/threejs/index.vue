<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="第一个box" name="first"><Box /></el-tab-pane>
    <el-tab-pane label="pic制造景深" name="second"><DepthPic /></el-tab-pane>
  </el-tabs>
  <div></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Box from './components/Box.vue';
import DepthPic from './components/DepthPic.vue';
const activeName = ref('first');
</script>
<style lang="scss" scoped></style>
