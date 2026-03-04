import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.resolve('public')
const exts = new Set(['.jpg', '.jpeg', '.png'])
const responsiveWidths = [640, 1200, 2000]

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else {
      yield full
    }
  }
}

function parseFile(file) {
  const parsed = path.parse(file)
  return {
    dir: parsed.dir,
    name: parsed.name,
    ext: parsed.ext.toLowerCase(),
    baseWebp: path.join(parsed.dir, `${parsed.name}.webp`),
    variant: (w) => path.join(parsed.dir, `${parsed.name}-w${w}.webp`),
  }
}

let converted = 0
let variants = 0
let skipped = 0

for await (const file of walk(publicDir)) {
  const { ext, baseWebp, variant } = parseFile(file)
  if (!exts.has(ext)) continue

  await mkdir(path.dirname(baseWebp), { recursive: true })

  try {
    const image = sharp(file)
    const meta = await image.metadata()

    await sharp(file)
      .webp({ quality: 82, effort: 5 })
      .toFile(baseWebp)
    converted += 1

    const width = meta.width || 0

    for (const w of responsiveWidths) {
      if (!width || width <= w) {
        // ensure the variant file exists even when source is smaller than target width
        await sharp(file)
          .webp({ quality: 80, effort: 5 })
          .toFile(variant(w))
      } else {
        await sharp(file)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 80, effort: 5 })
          .toFile(variant(w))
      }
      variants += 1
    }
  } catch (err) {
    skipped += 1
    console.warn(`skip ${file}: ${err.message}`)
  }
}

console.log(`webp conversion complete: converted=${converted}, variants=${variants}, skipped=${skipped}`)
