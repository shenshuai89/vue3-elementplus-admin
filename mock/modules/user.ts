const tokens: any = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};
type tokenType = {
  roles: string[];
  introduction: string;
  avatar: string;
  name: string;
  token: string;
};
type tokenTypeName = "admin-token" | "editor-token";
const users: Record<tokenTypeName, tokenType> = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar: "/image/avatar/avatar.png",
    name: "Super Admin",
    token: "Super*Adminadministrator",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar: "/image/avatar/editor-avatar.png",
    name: "Normal Editor",
    token: "Editoreditoram",
  },
};

export default [
  // user login
  {
    url: "/api/user/login",
    method: "post",
    timeout: 1000,
    statusCode: 200,
    response: (config: any) => {
      const { username } = config.body;
      const token = tokens[username] as {
        token: tokenTypeName;
      };
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: "用户名或密码不正确",
        };
      }

      return {
        code: "0",
        message: "登录成功！",
        data: users[token.token],
      };
    },
  },

  // get user info
  {
    url: "/api/user/info",
    method: "get",
    response: (config: any) => {
      const { token } = config.query;
      const info = users[token as tokenTypeName];
      // mock error
      if (!info) {
        return {
          code: 50008,
          message: "登录失败, 不能查询出用户详情.",
        };
      }

      return {
        code: "0",
        data: info,
      };
    },
  },

  // user logout
  {
    url: "/api/user/logout",
    method: "get",
    response: () => {
      return {
        code: "0",
        data: "success",
      };
    },
  },
];
