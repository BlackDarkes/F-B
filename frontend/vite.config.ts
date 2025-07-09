import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  base: "/",
  server: {
    port: 3000,
    open: true,
    hmr: true,
    host: "0.0.0.0",
    cors: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `
          @use "tailwindcss" as *;
        `,
      },
    },
  },
  resolve: {
      alias: {
        "@": "./src/"
      }
  }
});
