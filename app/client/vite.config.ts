import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'client/'), // 👈 tells Vite to use this folder as the root
  plugins: [react()],
})
