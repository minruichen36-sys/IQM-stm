import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "public");
const entries = [
  "index.html",
  "styles.css",
  "aesthetic-v4.css",
  "script.js",
  "assets",
  "stm-scan-texture.png",
  "stm-tip-cutout-white-preview.png",
  "stm-tip-cutout.png",
  "生成图片：扫描后的图 (1).png",
  "生成图片：扫描隧道显微镜针尖.png"
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const entry of entries) {
  const source = path.join(root, entry);
  if (existsSync(source)) {
    await cp(source, path.join(out, entry), { recursive: true });
  }
}
