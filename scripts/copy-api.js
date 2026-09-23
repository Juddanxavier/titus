import { cpSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const root = join(import.meta.dirname, "..");
const dist = join(root, "dist");
const apiSrc = join(root, "api");
const apiDest = join(dist, "api");
const storageDest = join(dist, "storage");

if (!existsSync(dist)) {
  console.error("dist/ not found. Run vite build first.");
  process.exit(1);
}

cpSync(apiSrc, apiDest, { recursive: true });
mkdirSync(storageDest, { recursive: true });
console.log("Copied api/ and storage/ into dist/");
