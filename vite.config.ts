import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(
  {
    base: "/",
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock",
        localEnabled: process.env.NODE_ENV !== "production", // 开发打包开关
        prodEnabled: process.env.NODE_ENV === "production", // 关闭时，可以控制不让mock打包到最终代码内
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 监视文件更改
        injectCode: `
          import { setupProdMockServer } from './mockProdServer'; 
          setupProdMockServer();`,
      }),
    ],
    // 配置项目别名
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入全局scss样式
        scss: {
          additionalData: '@import "./src/styles/index.scss";',
        },
      },
    },
    build: {
      // sourcemap: true,
      outDir: "doc",
      manifest: true,
      minify: "terser",
      chunkSizeWarningLimit: 1000, // 提高静态资源大小警告
      terserOptions: {
        // 清除console和debugger
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // require
      commonjsOptions: {
        transformMixedEsModules: true,
        include: /node_modules|src\/utils/,
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router", "vuex"],
            "element-plus": ["element-plus"],
            echarts: ["echarts"],
          },
        },
      },
    },
  }
  // return resultConfig;
);
