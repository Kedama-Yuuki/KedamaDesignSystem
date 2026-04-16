# Phase 3 プロンプト — Kedama Design System 開発環境構築

以下をClaude Codeの新規セッションで使用してください。

---

## プロンプト

```
# Kedama Design System — Phase 3: 開発環境構築

## コンテキスト

Kedama Design Systemは社内業務システム・B2B SaaS向けのReact + TypeScriptデザインシステム。
Phase 2でデザイントークン（TypeScript定数）の定義が完了している。

- リポジトリ: KedamaDesignSystem/
- トークンファイル: src/tokens/ 以下（primitive/ と semantic/ の2層構造）
- Figma連携済み: lwAJuBLldLYwHdsy1MXeEe（88+35 variables / 10 text styles）
- カラーシステム: OKLCH基準、7色スケール × 11段階（25–900）、純白不使用（birch/25が最明色）
- タイポグラフィ: Shiftbrain harmonic series（基数8, ベース16px）
- フォント: DM Sans（見出し・UI英語）/ Noto Sans JP（日本語）/ Noto Sans Mono（コード）

### 設計哲学: Calm UI
優先順位: Calm > Accessible > Resilient > Consistent > Simple

## Phase 3 でやること

### 0. Git初期化 & Dropbox共存設定
- git init して既存のPhase 2成果物をinitial commit
- リモート: https://github.com/kedama-co/design-system（private、なければ gh repo create で作成）
- .dropboxignore を作成して node_modules と dist を除外（Dropbox同期 + Git管理が同じフォルダで共存するため）
- .gitignore にも node_modules, dist, .env 等を含める

### 1. プロジェクト初期化
- package.json（name: @kedama/design-system, type: module）
- TypeScript 5.x + tsconfig.json（strict, paths alias @/）
- ESLint + Prettier 設定

### 2. ビルドパイプライン
- Vite (library mode) でESM/CJS両対応ビルド
- CSS出力: Tailwind v4 の @theme ディレクティブでトークンをCSS Custom Properties化
  - 既存のTypeScript定数（src/tokens/）を唯一の真実として読み込む
  - `--color-primary-600: #315039;` のようなCSS変数を自動生成
- package.json の exports フィールド設定（トークン単体インポート対応）

### 3. Tailwind v4 統合
- CSS-first config（tailwind.config.ts ではなく @theme in CSS）
- トークンからCSS Custom Propertiesへの変換スクリプト or Viteプラグイン
- プリミティブ → セマンティック の2段階CSS変数（--primitive-*, --*）

### 4. Storybook 8
- Vite builder
- トークンのビジュアルカタログ（色パレット、タイポグラフィ、スペーシング）
- 日本語テキストサンプルを含むこと

### 5. Style Dictionary / Tokens Studio連携（任意）
- Figma Variables → tokens.json → TypeScript/CSS の双方向パイプライン
- 既にFigmaに88+35のVariableと10のText Stylesが定義済み

### 6. テスト
- Vitest でトークンの型テスト・値テスト
- WCAG コントラスト比の自動検証テスト

## 環境
- プロジェクトルート: /Users/y.higashimori/Library/CloudStorage/Dropbox/100_Claude/Projects/active/KedamaDesignSystem
- Dropbox内のため .dropboxignore による同期除外が必須（node_modules, dist）

## 制約
- Node.js 20+
- pnpm 推奨（npm可）
- React 19
- Tailwind CSS v4（v3ではない）
- ESM first
- src/tokens/ 内の既存ファイルは変更しないこと（Phase 2の成果物）

## 既存ファイル構造
src/
  tokens/
    index.ts              ← パブリックAPI（全トークンre-export）
    primitive/
      index.ts
      colors.ts           ← 7色 × 11段階（25-900）
      typography.ts        ← harmonic series scale
      spacing.ts           ← 実値ベース（0-96）
      radius.ts
      shadow.ts
      breakpoints.ts       ← breakpoints + contentWidth + containerPadding
      zIndex.ts
      motion.ts            ← duration（reduced/fast/normal/slow）+ easing
      borderWidth.ts
      focusRing.ts
      opacity.ts           ← opacity + backdropBlur
    semantic/
      colors.ts            ← fg/bg/border/accent/status（hover/selected/scrim/active/solid/fg含む）
      typography.ts        ← heading2xl〜overline + TypographyStyle型
docs/
  token-reference.html    ← ビジュアルリファレンス

まずプロジェクト構造と依存関係の設計方針を提示してから、ステップバイステップで構築してください。
```

---

## 補足

- Phase 2のトークンファイルはすべて完成済み。Phase 3ではこれらを「読み取り専用の入力」として扱う
- Figma MCP（lwAJuBLldLYwHdsy1MXeEe）が接続されていれば、Variables同期の確認も可能
- Phase 4（コンポーネント実装）は Phase 3 完了後に別途開始予定
