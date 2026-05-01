// Convert the QC logo's black background to transparent.
// Treats any sufficiently dark pixel as background and makes it transparent.
// Run: node scripts/transparent-logo.js
const path = require('path')
const { Jimp } = require('jimp')

async function main() {
  const inPath = path.resolve(__dirname, '..', 'public', 'qc-logo.png')
  const outPath = path.resolve(__dirname, '..', 'public', 'qc-logo.png')

  const img = await Jimp.read(inPath)
  const { width, height } = img.bitmap

  // Threshold for "background" — pixels with all RGB channels under THIS are removed.
  const BG_THRESHOLD = 40
  // Soft alpha-feather range (anti-alias edge): pixels between BG_THRESHOLD and FEATHER_END get partial alpha.
  const FEATHER_END = 90

  let removed = 0
  let feathered = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2
      const r = img.bitmap.data[idx + 0]
      const g = img.bitmap.data[idx + 1]
      const b = img.bitmap.data[idx + 2]

      const max = Math.max(r, g, b)

      if (max <= BG_THRESHOLD) {
        img.bitmap.data[idx + 3] = 0
        removed++
      } else if (max < FEATHER_END) {
        // smooth alpha-ramp so anti-aliased edges don't look like a hard cutout
        const t = (max - BG_THRESHOLD) / (FEATHER_END - BG_THRESHOLD)
        img.bitmap.data[idx + 3] = Math.round(255 * t)
        feathered++
      }
    }
  }

  await img.write(outPath)
  console.log(`Done. Removed ${removed} black px, feathered ${feathered} edge px. Saved: ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
