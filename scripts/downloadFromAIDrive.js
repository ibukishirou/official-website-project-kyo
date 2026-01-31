import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// AIドライブのパスをメモとして保存
const aiDriveImages = {
  logo: 'aidrive://project-kyo/ロゴ/logo_rgb_1.png',
  display: 'aidrive://project-kyo/イラスト/ディスプレイ_02.png',
  keyVisual: 'aidrive://project-kyo/イラスト/キービジュアル_00(通常).png',
  threeView: 'aidrive://project-kyo/イラスト/三面図_アビスモデル(AI学習防止).png',
  raidori: 'aidrive://project-kyo/イラスト/ライドリ.png'
};

const outputPath = path.join(__dirname, '../aidrive-paths.json');
fs.writeFileSync(outputPath, JSON.stringify(aiDriveImages, null, 2));
console.log('AIドライブパス情報を保存しました:', outputPath);
