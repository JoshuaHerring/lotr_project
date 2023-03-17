// import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/html/index.html"),
        // product1: resolve(__dirname, "src/product_pages/index.html"),
        // product2: resolve(__dirname, "src/product_listing/index.html"),
      },
    },
  },
});
