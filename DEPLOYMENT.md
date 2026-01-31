# デプロイ手順

## GitHub Pagesの設定

### 1. リポジトリ設定

GitHubのリポジトリページで以下の設定を行ってください：

1. **Settings** > **Pages** に移動
2. **Source** を `GitHub Actions` に設定

### 2. GitHub Actionsワークフローの作成

リポジトリに以下のファイルを作成してください：

**ファイルパス**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. ワークフローの手動作成方法

**方法1: GitHub UIから作成**

1. リポジトリの `Actions` タブに移動
2. `set up a workflow yourself` をクリック
3. 上記のYAMLコードを貼り付け
4. ファイル名を `deploy.yml` に変更
5. `Commit changes` をクリック

**方法2: ローカルで作成してプッシュ**

```bash
# ディレクトリを作成
mkdir -p .github/workflows

# ファイルを作成（上記YAMLをコピー）
cat > .github/workflows/deploy.yml << 'EOF'
# (上記YAMLコードを貼り付け)
EOF

# コミットしてプッシュ
git add .github/workflows/deploy.yml
git commit -m "ci: Add GitHub Actions workflow for deployment"
git push
```

### 4. デプロイの確認

1. プッシュ後、`Actions` タブでワークフローの実行を確認
2. ビルドとデプロイが成功したら、以下のURLでサイトにアクセス可能：
   ```
   https://ibukishirou.github.io/official-website-project-kyo/
   ```

## 画像の配置

現在、画像はプレースホルダーになっています。実際の画像を配置してください：

### 必要な画像ファイル

`public/images/` ディレクトリに以下の画像を配置：

1. **logo.webp** - ロゴ画像（800px幅）
2. **favicon-32x32.png** - ファビコン（32x32px）
3. **favicon-16x16.png** - ファビコン（16x16px）
4. **apple-touch-icon.png** - Apple Touch Icon（180x180px）
5. **display.webp** - HOMEファーストビュー（1920px幅）
6. **display-mobile.webp** - HOMEファーストビュー モバイル（768px幅）
7. **key-visual.webp** - プロフィール立ち絵（1200px幅）
8. **key-visual-mobile.webp** - プロフィール立ち絵 モバイル（600px幅）
9. **three-view.webp** - 三面図（1600px幅）
10. **raidori.webp** - ライドリバナー（800px幅）

### 画像変換方法

AIドライブの画像をWebP形式に変換する場合：

```bash
# sharpがインストールされていることを確認
npm install sharp

# 変換スクリプトを実行（画像のパスを適宜修正してください）
node scripts/convertImages.js
```

または、オンラインツールを使用：
- https://squoosh.app/
- https://convertio.co/ja/png-webp/

### 画像配置後

```bash
git add public/images/
git commit -m "feat: Add website images"
git push
```

## データ更新方法

### JSONファイルの編集

サイトのコンテンツは `src/data/` ディレクトリのJSONファイルで管理されています：

- **songs.json** - 歌ってみた動画
- **links.json** - リンク集
- **events.json** - イベント/案件実績
- **qa.json** - Q&A
- **credits.json** - クレジット情報
- **commission.json** - コミッションメニュー

### 更新手順

1. 該当するJSONファイルを編集
2. コミットしてプッシュ
3. GitHub Actionsが自動的にビルド・デプロイ

```bash
git add src/data/
git commit -m "update: データ更新の説明"
git push
```

## トラブルシューティング

### ビルドエラーが発生する場合

```bash
# ローカルでビルドテスト
npm run build

# 問題を修正後
git add .
git commit -m "fix: ビルドエラーの修正"
git push
```

### ページが404になる場合

- GitHub PagesのSourceが`GitHub Actions`に設定されているか確認
- ワークフローが正常に実行されているか確認
- `vite.config.js`の`base`設定が正しいか確認

### 画像が表示されない場合

- 画像ファイルが`public/images/`に配置されているか確認
- ファイル名が正しいか確認（大文字小文字の違いに注意）
- ビルド後の`dist/images/`に画像がコピーされているか確認

## サポート

問題が解決しない場合は、以下を確認してください：

1. GitHub Actionsのログを確認
2. ブラウザの開発者ツールでエラーを確認
3. README.mdの開発環境セットアップ手順を再確認
