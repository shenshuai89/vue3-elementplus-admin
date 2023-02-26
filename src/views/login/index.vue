<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      class="login-form"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          clearable
          placeholder="请输入用户名"
          size="large"
        >
          <template #prepend>
            <I name="UserFilled" size="14" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="密码"
          size="large"
          :type="passwordType"
          @keyup.enter="submitForm"
        >
          <template #prepend>
            <I v-if="passwordLock" name="Lock" size="14" @click="switchPass" />
            <I v-else name="Unlock" size="14" @click="switchPass" />
          </template>
        </el-input>
        <span class="show-pwd">
          <I
            v-if="passwordType === 'password'"
            name="View"
            size="14"
            @click="switchPass"
          />
          <I v-else name="Hide" size="14" @click="switchPass" />
        </span>
      </el-form-item>
      <div class="login-btn">
        <el-button
          type="primary"
          size="large"
          style="width: 100%; margin-bottom: 10px"
          :loading="btnLoading"
          @click="submitForm"
          >登录</el-button
        >
      </div>
      <p class="login-tips">用户名: admin 或 editor 密码: any</p>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { useRouter } from "vue-router";
import store from "@/store";
import axios from "axios";
import request from "@/utils/request";

const router = useRouter();

const btnLoading = ref(false);
const passwordLock = ref(true);
const passwordType = ref("password");

const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
});

const loginFormRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const switchPass = () => {
  if (passwordLock.value) {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
  passwordLock.value = !passwordLock.value;
};

const submitForm = async () => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      btnLoading.value = true;
      store
        .dispatch("user/login", loginForm)
        .then(() => {
          router.push("/");
        })
        .catch(() => {
          console.log("submitForm catch");
          btnLoading.value = false;
        })
        .finally(() => {
          console.log("submitForm finally");
          btnLoading.value = false;
        });
    } else {
      ElMessage.error("请输入用户名和密码");
    }
  });
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

/* reset element-ui css */
.login-container {
  .el-input {
    height: 47px;
    width: 100%;
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

/* .login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
} */
</style>
