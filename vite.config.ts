// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      target: "es2022",
      cssCodeSplit: true,
      sourcemap: false,
    },
    plugins: [
      {
        name: "dev-appointment-api",
        configureServer(server) {
          server.middlewares.use("/api/appointments", async (req, res, next) => {
            if (req.method === "OPTIONS") {
              res.statusCode = 204;
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
              res.setHeader("Access-Control-Allow-Headers", "Content-Type");
              res.end();
              return;
            }

            if (req.method === "POST") {
              let rawData = "";
              req.on("data", (chunk) => {
                rawData += chunk;
              });

              req.on("end", async () => {
                try {
                  const body = JSON.parse(rawData || "{}");
                  const mod = await server.ssrLoadModule("/src/server/appointment-handler.ts");
                  const result = await mod.handleAppointmentSubmission(body, process.env);
                  res.statusCode = result.success ? 200 : 400;
                  res.setHeader("Content-Type", "application/json");
                  res.setHeader("Access-Control-Allow-Origin", "*");
                  res.end(JSON.stringify(result));
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({
                      success: false,
                      message:
                        "Dev API Error: " + (err instanceof Error ? err.message : String(err)),
                    }),
                  );
                }
              });
              return;
            }

            next();
          });
        },
      },
    ],
  },
});
