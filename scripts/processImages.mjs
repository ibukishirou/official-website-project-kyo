import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../public/images');

// AIドライブの画像パス
const aiDriveImages = {
  logo: '/project-kyo/ロゴ/logo_rgb_4.png',
  display: '/project-kyo/イラスト/ディスプレイ_02.png',
  keyVisual: '/project-kyo/イラスト/キービジュアル_00(通常).png',
  threeView: '/project-kyo/イラスト/三面図_アビスモデル(AI学習防止).png',
  raidori: '/project-kyo/イラスト/ライドリ.png'
};

// 出力設定
const outputs = {
  logo: [
    { name: 'logo.webp', width: 800, format: 'webp' },
    { name: 'logo-header.webp', width: 120, format: 'webp' },
    { name: 'favicon-32x32.png', width: 32, format: 'png' },
    { name: 'favicon-16x16.png', width: 16, format: 'png' },
    { name: 'apple-touch-icon.png', width: 180, format: 'png' }
  ],
  display: [
    { name: 'display.webp', width: 1920, format: 'webp' },
    { name: 'display-mobile.webp', width: 768, format: 'webp' }
  ],
  keyVisual: [
    { name: 'key-visual.webp', width: 1200, format: 'webp' },
    { name: 'key-visual-mobile.webp', width: 600, format: 'webp' }
  ],
  threeView: [
    { name: 'three-view.webp', width: 1600, format: 'webp' }
  ],
  raidori: [
    { name: 'raidori.webp', width: 800, format: 'webp' }
  ]
};

async function processImage(sourcePath, outputConfigs) {
  console.log(`\n処理中: ${sourcePath}`);
  
  // Check if source exists (in /mnt/aidrive)
  const fullPath = `/mnt/aidrive${sourcePath}`;
  if (!fs.existsSync(fullPath)) {
    console.error(`  ⚠️  ソースファイルが見つかりません: ${fullPath}`);
    return;
  }

  for (const config of outputConfigs) {
    const outputPath = path.join(outputDir, config.name);
    
    try {
      const sharpInstance = sharp(fullPath).resize(config.width, null, {
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
}

async function main() {
  // 出力ディレクトリを作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🖼️  画像変換を開始します...\n');

  // 各画像を処理
  await processImage(aiDriveImages.logo, outputs.logo);
  await processImage(aiDriveImages.display, outputs.display);
  await processImage(aiDriveImages.keyVisual, outputs.keyVisual);
  await processImage(aiDriveImages.threeView, outputs.threeView);
  await processImage(aiDriveImages.raidori, outputs.raidori);

  console.log('\n✅ 画像変換が完了しました！');
}

main().catch(console.error);
