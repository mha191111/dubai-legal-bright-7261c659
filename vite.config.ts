// @lovable.dev/vite-tanstack-config already includes tanstackStart,
// viteReact, tailwindcss, tsconfigPaths, aliases, and other plugins.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [nitro()],
  },
});