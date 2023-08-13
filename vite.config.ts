import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
// uno.config.ts
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import proxy from "./proxy.conf.json";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve('src')
    }
  },
  server: {
    port: 8080,
    proxy
  },
  plugins: [
    react(),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify()
      ]
    })
  ],
})
