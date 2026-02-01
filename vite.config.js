import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesのサブディレクトリ対応
  // カスタムドメイン設定時は環境変数 VITE_BASE_PATH を '/' に設定
  base: process.env.VITE_BASE_PATH || '/official-website-project-kyo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
