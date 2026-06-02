import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "..", "reference", "photo_2026-05-29_11-12-37 - copia.png");
const appDir = join(root, "src", "app");

// Source is 179x157. Crop a square focused on the face/head so it stays
// recognizable at tiny favicon sizes.
const crop = { left: 32, top: 6, width: 120, height: 120 };

async function square(size) {
  return sharp(src)
    .extract(crop)
    .resize(size, size, { fit: "cover" })
    .png()
    .toBuffer();
}

// Build a .ico that embeds PNG frames (supported by all modern browsers).
function buildIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(frames.length, 4);

  const dir = Buffer.alloc(16 * frames.length);
  let offset = 6 + dir.length;
  const datas = [];
  frames.forEach((f, i) => {
    const b = i * 16;
    dir.writeUInt8(f.size >= 256 ? 0 : f.size, b + 0); // width
    dir.writeUInt8(f.size >= 256 ? 0 : f.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bpp
    dir.writeUInt32LE(f.data.length, b + 8); // size
    dir.writeUInt32LE(offset, b + 12); // offset
    offset += f.data.length;
    datas.push(f.data);
  });
  return Buffer.concat([header, dir, ...datas]);
}

const sizes = [16, 32, 48];
const frames = [];
for (const s of sizes) frames.push({ size: s, data: await square(s) });
writeFileSync(join(appDir, "favicon.ico"), buildIco(frames));

// App Router metadata icons
writeFileSync(join(appDir, "icon.png"), await square(512));
writeFileSync(join(appDir, "apple-icon.png"), await square(180));

console.log("Favicon + icons generated.");
