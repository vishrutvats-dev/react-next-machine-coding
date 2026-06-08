import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
        } as any,
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
        } as any,
      },
    }),
  ],

  build: {
    target: "esnext",
  },
});
