<template>
  <div class="navbar">
    <Hamburger
      class="hamburger-container"
      :is-active="opened"
      @toggleClick="toggleSideBar"
    />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <Screenfull class="screenfull" />
      </el-tooltip>
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
          <img :src="avatar ? avatar : '/img/logo.png'" class="user-avatar" />
          <I name="CaretBottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/')">首页</el-dropdown-item>
            <el-dropdown-item divided @click="editPossword"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item divided @click="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";
import { ElMessage } from "element-plus";
import Hamburger from "./Hamburger.vue";
import Breadcrumb from "./Breadcrumb.vue";
import Screenfull from "./Screenfull.vue";
import { logout } from "../../../api/user";

const opened = computed(() => store.state.app.sidebar.opened);
const avatar = computed(() => store.state.user.avatar);
const router = useRouter();
const toggleSideBar = () => {
  console.log("Toggle sidebar");
console.log(opened.value, "opened");
  store.dispatch("app/toggleSideBar");
};
const logout = () => {
  store.dispatch("user/logout").then((res) => {
    console.log("Logout++++");
    router.push("/login");
  });
};
const editPossword = ()=>{
  console.log("Edit Possword");
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    float: left;
    height: 50px;
    padding: 0 10px;
    line-height: 46px;
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;

    &:focus {
      outline: none;
    }
    .el-badge-tips {
      top: -12px;
      right: 17px;
      line-height: 40px;
      .el-button {
        font-size: 22px;
        line-height: 20px;
        padding: 5px;
        color: #979797;
        &:hover {
          background: rgb(253, 253, 253);
          border-color: #409eff;
          color: #409eff;
        }
        &:focus {
          border-color: #ffffff;
        }
      }
      :deep(.el-badge__content.is-fixed.is-dot) {
        height: 6px;
        width: 6px;
        border: 0;
        transform: translateY(-50%) translateX(50%);
        right: 50%;
        animation: animationBlink 1s steps(5, start) infinite;
      }
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        cursor: pointer;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
@keyframes animationBlink {
  to {
    visibility: hidden;
  }
}
</style>
