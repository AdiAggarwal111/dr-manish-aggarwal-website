import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.resolve("src/assets");
const PUBLIC_IMG_DIR = path.resolve("public/images");

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

async function run() {
  console.log("Optimizing images with sharp...");

  // 1. Doctor portrait PNG (with alpha transparency)
  const docPngPath = path.join(ASSETS_DIR, "doctor-portrait.png");
  if (fs.existsSync(docPngPath)) {
    console.log("Processing doctor-portrait.png...");
    const docMeta = await sharp(docPngPath).metadata();
    console.log(`Original dimensions: ${docMeta.width}x${docMeta.height}`);

    const sizes = [
      { suffix: "", width: docMeta.width },
      { suffix: "-1200", width: 1200 },
      { suffix: "-800", width: 800 },
      { suffix: "-500", width: 500 },
    ];

    for (const s of sizes) {
      const resized = sharp(docPngPath).resize({ width: s.width, withoutEnlargement: true });

      // AVIF
      const avifBuf = await resized.clone().avif({ quality: 80, effort: 4 }).toBuffer();
      const avifFile = `doctor-portrait${s.suffix}.avif`;
      fs.writeFileSync(path.join(ASSETS_DIR, avifFile), avifBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, avifFile), avifBuf);
      console.log(`Saved ${avifFile}: ${(avifBuf.length / 1024).toFixed(1)} KB`);

      // WebP
      const webpBuf = await resized.clone().webp({ quality: 85, effort: 5 }).toBuffer();
      const webpFile = `doctor-portrait${s.suffix}.webp`;
      fs.writeFileSync(path.join(ASSETS_DIR, webpFile), webpBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, webpFile), webpBuf);
      console.log(`Saved ${webpFile}: ${(webpBuf.length / 1024).toFixed(1)} KB`);
    }

    // High quality OG image JPEG for social cards (1200x630 with clean background)
    const ogBuf = await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 13, g: 27, b: 62, alpha: 1 }, // Navy theme background
      },
    })
      .composite([
        {
          input: await sharp(docPngPath).resize({ height: 600, fit: "contain" }).toBuffer(),
          gravity: "southeast",
        },
      ])
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(path.join(PUBLIC_IMG_DIR, "og-doctor.jpg"), ogBuf);
    console.log(`Saved og-doctor.jpg: ${(ogBuf.length / 1024).toFixed(1)} KB`);
  }

  // 2. Yashoda Medicity Hero (exterior photo)
  const heroPath = path.join(ASSETS_DIR, "yashoda-medicity-hero.jpg");
  if (fs.existsSync(heroPath)) {
    console.log("Processing yashoda-medicity-hero.jpg...");
    const heroMeta = await sharp(heroPath).metadata();
    const heroSizes = [
      { suffix: "", width: heroMeta.width },
      { suffix: "-640", width: 640 },
      { suffix: "-480", width: 480 },
    ];

    for (const s of heroSizes) {
      const resized = sharp(heroPath).resize({ width: s.width, withoutEnlargement: true });

      const avifBuf = await resized.clone().avif({ quality: 80, effort: 4 }).toBuffer();
      const avifFile = `yashoda-medicity-hero${s.suffix}.avif`;
      fs.writeFileSync(path.join(ASSETS_DIR, avifFile), avifBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, avifFile), avifBuf);
      console.log(`Saved ${avifFile}: ${(avifBuf.length / 1024).toFixed(1)} KB`);

      const webpBuf = await resized.clone().webp({ quality: 85, effort: 5 }).toBuffer();
      const webpFile = `yashoda-medicity-hero${s.suffix}.webp`;
      fs.writeFileSync(path.join(ASSETS_DIR, webpFile), webpBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, webpFile), webpBuf);
      console.log(`Saved ${webpFile}: ${(webpBuf.length / 1024).toFixed(1)} KB`);
    }

    const optJpg = await sharp(heroPath).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    fs.writeFileSync(path.join(PUBLIC_IMG_DIR, "yashoda-medicity-hero.jpg"), optJpg);
  }

  // 3. Cath Lab Suite
  const cathPath = path.join(ASSETS_DIR, "cath-lab-suite.jpg");
  if (fs.existsSync(cathPath)) {
    console.log("Processing cath-lab-suite.jpg...");
    const cathMeta = await sharp(cathPath).metadata();
    const cathSizes = [
      { suffix: "", width: cathMeta.width },
      { suffix: "-500", width: 500 },
    ];

    for (const s of cathSizes) {
      const resized = sharp(cathPath).resize({ width: s.width, withoutEnlargement: true });

      const avifBuf = await resized.clone().avif({ quality: 80, effort: 4 }).toBuffer();
      const avifFile = `cath-lab-suite${s.suffix}.avif`;
      fs.writeFileSync(path.join(ASSETS_DIR, avifFile), avifBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, avifFile), avifBuf);
      console.log(`Saved ${avifFile}: ${(avifBuf.length / 1024).toFixed(1)} KB`);

      const webpBuf = await resized.clone().webp({ quality: 85, effort: 5 }).toBuffer();
      const webpFile = `cath-lab-suite${s.suffix}.webp`;
      fs.writeFileSync(path.join(ASSETS_DIR, webpFile), webpBuf);
      fs.writeFileSync(path.join(PUBLIC_IMG_DIR, webpFile), webpBuf);
      console.log(`Saved ${webpFile}: ${(webpBuf.length / 1024).toFixed(1)} KB`);
    }

    const optJpg = await sharp(cathPath).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    fs.writeFileSync(path.join(PUBLIC_IMG_DIR, "cath-lab-suite.jpg"), optJpg);
  }

  // 4. Cath Lab Siemens
  const siemensPath = path.join(ASSETS_DIR, "cath-lab-siemens.png");
  if (fs.existsSync(siemensPath)) {
    console.log("Processing cath-lab-siemens.png...");
    const avif = await sharp(siemensPath).avif({ quality: 80, effort: 4 }).toBuffer();
    fs.writeFileSync(path.join(ASSETS_DIR, "cath-lab-siemens.avif"), avif);
    const webp = await sharp(siemensPath).webp({ quality: 85, effort: 5 }).toBuffer();
    fs.writeFileSync(path.join(ASSETS_DIR, "cath-lab-siemens.webp"), webp);
  }

  // 5. Yashoda Exterior
  const exteriorPath = path.join(ASSETS_DIR, "yashoda-exterior.png");
  if (fs.existsSync(exteriorPath)) {
    console.log("Processing yashoda-exterior.png...");
    const avif = await sharp(exteriorPath).avif({ quality: 80, effort: 4 }).toBuffer();
    fs.writeFileSync(path.join(ASSETS_DIR, "yashoda-exterior.avif"), avif);
    const webp = await sharp(exteriorPath).webp({ quality: 85, effort: 5 }).toBuffer();
    fs.writeFileSync(path.join(ASSETS_DIR, "yashoda-exterior.webp"), webp);
  }

  console.log("All next-gen responsive assets generated successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
