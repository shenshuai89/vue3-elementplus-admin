<template>
  <div class="sidebar-container" :class="{ 'has-logo': showLogo }">
    <div class="logo" v-if="showLogo">
      <img class="logo-img" :src="logoUrl" alt="logo" />
      <transition name="fade-transform" mode="out-in">
        <h1 v-show="opened" class="logo-text">Admin</h1>
      </transition>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        class="v-enter-to"
        :default-active="$route.path"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        text-color="#bfcbd9"
        background-color="#304156"
        active-text-color="#409EFF"
      >
        <SidebarItem
          v-for="route in routeList"
          :key="route.path"
          :index="route.path"
          :navRoute="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted } from "vue";
import store from "@/store";
import logoUrl from "@/assets/vue.svg";
import { constantRoutes } from "@/router";
import SidebarItem from "./SidebarItem.vue";
import { getRoles } from '@/utils/auth'

const opened = computed(() => store.state.app.sidebar.opened);
const isCollapse = computed(() => !store.state.app.sidebar.opened);

const showLogo = ref<Boolean>(true);
const roles = getRoles()
const routeList: any[] = reactive([]);
onMounted(() => {
  filterRoutes();
});
/**
 * 权限过滤路由
 */
const filterRoutes = () => {
  constantRoutes.forEach((item) => {
    if (item.path === "/") {
      const childrens = item.children as any[];
      routeList.push(...childrens);
    }
  });
  for (let i = 0; i < routeList.length; i++) {
    if (
      routeList[i].meta &&
      routeList[i].meta.roles &&
      !routeList[i].meta.roles.includes(roles)
    ) {
      routeList.splice(i, 1);
      i--;
    }
  }
  filterChildrens(routeList);
};

/**
 * 权限过滤子路由
 */
const filterChildrens = (routers: any) => {
  const childrens: Array<any> = [];
  routers.forEach((item: any) => {
    if (
      (item.meta && !item.meta.roles) ||
      (item.meta && item.meta.roles && item.meta.roles.includes(roles))
    ) {
      childrens.push(item);
      if (item.children) {
        filterChildrens(item.children);
      }
    }
  });
  routers.length = 0;
  routers.push(...childrens);
};
</script>
<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 17px;
  width: 100%;
  height: 50px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background-color: #2b2f3a;
  .logo-img {
    width: 20px;
    height: 20px;
  }
  .logo-text {
    display: inline-block;
    height: 50px;
    margin-left: 12px;
    font-size: 14px;
    line-height: 50px;
    color: #fff;
  }
}
</style>
