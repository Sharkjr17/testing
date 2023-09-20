import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

const HtmlWebpackPlugin = require('html-webpack-plugin');


    module.exports = {
      configureWebpack: {
          plugins: [
            new HtmlWebpackPlugin({
              filename: 'tables.html',
              template: './public/save.html',
            }),
            new HtmlWebpackPlugin({
              filename:'index.html',
              template: './public/index.html',
            }),
          ]
      }
    }