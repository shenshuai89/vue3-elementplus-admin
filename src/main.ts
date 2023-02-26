import { createApp, createVNode } from "vue";
// element-plus
import ElementPlus, { ElIcon } from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import SvgIcon from "@/components/SvgIcon.vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";

//权限
import "./permission";
// import { setupProdMockServer } from "./mockProdServer";
// if (process.env.NODE_ENV === "production") {
  // setupProdMockServer();
// }

const Icon = (props: {
  name: string;
  size: number | string;
  color: string;
}) => {
  const { name, size, color } = props;
  return createVNode(
    ElIcon,
    {
      size: size || 16,
      color,
    },
    () => createVNode(Icons[name as keyof typeof Icons])
  );
};
const app = createApp(App);
app.component("I", Icon);
app.component("SvgIcon", SvgIcon);

app.use(router).use(store).use(ElementPlus).mount("#app");
