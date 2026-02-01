# デプロイ設定ガイド

## GitHub Pagesでのデプロイ（デフォルト）

現在の設定では、以下のURLでアクセスできます：
- ホームURL: `https://ibukishirou.github.io/official-website-project-kyo/`

特別な設定は不要です。mainブランチへのプッシュで自動デプロイされます。

## カスタムドメイン設定後のデプロイ

カスタムドメイン（例: `example.com`）を設定する場合：

### 1. GitHub Pagesでカスタムドメインを設定
1. リポジトリの Settings → Pages
2. Custom domain に独自ドメインを入力
3. `CNAME` ファイルが自動生成される

### 2. ビルド設定を変更
カスタムドメイン用にビルドする場合：

```bash
# ビルド時に環境変数を設定
VITE_BASE_PATH=/ npm run build
```

または `.env.production` ファイルを編集：
```
VITE_BASE_PATH=/
```

### 3. 404.htmlの更新
カスタムドメイン設定後は、`public/404.html` の `basePath` を `/` に変更：
```javascript
var basePath = '/';  // カスタムドメイン用
```

### 注意事項
- カスタムドメイン設定前は必ず `/official-website-project-kyo/` を使用
- 設定を変更したら必ずビルドとデプロイを再実行
