import { MockMethod } from "vite-plugin-mock";
import table from "./modules/table";
import user from "./modules/user";

const statusList = {
  data: [
    { label: "全部", value: 0 },
    { label: "待审核", value: 1 },
  ],
};

export default [
  {
    url: "/api/getList",
    method: "get",
    response: () => {
      return statusList;
    },
  },
  ...table,
  ...user,
] as MockMethod[];
