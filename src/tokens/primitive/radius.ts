/**
 * Kedama Design System — プリミティブ 角丸トークン
 *
 * Figma Variables との対応:
 *   Collection: "Primitives" > Group: "Radius"
 */

export const radius = {
  /** 0px — 角丸なし（表の境界線など限定的な用途のみ） */
  none: '0px',
  /** 4px — ボタン、入力フォーム。清潔感のある硬さ */
  sm: '4px',
  /** 8px — カード、モーダル、ドロップダウン。Calm UI のメインの角丸 */
  md: '8px',
  /** 16px — セクション全体、大きなバナー、プロモーションカード */
  lg: '16px',
  /** 9999px — ピル型ボタン、タグ、アバター */
  full: '9999px',
} as const;
