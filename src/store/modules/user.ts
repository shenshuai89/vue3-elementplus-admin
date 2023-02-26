import { Module } from "vuex";
import { ElMessage } from "element-plus";
import { User, loginUserInfo } from "@/types/store";
import { userLogin, userLogout, get_user_info } from "@/api/user";
import {
  getToken,
  setToken,
  getRoles,
  setRoles,
  getName,
  setName,
  setAvatar,
} from "@/utils/auth";
import avatar from "@/assets/user-icon-avatar.jpeg";

const userModule: Module<User, any> = {
  namespaced: true,
  state: {
    token: getToken(),
    roles: getRoles(),
    name: getName(),
    avatar: avatar, //默认头像
    introduction: "",
  },
  mutations: {
    SET_TOKEN: (state, token: string) => {
      state.token = token;
      setToken(token);
    },
    SET_ROLES: (state, roles: string) => {
      state.roles = roles;
      setRoles(roles);
    },
    SET_NAME: (state, name: string) => {
      state.name = name;
      setName(name);
    },
    SET_AVATAR: (state, avatar: string) => {
      state.avatar = avatar;
      setAvatar(avatar);
    },
    SET_INTRODUCTION: (state, introduction: string) => {
      state.introduction = introduction;
    },
  },
  actions: {
    // user login
    login({ commit }, userInfo: loginUserInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo)
          .then((res: any) => {
            if (res.code === "0") {
              const { token, roles, name, avatar, introduction } = res.data;
              commit("SET_TOKEN", token);
              commit("SET_ROLES", roles);
              commit("SET_NAME", name);
              commit("SET_AVATAR", avatar);
              commit("SET_INTRODUCTION", introduction);
              ElMessage({
                type: "success",
                message: res.message,
                duration: 2000,
              });
              resolve(res);
            } else {
              ElMessage({
                type: "error",
                message: res.message,
              });
              reject(res.message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // user logout
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        userLogout({ token: state })
          .then((res) => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", "");
            commit("SET_NAME", "");
            commit("SET_AVATAR", "");
            dispatch("tagsView/delAllViews", null, { root: true });

            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        get_user_info(state.token)
          .then((res: any) => {
            if (!res) {
              reject("Verification failed, please Login again.");
            }

            const { roles, name, avatar, introduction } = res;

            // roles must be a non-empty array
            if (!roles || roles.length <= 0) {
              reject("getInfo: roles must be a non-null array!");
            }

            commit("SET_NAME", name);
            commit("SET_ROLES", roles);
            commit("SET_AVATAR", avatar);
            commit("SET_INTRODUCTION", introduction);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default userModule;
