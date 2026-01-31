# 画像ファイルについて

## AIドライブの画像一覧

以下の画像がAIドライブに保存されています：

### ロゴ
- **パス**: `aidrive://project-kyo/ロゴ/logo_rgb_1.png`
- **用途**: サイトロゴ、ファビコン
- **配色**: ミントグリーン〜マゼンタピンクのグラデーション

### イラスト
1. **ディスプレイ_02.png**
   - **パス**: `aidrive://project-kyo/イラスト/ディスプレイ_02.png`
   - **用途**: HOMEページのファーストビュー
   
2. **キービジュアル_00(通常).png**
   - **パス**: `aidrive://project-kyo/イラスト/キービジュアル_00(通常).png`
   - **用途**: プロフィールページの立ち絵
   
3. **三面図_アビスモデル(AI学習防止).png**
   - **パス**: `aidrive://project-kyo/イラスト/三面図_アビスモデル(AI学習防止).png`
   - **用途**: プロフィールページの三面図
   
4. **ライドリ.png**
   - **パス**: `aidrive://project-kyo/イラスト/ライドリ.png`
   - **用途**: プロフィールページのライドリバナー

## 画像配置手順

### ステップ1: AIドライブから画像をダウンロード

AIドライブのWeb UIから画像をダウンロードしてください。

### ステップ2: WebP形式に変換

#### オンラインツールを使用（推奨）

1. **Squoosh** (https://squoosh.app/)
   - ブラウザで動作するGoogle製の画像変換ツール
   - 画質を確認しながら変換可能
   - 推奨設定: Quality 90

2. **Convertio** (https://convertio.co/ja/png-webp/)
   - オンラインで簡単に変換可能

#### コマンドラインツールを使用

##### ImageMagick（インストール済みの場合）

```bash
# 単一ファイル変換
magick convert input.png -quality 90 output.webp

# 複数ファイル一括変換
for file in *.png; do
  magick convert "$file" -quality 90 "${file%.png}.webp"
done
```

##### cwebp（Google公式ツール）

```bash
# インストール（Mac）
brew install webp

# インストール（Ubuntu/Debian）
sudo apt-get install webp

# 変換
cwebp -q 90 input.png -o output.webp
```

### ステップ3: リサイズして配置

以下のサイズで画像を準備してください：

#### ロゴ関連
```bash
# ロゴ本体
logo_rgb_1.png → logo.webp (800px幅)

# ファビコン
logo_rgb_1.png → favicon-32x32.png (32x32px)
logo_rgb_1.png → favicon-16x16.png (16x16px)
logo_rgb_1.png → apple-touch-icon.png (180x180px)
```

#### ファーストビュー
```bash
ディスプレイ_02.png → display.webp (1920px幅)
ディスプレイ_02.png → display-mobile.webp (768px幅)
```

#### プロフィール画像
```bash
キービジュアル_00(通常).png → key-visual.webp (1200px幅)
キービジュアル_00(通常).png → key-visual-mobile.webp (600px幅)

三面図_アビスモデル(AI学習防止).png → three-view.webp (1600px幅)

ライドリ.png → raidori.webp (800px幅)
```

### ステップ4: ファイルを配置

変換・リサイズした画像を `public/images/` ディレクトリに配置：

```
public/images/
├── logo.webp
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
├── display.webp
├── display-mobile.webp
├── key-visual.webp
├── key-visual-mobile.webp
├── three-view.webp
└── raidori.webp
```

### ステップ5: コードを更新

画像が配置できたら、以下のファイルのプレースホルダーコードを実際の画像に置き換えてください：

#### src/pages/Home.jsx
```jsx
// 現在（プレースホルダー）
<div className={styles.heroPlaceholder}>
  <p className={styles.heroText}>響-Kyo-</p>
</div>

// 画像配置後
<img 
  src="/official-website-project-kyo/images/display.webp" 
  alt="響-Kyo-" 
  className={styles.heroImage}
/>
```

#### src/pages/Profile.jsx
```jsx
// 立ち絵
<img 
  src="/official-website-project-kyo/images/key-visual.webp" 
  alt="響-Kyo- 立ち絵"
/>

// 三面図
<img 
  src="/official-website-project-kyo/images/three-view.webp" 
  alt="響-Kyo- 三面図"
/>

// ライドリ
<img 
  src="/official-website-project-kyo/images/raidori.webp" 
  alt="ライドリ - ファンクラブサービス"
/>
```

### ステップ6: コミット＆プッシュ

```bash
# 画像ファイルを追加
git add public/images/

# コードの変更も追加（プレースホルダーを画像に置き換えた場合）
git add src/pages/

# コミット
git commit -m "feat: Add website images and update image placeholders"

# プッシュ
git push
```

## 画像最適化のヒント

### WebP変換時の推奨設定

- **Quality**: 90（高品質を維持しつつファイルサイズを削減）
- **Method**: 4-6（圧縮効率と速度のバランス）
- **Alpha Quality**: 100（透過部分の品質を保持）

### レスポンシブ対応

デスクトップとモバイルで異なる画像を使用することで、モバイルでの読み込み速度を改善できます：

```jsx
<picture>
  <source 
    media="(max-width: 768px)" 
    srcSet="/official-website-project-kyo/images/display-mobile.webp" 
  />
  <img 
    src="/official-website-project-kyo/images/display.webp" 
    alt="響-Kyo-" 
  />
</picture>
```

### 遅延読み込み

ファーストビュー以外の画像には `loading="lazy"` を追加：

```jsx
<img 
  src="/official-website-project-kyo/images/key-visual.webp" 
  alt="響-Kyo-" 
  loading="lazy"
/>
```

## トラブルシューティング

### 画像が表示されない

1. **パスの確認**: `/official-website-project-kyo/images/` で始まっているか
2. **ファイル名の確認**: 大文字小文字が正確に一致しているか
3. **ファイル形式**: WebP形式に正しく変換されているか
4. **ビルド確認**: `npm run build` 後、`dist/images/` に画像がコピーされているか

### 画像が歪む

- アスペクト比を維持するCSSが適用されているか確認
- 元画像の解像度が適切か確認

### 読み込みが遅い

- ファイルサイズが大きすぎないか確認（1MBを超える場合は要最適化）
- WebPのQuality設定を調整（80-90が目安）
- レスポンシブ画像を活用してモバイル向けサイズを削減
