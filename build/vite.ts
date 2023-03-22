import type { ProxyOptions } from "vite";
export function createProxy(
  mode: Record<string, string>
): Record<string, ProxyOptions> {
  let mainProxy: any = {};
  const proxyUrl = mode.VITE_API_HOST || "https://shenshuai.me";
  const isPreview = mode.command === "preview";
  if (isPreview) {
    mainProxy["/peoplusPro/api"] = {
      target: proxyUrl,
      changeOrigin: true,
    };
  } else {
    mainProxy["/api"] = {
      target: proxyUrl,
      changeOrigin: true,
      rewrite: (path: any) => path.replace(/^\/api/, "peoplusPro/api"),
    };
  }
  return {
    ...mainProxy,
  };
}
