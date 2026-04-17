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

### スタイリングルール

- Tailwind v4 ユーティリティクラスを使用する
- 色は必ずセマンティックトークン経由で指定する:
  - テキスト: text-fg-default, text-fg-muted, text-fg-placeholder
  - 背景: bg-page, bg-surface, bg-subtle, bg-hover
  - ボーダー: border-border-default, border-border-strong, border-border-muted
  - アクセント: bg-accent-primary, text-accent-primary-fg
- HEXの直書きは禁止
- 純白 #FFFFFF は使わない（最明色は bg-birch-25）
- フォント: font-heading（見出し）, font-body（本文）, font-mono（コード）
- 角丸: rounded-sm(4px), rounded-md(8px, メイン), rounded-lg(16px)
- シャドウ: shadow-sm, shadow-md, shadow-lg
- スペーシング: p-4(16px), p-6(24px), p-8(32px), gap-2(8px), gap-4(16px)

### デザイン原則

Calm UI: 穏やかで確かなインターフェース。
優先順位: Calm > Accessible > Resilient > Consistent > Simple

- 削除は常にdangerバリアント
- エラー状態には必ず「次に何をすればいいか」を提示する
- 色だけに依存しない（アイコン・テキストを併用）
- アイコンは Lucide React を使用する（SVGの直書き禁止）
