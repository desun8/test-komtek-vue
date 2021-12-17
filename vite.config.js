import path from "path";
import { defineConfig } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), WindiCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
})
