import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const conversions = [
  { input: '../temp/display.png', output: '../public/images/display.webp', width: 1920 },
  { input: '../temp/display.png', output: '../public/images/display-mobile.webp', width: 768 },
  { input: '../temp/key-visual.png', output: '../public/images/key-visual.webp', width: 1200 },
  { input: '../temp/key-visual.png', output: '../public/images/key-visual-mobile.webp', width: 600 },
  { input: '../temp/three-view.png', output: '../public/images/three-view.webp', width: 1600 },
  { input: '../temp/raidori.png', output: '../public/images/raidori.webp', width: 800 },
];

async function convertImages() {
  for (const { input, output, width } of conversions) {
    try {
      const inputPath = join(__dirname, input);
      const outputPath = join(__dirname, output);
      
      await sharp(inputPath)
        .resize(width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✓ Created: ${output}`);
    } catch (error) {
      console.error(`✗ Failed to convert ${input}:`, error.message);
    }
  }
  
  console.log('\n✓ All images converted successfully!');
}

convertImages();
