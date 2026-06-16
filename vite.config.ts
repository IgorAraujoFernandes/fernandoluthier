import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Vite is a build tool (not a UI framework), used here only to compile
// TypeScript and process Tailwind CSS. No React/Vue/Next involved.
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    target: "es2020",
    outDir: "dist",
  },
  base: "/fernandoluthier/",
});
