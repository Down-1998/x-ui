import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include:[/\.md$/,/\.vue$/]
  }),Markdown()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src'),
      "com":path.resolve(__dirname,'./src/components')
    }
  },
  build:{
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    },
    lib:{
      entry:'./packages/index.js',
      name:'xinlun-ui'
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@use "./src/assets/styles/style.scss" as *;'
      }
    }
  }
})
