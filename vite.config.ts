import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    base:'/react-ts-roomorder/',
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://freyja-yr52.onrender.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
          secure: false,
        },
      },
    },    
  };
});
