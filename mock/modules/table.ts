import Mock from "mockjs";

const data = Mock.mock({
  "items|30": [
    {
      id: "@id",
      title: "@sentence(10, 20)",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)",
    },
  ],
});
export default [
  {
    url: "/api/table/list",
    method: "get",
    response: (config: unknown) => {
      const items = data.items;
      return {
        code: "0",
        data: {
          total: items.length,
          items: items,
        },
      };
    },
  },
];
