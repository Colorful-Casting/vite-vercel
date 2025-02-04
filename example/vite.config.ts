import { defineConfig } from "vite"
import vercel from "@colorfulcast/vite-vercel"

export default defineConfig({
  plugins: [
    vercel({
      middleware: "./middleware.ts",
    }),
  ],
})
