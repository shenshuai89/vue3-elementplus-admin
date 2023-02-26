import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const asyncRoutes = [];
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404.vue"),
    meta: {
      title: "未找到页面",
    },
  },
  {
    path: "/403",
    component: () => import("@/views/errorPage/403.vue"),
    meta: {
      title: "权限不足",
    },
  },
  {
    path: "/401",
    component: () => import("@/views/errorPage/401.vue"),
    meta: {
      title: "未登录",
    },
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "Home",
        meta: {
          title: "首页",
          icon: "HomeFilled",
        },
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        redirect: "/dashboard/board1",
        meta: {
          title: "看板",
          icon: "Histogram",
          roles: ['admin']
        },
        children: [
          {
            path: "/dashboard/board",
            component: () => import("@/views/dashboard/index.vue"),
            name: "Dashboard1",
            meta: { title: "看板1" },
          },
          {
            path: "/dashboard/board1",
            component: () => import("@/views/dashboard/board1.vue"),
            name: "Dashboard2",
            meta: { title: "看板2" },
          },
        ],
      },
      {
        path: "/charts",
        component: () => import("@/views/charts/index.vue"),
        name: "Charts",
        meta: {
          title: "图表",
          icon: "PieChart",
        },
      },
      {
        path: "/form",
        component: () => import("@/views/form/index.vue"),
        name: "Form",
        meta: {
          title: "表单",
          icon: "Edit",
        },
      },
      {
        path: "/table",
        component: () => import("@/views/table/index.vue"),
        name: "Table",
        meta: {
          title: "表格",
          icon: "Notebook",
        },
      },
      {
        path: "/placeholderInsert",
        component: () => import("@/views/placeholderInsert/index.vue"),
        name: "placeholderInsert",
        meta: {
          title: "占位符插入",
          icon: "Place",
        },
      },
      // 多级嵌套菜单
      {
        path: "/nested",
        redirect: "/nested/menu1",
        name: "Nested",
        meta: {
          title: "嵌套菜单",
          icon: "Menu",
          roles: ['admin']
        },
        children: [
          {
            path: "/nested/menu1",
            redirect: "/nested/menu1/menu1-1",
            // component: () => import("@/views/nested/menu1/index.vue"), // Parent router-view
            name: "Menu1",
            meta: { title: "Menu1", roles: ['admin'] },
            children: [
              {
                path: "/nested/menu1/menu1-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-1/index.vue"),
                name: "Menu1-1",
                meta: { title: "Menu1-1", roles: ['admin'] },
              },
              {
                path: "/nested/menu1/menu1-2",
                redirect: "/nested/menu1/menu1-2/menu1-2-1",
                // component: () =>
                //   import("@/views/nested/menu1/menu1-2/index.vue"),
                name: "Menu1-2",
                meta: { title: "Menu1-2", roles: ['admin'] },
                children: [
                  {
                    path: "/nested/menu1/menu1-2/menu1-2-1",
                    component: () =>
                      import(
                        "@/views/nested/menu1/menu1-2/menu1-2-1/index.vue"
                      ),
                    name: "Menu1-2-1",
                    meta: { title: "Menu1-2-1", roles: ['admin'] },
                  },
                  {
                    path: "/nested/menu1/menu1-2/menu1-2-2",
                    component: () =>
                      import(
                        "@/views/nested/menu1/menu1-2/menu1-2-2/index.vue"
                      ),
                    name: "Menu1-2-2",
                    meta: { title: "Menu1-2-2", roles: ['admin'] },
                  },
                ],
              },
              {
                path: "/nested/menu1/menu1-3",
                component: () =>
                  import("@/views/nested/menu1/menu1-3/index.vue"),
                name: "Menu1-3",
                meta: { title: "Menu1-3", roles: ['admin'] },
              },
            ],
          },
          {
            path: "/nested/menu2",
            component: () => import("@/views/nested/menu2/index.vue"),
            name: "Menu2",
            meta: { title: "menu2", roles: ['admin'] },
          },
        ],
      },
      // 卡片
      {
        path: "/calendar",
        component: () => import("@/views/calendar/index.vue"),
        name: "Calendar",
        meta: {
          title: "日历",
          icon: "Calendar",
        },
      },
      // 卡片
      {
        path: "/widget",
        component: () => import("@/views/widget/index.vue"),
        name: "Widget",
        meta: {
          title: "卡片",
          icon: "Grid",
        },
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
