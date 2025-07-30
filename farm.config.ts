import { defineConfig } from "@farmfe/core";
import tailwind from "@farmfe/js-plugin-postcss";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  vitePlugins: [vue()],
  plugins: [tailwind()],
});
