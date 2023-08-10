import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    react(),
    UnoCSS({
      presets: [
        presetUno()
      ]
    })
  ],
})
