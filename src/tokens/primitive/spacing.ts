/**
 * Kedama Design System — プリミティブ スペーシングトークン
 *
 * 4px 基準のスケール（2px 始まり）。
 * Auto Layout の padding / gap に対応。
 *
 * 命名: 実値ベース（space-{px値}）
 *   トークン名から値が即座にわかる。
 *   例: spacing[16] → 16px
 *
 * 値: 4の倍数 + 最小の 2px（微調整用）
 *
 * Figma Variables との対応:
 *   Collection: "Primitives" > Group: "spacing"
 *   例: spacing/2, spacing/16, spacing/64
 */

export const spacing = {
  /** 0px — スペーシングなし */
  0: '0px',
  /** 2px — 微調整用（アイコンと文字の間など） */
  2: '2px',
  /** 4px — 最小の余白 */
  4: '4px',
  /** 8px — コンパクトな要素間 */
  8: '8px',
  /** 12px — フォーム要素内、アイコン周り */
  12: '12px',
  /** 16px — 標準の要素間 */
  16: '16px',
  /** 24px — セクション内の区切り */
  24: '24px',
  /** 32px — カード内余白 */
  32: '32px',
  /** 40px — セクション間 */
  40: '40px',
  /** 48px — 大きなセクション間 */
  48: '48px',
  /** 64px — ページセクション間 */
  64: '64px',
  /** 80px — ヒーロー領域 */
  80: '80px',
  /** 96px — 最大スペーシング */
  96: '96px',
} as const;
