# 引き継ぎプロンプト — Phase 3: プロジェクトセットアップ

> 次のセッションの冒頭にこの内容を貼り付けてください。

---

## プロジェクト概要

Kedama Design System を React + TypeScript でゼロから構築中。小規模（1〜3人チーム）で、社内向け業務システムと toB向け SaaS に適用する。

## ビジョン

「驚きと感動で、明日が宝物になる体験を創る。」

## 完了済みの成果物

以下のファイルがプロジェクトフォルダに存在する。作業前に必ず読むこと。

1. **`docs/design-principles.md`** — デザイン原則（5つ）
2. **`docs/design-rules.md`** — デザインルール（トークン設計・コンポーネント設計・AI協業）
3. **`ROADMAP.md`** — 全体ロードマップ（Phase 1〜6）
4. **`src/tokens/`** — デザイントークン定義（Phase 2 成果物）

### Phase 2 で定義したトークン

**ディレクトリ構造:**

```
src/tokens/
├── primitive/
│   ├── colors.ts       # gray, green, blue, red, yellow, orange
│   ├── typography.ts   # fontFamily, fontSize, fontWeight, lineHeight, letterSpacing
│   ├── spacing.ts      # 4px基準スケール（0〜96px）
│   ├── radius.ts       # none, sm, md, lg, full
│   ├── shadow.ts       # sm, md, lg
│   ├── breakpoints.ts  # sm(640), md(768), lg(1024), xl(1280)
│   └── index.ts
├── semantic/
│   ├── colors.ts       # fg, bg, border, accent, status
│   ├── typography.ts   # heading-2xl〜sm, body-lg〜sm, caption, overline
│   └── index.ts
└── index.ts            # パブリックAPI
```

**設計判断:**

- フォント: Noto Sans JP（+ フォールバック: system-ui）
- アクセントカラー: セージ/ティールグリーン（`green-600: #2D7556`）
- カラーパレット: Calm UI トーン（彩度控えめ）
- WCAG 2.2 AA: 全セマンティックカラーペアで検証済み（全PASS）
- ダークモード: Light テーマの値のみ定義。構造はダークモード追加を見据えた設計

## 今回のタスク: Phase 3 — プロジェクトセットアップ

ROADMAP.md の Phase 3 に従い、開発環境を構築する。

### やること

- パッケージマネージャ: pnpm 推奨（小規模monorepo向き）
- ビルドツール: Vite
- TypeScript 設定
- ESLint + Prettier 設定
- Storybook の導入（コンポーネントカタログ用）
- ディレクトリ構造の確認・調整
- `src/tokens/` が正しくインポートできることを確認

### パイプライン（確定済み）

```
Figma → Tokens Studio → tokens.json → GitHub Actions → Style Dictionary → variables.css + tokens.ts → monorepo内参照 → Tailwind v4 @theme → Storybook → Chromatic
```

Phase 3 では Style Dictionary の設定も含めて、トークンの TypeScript 定義から CSS 変数への変換パスを構築すること。

### 注意事項

- `src/tokens/` の既存ファイルは変更しない（内容の確認は可）
- コンポーネントはまだ作らない（Phase 4）
