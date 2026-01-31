import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aiDrivePath = '/mnt/aidrive/project-kyo';
const outputDir = path.join(__dirname, '../public/images');

// 画像マッピング
const imageMap = {
  'logo': {
    source: `${aiDrivePath}/ロゴ/logo_rgb_1.png`,
    outputs: [
      { name: 'logo.webp', width: 800 },
      { name: 'favicon-32x32.png', width: 32, format: 'png' },
      { name: 'favicon-16x16.png', width: 16, format: 'png' },
      { name: 'apple-touch-icon.png', width: 180, format: 'png' }
    ]
  },
  'display': {
    source: `${aiDrivePath}/イラスト/ディスプレイ_02.png`,
    outputs: [
      { name: 'display.webp', width: 1920 },
      { name: 'display-mobile.webp', width: 768 }
    ]
  },
  'key-visual': {
    source: `${aiDrivePath}/イラスト/キービジュアル_00(通常).png`,
    outputs: [
      { name: 'key-visual.webp', width: 1200 },
      { name: 'key-visual-mobile.webp', width: 600 }
    ]
  },
  'three-view': {
    source: `${aiDrivePath}/イラスト/三面図_アビスモデル(AI学習防止).png`,
    outputs: [
      { name: 'three-view.webp', width: 1600 }
    ]
  },
  'raidori': {
    source: `${aiDrivePath}/イラスト/ライドリ.png`,
    outputs: [
      { name: 'raidori.webp', width: 800 }
    ]
  }
};

async function convertImages() {
  // 出力ディレクトリを作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('画像変換を開始します...\n');

  for (const [key, config] of Object.entries(imageMap)) {
    console.log(`処理中: ${key}`);
    
    try {
      // ソースファイルの存在確認
      if (!fs.existsSync(config.source)) {
        console.error(`  ⚠️  ソースファイルが見つかりません: ${config.source}`);
        continue;
      }

      // 各出力形式に変換
      for (const output of config.outputs) {
        const outputPath = path.join(outputDir, output.name);
        const format = output.format || 'webp';
        
        await sharp(config.source)
          .resize(output.width, null, {
            fit: 'inside',
            withoutEnlargement: true
          })
          [format]({ quality: 90 })
          .toFile(outputPath);
        
        console.log(`  ✓ ${output.name}`);
      }
    } catch (error) {
      console.error(`  ✗ エラー: ${error.message}`);
    }
  }

  console.log('\n画像変換が完了しました！');
}

convertImages().catch(console.error);
