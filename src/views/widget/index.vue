<template>
  <div class="card card-success">
    <el-row>
      <CardImage />
    </el-row>
    <el-row>
      <ResumeCard />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CardImage from "./components/CardImage.vue";
import ResumeCard from "./components/ResumeCard.vue";
</script>
<style lang="scss" scoped></style>
