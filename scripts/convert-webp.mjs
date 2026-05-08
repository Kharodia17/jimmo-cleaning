import sharp from 'sharp'
import { readdirSync, unlinkSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const galleryDir = 'public/gallery'
const files = readdirSync(galleryDir).filter(f => /\.(jpg|jpeg)$/i.test(f))

console.log(`Converting ${files.length} images to WebP...\n`)

for (const file of files) {
  const input = join(galleryDir, file)
  const webpName = basename(file, extname(file)) + '.webp'
  const output = join(galleryDir, webpName)

  if (existsSync(output)) {
    console.log(`  skip  ${file} (already converted)`)
    continue
  }

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output)

  console.log(`  ✓  ${file}  →  ${webpName}`)
}

console.log('\nDone.')
