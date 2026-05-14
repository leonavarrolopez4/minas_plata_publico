import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";

const archive = path.resolve("minas-de-plata-git-ready.zip");
const marker = path.resolve("src/App.tsx");

if (fs.existsSync(marker)) {
  process.exit(0);
}

if (!fs.existsSync(archive)) {
  throw new Error(`Missing archive: ${archive}`);
}

const zip = new AdmZip(archive);
zip.extractAllTo(path.resolve("."), true);
