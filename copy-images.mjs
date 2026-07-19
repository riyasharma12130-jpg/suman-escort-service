import { copyFileSync, mkdirSync, readdirSync, existsSync, statSync } from "fs";
import { join } from "path";

const srcDir = join(process.cwd(), "images");
const destDir = join(process.cwd(), "dist", "images");

if (!existsSync(srcDir)) {
  console.log("No images folder found, skipping copy");
  process.exit(0);
}

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

const files = readdirSync(srcDir);
files.forEach((file) => {
  const srcFile = join(srcDir, file);
  const destFile = join(destDir, file);
  if (statSync(srcFile).isFile()) {
    copyFileSync(srcFile, destFile);
    console.log(`Copied: ${file}`);
  }
});

console.log("Images copied successfully!");