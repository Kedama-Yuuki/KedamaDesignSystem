# 引き継ぎプロンプト — Phase 2: デザイントークンの定義

> 次のセッションの冒頭にこの内容を貼り付けてください。

---

## プロジェクト概要

Kedama Design System を React + TypeScript でゼロから構築中。小規模（1〜3人チーム）で、社内向け業務システムと toB向け SaaS に適用する。

## ビジョン

「驚きと感動で、明日が宝物になる体験を創る。」

## 完了済みの成果物

以下のファイルがプロジェクトフォルダに存在する。作業前に必ず読むこと。

1. **`docs/design-principles.md`** — デザイン原則（5つ）
   - Calm（穏やか）、Accessible（誰もが使える）、Resilient（しなやか）、Consistent（一貫）、Simple（シンプル）
   - Amber Case Calm Technology 8原則、Calm Design 7特徴を内包
   - 優先順位: Accessible > Calm > Resilient > Consistent > Simple

2. **`docs/design-rules.md`** — デザインルール
   - トークン設計ルール: プリミティブ/セマンティック2層分離、命名規則、タイポグラフィのh1〜h6禁止
   - コンポーネント設計ルール: Auto Layout必須、固定高さの原則と例外、レイヤー命名規則、必須状態
   - AI協業ルール: 作業範囲の事前宣言、読み取り先行、プリミティブ→セマンティック→コンポーネントの順序

3. **`ROADMAP.md`** — 全体ロードマップ（Phase 1〜6）

## 今回のタスク: Phase 2 — デザイントークンの具体的な値の定義

`docs/design-rules.md` のルール1.1〜1.3に従って、以下のトークンの具体的な値を定義してほしい。

### 定義するもの

- **カラー**: プリミティブ（gray, blue, red, green, yellow, orangeなどのスケール）とセマンティック（fg, bg, border, accent, status）
- **タイポグラフィ**: プリミティブ（font-size, font-weight, line-height）とセマンティック（heading-2xl〜sm, body-lg〜sm, caption, overline）
- **スペーシング**: 4px基準のスケール
- **角丸（Border Radius）**: none, sm, md, lg, full
- **シャドウ**: sm, md, lg
- **ブレイクポイント**: sm, md, lg, xl

### 守るべきルール

- プリミティブとセマンティックの2層で管理する
- セマンティックの命名は `{カテゴリ}.{要素}.{状態/バリアント}` 形式
- タイポグラフィは用途ベース命名（h1〜h6禁止）
- 最初から全種を揃えず、実際に使うものから定義する
- カラーは彩度を抑えた Calm UI トーン（原則1）
- WCAG 2.2 AA のコントラスト比を満たすこと（原則2）

### 成果物の形式

- `src/tokens/` ディレクトリに TypeScript ファイルとして定義
- Figma Variables / Styles との対応がわかる構造にする

### 注意事項

- Figma MCP が接続されている場合、Figmaファイルの現状を確認してからトークンを定義すること（AI協業ルール 3.2: 読み取り先行）
- コンポーネントはまだ作らない。トークンの定義のみ（AI協業ルール 3.3: 順序の徹底）
