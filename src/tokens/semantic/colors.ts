/**
 * Kedama Design System — セマンティックカラートークン
 *
 * 用途を意味する。値はプリミティブを参照する。
 * コンポーネントは必ずセマンティックトークン経由で色を参照する。
 *
 * 命名規則: {カテゴリ}.{要素}.{状態/バリアント}
 *
 * ダークモード対応:
 *   このファイルは Light テーマの値を定義する。
 *   将来ダークモードを追加する際は、同じキーで別の値を持つ
 *   dark/colors.ts を作り、テーマ切替で参照先を変更する。
 *
 * Figma Variables との対応:
 *   Collection: "Semantics" > Variable Alias でプリミティブを参照
 *   例: color/fg/default → birch/900
 */

import { birch, primary, amber, warning, danger, success, info } from '../primitive/colors';

// ─── Foreground（テキスト・アイコン） ────────────────────
export const fg = {
  /** メインテキスト */
  default: birch[900],
  /** 補助テキスト・セカンダリ情報 */
  muted: birch[500],
  /** プレースホルダー（WCAG 3:1 以上を確保） */
  placeholder: birch[400],
  /** 無効状態のテキスト */
  disabled: birch[300],
  /** 反転背景上のテキスト（濃色背景上の暖白文字） */
  inverse: birch[25],
  /** リンクテキスト */
  link: primary[600],
  /** ホバー時のリンクテキスト */
  'link-hover': primary[700],
} as const;

// ─── Background（背景） ─────────────────────────────────
export const bg = {
  /** ページ全体の背景色 */
  page: birch[50],
  /** カード・セクションの背景（暖白） */
  surface: birch[25],
  /** 浮き上がった要素の背景（モーダル等） */
  'surface-raised': birch[25],
  /** subtle な区別を付けたい領域（テーブルの偶数行など） */
  subtle: birch[100],
  /** インタラクティブ要素のホバー背景（リスト行、メニュー項目、ドロップダウン） */
  hover: birch[100],
  /** 選択中の要素の背景（リスト・メニューの選択項目）。プライマリの極淡ティント */
  selected: primary[25],
  /** モーダル・ダイアログのスクリム（背景オーバーレイ）。
   *  birch/900 を 50% アルファにした暖色ダーク。
   *  backdrop-filter: blur(8px) との併用を推奨（opacity.scrim / backdropBlur 参照）。 */
  scrim: 'rgba(4, 3, 2, 0.5)',
  /** 反転背景（ダーク） */
  inverse: birch[900],
  /** 無効状態の背景 */
  disabled: birch[100],
} as const;

// ─── Border（境界線） ───────────────────────────────────
export const border = {
  /** 標準のボーダー */
  default: birch[300],
  /** 強調ボーダー（WCAG 非テキストコントラスト 3:1 確保） */
  strong: birch[400],
  /** 控えめなボーダー（ディバイダー） */
  muted: birch[200],
  /** アクティブ・選択状態のボーダー（タブ下線、セグメント、選択カードの枠） */
  active: primary[600],
  /** フォーカスリング */
  focus: primary[400],
  /** エラー状態のボーダー */
  error: danger[500],
  /** 無効状態のボーダー */
  disabled: birch[200],
} as const;

// ─── Accent（アクション・ブランド） ─────────────────────
export const accent = {
  /** プライマリアクション（ボタン背景など） */
  primary: primary[600],
  /** プライマリ ホバー */
  'primary-hover': primary[700],
  /** プライマリ アクティブ / プレス */
  'primary-active': primary[800],
  /** プライマリの subtle 背景（バッジ、選択状態の行など） */
  'primary-subtle': primary[50],
  /** プライマリ上のテキスト */
  'primary-fg': birch[25],
  /** ターシャリアクション（装飾アクセント） */
  tertiary: amber[600],
  /** ターシャリ ホバー */
  'tertiary-hover': amber[700],
  /** ターシャリの subtle 背景 */
  'tertiary-subtle': amber[50],
  /** ターシャリ上のテキスト */
  'tertiary-fg': birch[25],
} as const;

// ─── Status（状態表示） ─────────────────────────────────
// 色だけに依存しない情報伝達のため、アイコン・テキストとの併用が必須（原則2）。
//
// 命名:
//   {status}        — テキスト・アイコン色（subtle 背景上で使う）
//   {status}-bg     — subtle 背景（アラート、バッジの背景）
//   {status}-border — subtle 背景に合わせる境界線
//   {status}-solid  — ベタ塗りバッジ・通知の背景（強い視認性）
//   {status}-fg     — solid 背景上のテキスト・アイコン色
export const status = {
  /** 成功 — テキスト・アイコン */
  success: success[700],
  /** 成功 — subtle 背景 */
  'success-bg': success[50],
  /** 成功 — ボーダー */
  'success-border': success[200],
  /** 成功 — ベタ塗り背景（バッジ、トースト） */
  'success-solid': success[600],
  /** 成功 — solid 背景上のテキスト */
  'success-fg': birch[25],

  /** 警告 — テキスト・アイコン */
  warning: warning[700],
  /** 警告 — subtle 背景 */
  'warning-bg': warning[50],
  /** 警告 — ボーダー */
  'warning-border': warning[200],
  /** 警告 — ベタ塗り背景（バッジ、トースト） */
  'warning-solid': warning[600],
  /** 警告 — solid 背景上のテキスト */
  'warning-fg': birch[25],

  /** エラー — テキスト・アイコン */
  danger: danger[700],
  /** エラー — subtle 背景 */
  'danger-bg': danger[50],
  /** エラー — ボーダー */
  'danger-border': danger[200],
  /** エラー — ベタ塗り背景（バッジ、トースト） */
  'danger-solid': danger[600],
  /** エラー — solid 背景上のテキスト */
  'danger-fg': birch[25],

  /** 情報 — テキスト・アイコン */
  info: info[700],
  /** 情報 — subtle 背景 */
  'info-bg': info[50],
  /** 情報 — ボーダー */
  'info-border': info[200],
  /** 情報 — ベタ塗り背景（バッジ、トースト） */
  'info-solid': info[600],
  /** 情報 — solid 背景上のテキスト */
  'info-fg': birch[25],
} as const;

/**
 * セマンティックカラー全体をエクスポート。
 * フラットなドット記法で参照できる:
 *   semanticColors.fg.default
 *   semanticColors.accent.primary
 */
export const semanticColors = {
  fg,
  bg,
  border,
  accent,
  status,
} as const;
