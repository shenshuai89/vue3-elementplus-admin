import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  getToken,
  removeToken,
  removeRoles,
  removeName,
  removeAvatar,
} from "./auth";
import store from "@/store";

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig) : Promise<any>;
  }
}

const service = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API || "/", //请求接口是否加前缀
  timeout: 10000, // request timeout
});

// 发起请求之前的拦截器
service.interceptors.request.use(
  (config: any) => {
    // 如果有token 就携带tokon
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer__" + token;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not "0", it is judged as an error.
    if (res.code !== "0") {
      if (res.code !== "A0000") {
        ElMessage({
          message: res.msg || "Error",
          type: "error",
          duration: 5 * 1000,
        });
      }

      // B0000: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === "B0000") {
        // to re-login
        ElMessageBox.confirm("你的登录信息已经过期", "确定退出", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error: any) => {
    if (error.response && error.response.status === 401) {
      removeToken();
      removeRoles();
      removeName();
      removeAvatar();
      location.reload();
    }
    ElMessage({
      type: "error",
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export default service;
