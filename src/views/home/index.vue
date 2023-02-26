<template>
  <div class="home">
    <el-skeleton :rows="5" animated />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const keyPath = computed(() => useRoute().path);
</script>
<style lang="scss" scoped></style>
