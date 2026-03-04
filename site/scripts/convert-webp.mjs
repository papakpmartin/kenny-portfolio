import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.resolve('public')
const exts = new Set(['.jpg', '.jpeg', '.png'])

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

function toWebpPath(file) {
  const parsed = path.parse(file)
  return path.join(parsed.dir, `${parsed.name}.webp`)
}

let converted = 0
let skipped = 0

for await (const file of walk(publicDir)) {
  const ext = path.extname(file).toLowerCase()
  if (!exts.has(ext)) continue

  const out = toWebpPath(file)
  await mkdir(path.dirname(out), { recursive: true })

  try {
    await sharp(file)
      .webp({ quality: 82, effort: 5 })
      .toFile(out)
    converted += 1
  } catch (err) {
    skipped += 1
    console.warn(`skip ${file}: ${err.message}`)
  }
}

console.log(`webp conversion complete: converted=${converted}, skipped=${skipped}`)
