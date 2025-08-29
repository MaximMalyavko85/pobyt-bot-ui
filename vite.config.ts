import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "envs");

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    resolve: {
      alias: {
        "@shared/configs": path.resolve(__dirname, "src/shared/utils/configs"),
        "@features": path.resolve(__dirname, "src/features"),
        "@entities": path.resolve(__dirname, "src/entities"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@ui": path.resolve(__dirname, "src/shared/ui"),
        "@hooks": path.resolve(__dirname, "src/shared/libs/hooks"),
      },
    },
  };
});
