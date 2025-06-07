import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        // 1) Silence warnings below 2 MB (adjust to your appetite)
        chunkSizeWarningLimit: 2000, // in KB; default is 500

        rollupOptions: {
            output: {
                // 2) Auto-chunk everything in node_modules by package name
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        // e.g. 'react', 'lodash', 'chart.js', etc.
                        const pkg = id.toString().split("node_modules/")[1].split("/")[0];
                        return `vendor.${pkg}`;
                    }
                },
            },
        },
    },
});
