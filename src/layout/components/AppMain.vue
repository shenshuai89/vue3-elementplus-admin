<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="keyPath" />
    </transition>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const keyPath = useRoute().path;
</script>
<style lang="scss" scoped>
.app-main {
  /* 84 = navbar + tags-view = 50 +34 */
  position: relative;
  height: calc(100vh - 70px);
  min-height: calc(100vh - 70px);
  padding: 20px;
  padding-bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
