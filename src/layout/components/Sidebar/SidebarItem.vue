<template>
  <template v-if="navRoute.meta && !navRoute.hide">
    <!-- 一级菜单 -->
    <el-menu-item
      v-if="!navRoute.children || !navRoute.children.length"
      :index="navRoute.path"
      :class="{ 'sub-menu-title-noDropdown': !navRoute.isNest }"
    >
      <I
        v-if="navRoute.meta.icon"
        :name="navRoute.meta.icon"
        size="18"
        class="sidebar-icon"
      />
      <template #title>
        <span>{{ navRoute.meta.title }}</span>
      </template>
    </el-menu-item>

    <el-sub-menu v-else :index="navRoute.path">
      <template #title>
        <I
          v-if="navRoute.meta.icon"
          :name="navRoute.meta.icon"
          size="18"
          class="sidebar-icon"
        />
        <span>{{ navRoute.meta.title }}</span>
      </template>
      <div v-for="child in navRoute.children" :key="child.path">
        <SidebarItem
          v-if="child.children && child.children.length"
          :key="child.path"
          :index="child.path"
          :is-nest="true"
          :navRoute="child"
          class="nest-menu"
        />
        <el-menu-item v-else :index="child.path">
          <template #title>
            <span>{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps({
  navRoute: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
});

toRefs(props);
</script>

