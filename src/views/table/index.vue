<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="MockjsTable" name="first"><MockjsTable /></el-tab-pane>
    <el-tab-pane label="VirtualList" name="second"><VirtualList /></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MockjsTable from './MockjsTable.vue';
import VirtualList from './VirtualList.vue';
const activeName = ref('first');
</script>
<style lang="scss" scoped></style>
