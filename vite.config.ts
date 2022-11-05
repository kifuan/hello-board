import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
      ],
    }),
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:9002/',
    },
  },
})
