# デザインシステム トークン管理パイプライン

## 概要

Kedamaで開発するWebシステム・アプリで利用するデザインシステムのトークン管理パイプライン。
Figmaをsingle source of truthとし、コードへの反映を自動化する。

## パイプライン構成

```
Figma
  └─ Tokens Studio (Free Starter + Git Sync)
       └─ tokens.json → GitHub push
            └─ GitHub Actions (paths: tokens/**)
                 └─ Style Dictionary build
                      ├─ variables.css  (CSS Custom Properties)
                      └─ tokens.ts      (TypeScript 定数)
                           └─ コミットして push
                                └─ Monorepo 内 ui-components が参照
                                     └─ Tailwind v4 @theme で CSS 変数を取り込み
                                          └─ Storybook
                                               └─ Chromatic (Visual Regression)
```

## 各レイヤーの役割

### Figma + Tokens Studio

デザイナーがFigma上でカラー・タイポグラフィ・スペーシングなどのトークンを管理する。Tokens Studio（Free Starter）のGit Sync機能でtokens.jsonをGitHubリポジトリへ自動pushする。

Free Starterプランは1リポジトリ・1ブランチの制限がある。将来複数プロジェクトで共有する場合はProプランへの移行、またはFigma Variables REST APIへの切り替えを検討する。

### GitHub Actions

`tokens/**` パスへの変更をトリガーにStyle Dictionaryのビルドを実行する。生成されたvariables.cssとtokens.tsをコミット・pushすることで、コード側への反映を完全自動化する。

### Style Dictionary

tokens.jsonを入力として以下の2ファイルを生成する。

- **variables.css** — CSS Custom Propertiesとしてトークンを定義
- **tokens.ts** — TypeScript定数としてトークンを定義（ロジック内で利用する場合向け）

Tailwind v4はCSS-firstの設計であるため、tailwind.config.jsは生成しない。

### Tailwind v4

`@theme` ディレクティブでvariables.cssのCSS変数を取り込む。config.jsを介さずCSS変数ベースで統合する。

### Storybook + Chromatic

UIコンポーネントライブラリ（ui-components）がトークンを参照し、Storybookでカタログ化する。ChromaticによるVisual Regressionテストで、トークン変更がUIに与える影響を検知する。

## 配布方式

npmパッケージとしての公開は行わず、monorepo内参照とする。
