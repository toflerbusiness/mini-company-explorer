import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    proxy: {
      // Proxy all requests starting with '/api' to your backend
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
        // (Optional) Path rewrite if your backend doesn't use '/api'
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});
