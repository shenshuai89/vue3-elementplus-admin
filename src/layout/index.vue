<template>
  <div class="app-wrapper" :class="classObj">
  <!-- 小屏幕下，出现黑色背景层 -->
    <div
      v-if="device === 'mobile' && opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <!--侧边栏-->
    <Sidebar />
    <!--主体内容-->
    <div class="main-container">
      <!--顶部导航-->
      <Navbar />
      <!-- 关闭菜单 -->
      <TagsView />
      <!--主页面-->
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import { isMobile } from "@/utils/utils";
import Navbar from "./components/Navbar/index.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";

const route = useRoute();
const opened = computed(() => store.state.app.sidebar.opened);
const withoutAnimation = computed(
  () => store.state.app.sidebar.withoutAnimation
);
const device = computed(() => store.state.app.device);

const classObj = computed(() => {
  return {
    hideSidebar: !opened.value,
    openSidebar: opened.value,
    withoutAnimation: withoutAnimation.value,
    mobile: device.value === "mobile",
  };
});

onBeforeMount(() => {
  window.addEventListener("resize", resizeHandler);
});

onMounted(() => {
  const isMob = isMobile();
  if (isMob) {
    store.dispatch("app/toggleDevice", "mobile");
    store.dispatch("app/closeSideBar", true);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});

watch(route, () => {
  if (device.value === "mobile" && opened.value) {
    store.dispatch("app/closeSideBar", false);
  }
});
const handleClickOutside = () => {
  store.dispatch("app/closeSideBar", false);
};

const resizeHandler = () => {
  if (!document.hidden) {
    const isMob = isMobile();
    store.dispatch("app/toggleDevice", isMob ? "mobile" : "desktop");

    if (isMob) {
      store.dispatch("app/closeSideBar", true);
    }
  }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main-container {
    position: relative;
    // padding-top: 50px;
    min-height: 100%;
    margin-left: $sideBarWidth;
    transition: margin-left 0.28s;
  }
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .drawer-bg {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
  }
}
</style>
