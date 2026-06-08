import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:5001/",
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HostButton": "./src/atoms/HostButton.tsx",
      },
      // cast shared entries to any to satisfy plugin typings
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
  server: {
    port: 5000,
    strictPort: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
});
