import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.join(__dirname, '../temp/logo_rgb_4.png');
const outputDir = path.join(__dirname, '../public/images');

// 出力ディレクトリを作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertLogo() {
  console.log('🖼️  ロゴ画像を変換中...\n');

  const conversions = [
    { name: 'logo.webp', width: 800, format: 'webp' },
    { name: 'logo-header.webp', width: 120, format: 'webp' },
    { name: 'favicon-32x32.png', width: 32, format: 'png' },
    { name: 'favicon-16x16.png', width: 16, format: 'png' },
    { name: 'apple-touch-icon.png', width: 180, format: 'png' }
  ];

  for (const config of conversions) {
    try {
      const outputPath = path.join(outputDir, config.name);
      const sharpInstance = sharp(sourcePath).resize(config.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      });

      if (config.format === 'webp') {
        await sharpInstance.webp({ quality: 90 }).toFile(outputPath);
      } else if (config.format === 'png') {
        await sharpInstance.png({ quality: 100 }).toFile(outputPath);
      }

      console.log(`  ✓ ${config.name} (${config.width}px)`);
    } catch (error) {
      console.error(`  ✗ ${config.name}: ${error.message}`);
    }
  }

  console.log('\n✅ ロゴ画像の変換が完了しました！');
}

convertLogo().catch(console.error);
