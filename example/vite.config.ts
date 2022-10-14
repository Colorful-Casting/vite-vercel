import { defineConfig } from "vite"
import vercel from "@cycraft/vite-vercel"

export default defineConfig({
  plugins: [
    vercel({
      middleware: "./middleware.ts",
    }),
  ],
})
