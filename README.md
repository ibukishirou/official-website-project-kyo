# 響-Kyo- 公式サイト

Vライバー「響-Kyo-」の公式Webサイト

## 技術スタック

- **フロントエンド**: React 18
- **ビルドツール**: Vite
- **ルーティング**: React Router (Hash Router)
- **スタイリング**: CSS Modules
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 開発環境のセットアップ

### 必要な環境

- Node.js 20.x 以上
- npm 10.x 以上

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ローカルサーバーが `http://localhost:5173` で起動します。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### プレビュー

ビルドしたファイルをローカルでプレビュー：

```bash
npm run preview
```

## デプロイ

mainブランチにpushすると、GitHub Actionsが自動的にビルドしてGitHub Pagesにデプロイします。

## プロジェクト構造

```
src/
├── components/     # 共通コンポーネント
│   ├── Layout.jsx
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── Breadcrumb.jsx
│   └── FloatingIcons.jsx
├── pages/          # ページコンポーネント
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Events.jsx
│   ├── Guidelines.jsx
│   ├── QA.jsx
│   ├── Commission.jsx
│   └── Contact.jsx
├── data/           # JSONデータファイル
│   ├── songs.json
│   ├── links.json
│   ├── events.json
│   ├── qa.json
│   ├── credits.json
│   └── commission.json
├── styles/         # グローバルスタイル
│   └── global.css
└── App.jsx         # アプリケーションルート
```

## データ更新方法

サイトのデータは `src/data/` ディレクトリ内のJSONファイルで管理されています。

### 更新手順

1. 該当するJSONファイルを編集
2. 変更をコミット
3. mainブランチにpush
4. GitHub Actionsが自動的にデプロイ

### 更新可能なデータ

- `songs.json`: 歌ってみた動画のリスト
- `links.json`: 外部リンク集
- `events.json`: イベント/案件実績
- `qa.json`: Q&A
- `credits.json`: クレジット情報
- `commission.json`: コミッションメニュー

## 画像の配置

画像は `public/images/` ディレクトリに配置してください。

### 必要な画像

- `logo.webp`: ロゴ画像
- `favicon-32x32.png`: ファビコン (32x32)
- `favicon-16x16.png`: ファビコン (16x16)
- `apple-touch-icon.png`: Apple Touch Icon (180x180)
- `display.webp`: HOMEページのファーストビュー画像
- `display-mobile.webp`: モバイル用ファーストビュー画像
- `key-visual.webp`: プロフィールの立ち絵
- `key-visual-mobile.webp`: モバイル用立ち絵
- `three-view.webp`: 三面図
- `raidori.webp`: ライドリバナー

## ライセンス

© Project Kyo All Rights Reserved.

## サポート

問い合わせ: wip@wip.wip
