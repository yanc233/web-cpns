/*
 * @Author: Yanc
 * @Date: 2022-11-06 20:18:20
 * @LastEditTime: 2022-11-06 22:49:26
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) => tag.includes("-"),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: "src/CustomElement/index.ts",
      formats: ["es", "cjs", "iife"],
      name: "CustomElement",
    },
    rollupOptions: {
      // external: ["vue"],
    },
  },
});
