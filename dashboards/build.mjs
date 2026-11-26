import { build } from "esbuild";
import { widgetOverrides } from "./widget-overrides.mjs";

await build({
  entryPoints: { "uis-dashboard": "main.jsx" },
  outdir: "app",
  bundle: true,
  format: "esm",
  splitting: true,
  minify: true,
  jsx: "automatic",
  target: "es2022",
  define: { global: "globalThis", "process.env.NODE_ENV": '"production"' },
  loader: { ".woff": "file", ".woff2": "file", ".ttf": "file", ".eot": "file", ".svg": "file", ".png": "file" },
  assetNames: "assets/[name]-[hash]",
  chunkNames: "chunks/[name]-[hash]",
  legalComments: "linked",
  plugins: [widgetOverrides()],
});
