import { copyFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist", "client");

const requiredFiles = [
  "index.html",
  "index.rsc",
  "about.html",
  "moments.html",
  "writing.html",
  "writing/agentic-ai-industrial-revolution.html",
  "writing/prototype-1-knowledge-collaboration.html",
  "zh/writing/agentic-ai-industrial-revolution.html",
  "zh/writing/prototype-1-knowledge-collaboration.html",
  "404.html",
  "_headers",
  "favicon.svg",
];

await Promise.all(
  requiredFiles.map(async (file) => {
    const details = await stat(path.join(outputDirectory, file));
    if (!details.isFile() || details.size === 0) {
      throw new Error(`Static export is missing a usable ${file}`);
    }
  }),
);

// Vinext's client asks for `/.rsc` when prefetching the root route, while its
// static exporter writes the same payload as `index.rsc`.
await copyFile(path.join(outputDirectory, "index.rsc"), path.join(outputDirectory, ".rsc"));

console.log("Cloudflare Pages static output is ready in dist/client");
