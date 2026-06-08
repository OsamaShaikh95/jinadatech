// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Pick nitro preset based on the deploy target:
//   - Vercel sets VERCEL=1 during builds → use the `vercel` preset so the
//     output has the right entry/layout and routes don't 404.
//   - NITRO_PRESET env var always wins (lets users self-host on any target).
//   - Otherwise default to Cloudflare Workers (Lovable's hosting target).
const nitroPreset =
  process.env.NITRO_PRESET ?? (process.env.VERCEL ? "vercel" : "cloudflare-module");

export default defineConfig({
  // Forcing nitro on (object form) ensures the SSR server bundle is produced
  // for self-deploys (e.g. Vercel) too — by default nitro only runs inside a
  // Lovable sandbox, which would leave Vercel with a static-only build that
  // 404s on any non-root route.
  nitro: { preset: nitroPreset },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});
