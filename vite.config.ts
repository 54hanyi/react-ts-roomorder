import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // 需要 npm install --save-dev @types/node
  // mode - 開發模式。
  // process.cwd() - 目前工作目錄的路徑。
  // 環境文件的前綴，這裡為空字串表示載入所有環境變數。
    return {
    base: env.VITE_BASE_URL || '/',
    plugins: [
      react(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [
          path.resolve(process.cwd(), "src/assets/icons"),
        ],
        // Specify symbolId format
        symbolId: "icon-[name]",
        inject: "body-last",
        customDomId: "__svg__icons__dom__",
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  };
});
