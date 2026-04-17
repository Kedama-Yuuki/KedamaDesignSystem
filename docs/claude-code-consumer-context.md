# Kedama Design System — Claude Code 消費側コンテキスト

デザインシステムを利用するプロジェクトの CLAUDE.md に追記するテンプレート。

---

以下をそのままコピーして CLAUDE.md に貼り付けてください:

---

## デザインシステム

このプロジェクトは @kedama/design-system を使用する。

### セットアップ

CSSをアプリのエントリーポイントで読み込む:

```tsx
import '@kedama/design-system/styles';
```

### コンポーネントのインポート

```tsx
import { Button, Badge, TextField, Card, Modal } from '@kedama/design-system';
import { Search, Plus, Trash2, Check, AlertTriangle } from '@kedama/design-system';
```

### 利用可能なコンポーネント

**Button:**
- variant: "primary" | "secondary" | "ghost" | "danger"
- size: "sm" | "md" | "lg"
- loading: boolean（スピナー表示、操作無効化）
- iconLeft / iconRight: ReactNode
- 1画面のprimaryボタンは原則1つ（Calm UI）

**Badge:**
- status: "default" | "success" | "warning" | "danger" | "info"
- appearance: "subtle" | "solid"
- icon: ReactNode（ステータスドット用）

**TextField:**
- label: string（ラベル。inputと自動紐付け）
- helperText: string（入力ヒント）
- error: string（指定するとエラー状態。aria-invalid自動付与）
- leadingIcon / trailingIcon: ReactNode
- disabled: boolean

**Card:**
- Card.Header / Card.Body / Card.Footer のコンパウンド構成
- noPadding: boolean（テーブルを全幅で入れるとき）

**Modal:**
- open: boolean, onClose: () => void
- title: string, description: string
- size: "sm" | "md" | "lg"
- Modal.Body / Modal.Footer のコンパウンド構成
- HTML dialog要素ベース。フォーカストラップとEscape閉じはネイティブ

**Icon（Lucide React）:**
- Search, X, Plus, Pencil, Trash2, Check, AlertTriangle, Info, Settings, User, Mail, Bell, Calendar, Loader2, ChevronDown, ArrowRight, ArrowLeft, Eye, EyeOff, Lock, Menu, MoreHorizontal, Filter, Download, Upload, Copy, ExternalLink, FileText, Folder, Users, CircleHelp, RotateCcw, Unlock, MoreVertical, Grip, ChevronUp, ChevronLeft, ChevronRight, AlertCircle
- size: number（デフォルト24）, className で色指定

### カラーパレット（Tailwindクラス名）

7色パレット。各パレットは11段階（25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900）。
純白 #FFFFFF は不使用。最明色は birch-25(#F8F7F4)、最暗色は birch-900(#040302)。

- **primary**（苔色 — ブランド）: bg-primary-{step}, text-primary-{step}。メインは primary-600(#315039)
- **birch**（白樺 — 暖色ニュートラル）: bg-birch-{step}, text-birch-{step}。白の代替=birch-25、黒の代替=birch-900
- **amber**（琥珀 — 装飾アクセント）: bg-amber-{step}, text-amber-{step}
- **warning**（オレンジ — 警告）: bg-warning-{step}, text-warning-{step}
- **danger**（赤 — エラー）: bg-danger-{step}, text-danger-{step}
- **success**（黄緑 — 成功）: bg-success-{step}, text-success-{step}
- **info**（青 — 情報）: bg-info-{step}, text-info-{step}

### スタイリングルール

- Tailwind v4 ユーティリティクラスを使用する
- 色はセマンティックトークン経由を優先する:
  - テキスト: text-fg-default, text-fg-muted, text-fg-placeholder, text-fg-disabled, text-fg-inverse, text-fg-link
  - 背景: bg-page, bg-surface, bg-surface-raised, bg-subtle, bg-hover, bg-selected, bg-inverse
  - ボーダー: border-border-default, border-border-strong, border-border-muted, border-border-active, border-border-error
  - アクセント: bg-accent-primary, bg-accent-primary-hover, text-accent-primary-fg
  - ステータス: text-[var(--color-status-success)], bg-[var(--color-status-success-bg)]（success/warning/danger/info の各4種: 無印, -bg, -border, -solid, -fg）
- プリミティブパレット（bg-primary-600, text-birch-500）はセマンティックで表現できない場合のみ使用する
- HEXの直書きは禁止
- フォント: font-heading（見出し）, font-body（本文）, font-mono（コード）
- 角丸: rounded-sm(4px), rounded-md(8px, メイン), rounded-lg(16px), rounded-full(9999px)
- シャドウ: shadow-sm(カード静止), shadow-md(ドロップダウン), shadow-lg(モーダル)
- スペーシング: p-1(4px), p-2(8px), p-3(12px), p-4(16px), p-6(24px), p-8(32px), p-10(40px), p-12(48px), p-16(64px)

### デザイン原則

Calm UI: 穏やかで確かなインターフェース。
優先順位: Calm > Accessible > Resilient > Consistent > Simple

- 削除は常にdangerバリアント
- エラー状態には必ず「次に何をすればいいか」を提示する
- 色だけに依存しない（アイコン・テキストを併用）
- アイコンは Lucide React を使用する（SVGの直書き禁止）
