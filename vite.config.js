import path from 'path'
import pkg from './package.json'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from './inject'
import mock from './mock'
import theme from './theme'
import legacy from '@vitejs/plugin-legacy'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? pkg.cdn || './' : './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    mainFields: ['sourceEntry', 'module', 'jsnext:main', 'jsnext'],
  },
  build: {
    assetsDir: 'static',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[ext]',
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/css/global.scss';`,
      },
    },
  },
  plugins: [vue(), inject(), mock(), legacy(), theme()],
})
