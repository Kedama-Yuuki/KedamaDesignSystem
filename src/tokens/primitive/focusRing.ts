/**
 * Kedama Design System — フォーカスリング トークン
 *
 * アクセシビリティの要。キーボード操作時に要素の位置を明示する。
 *
 * Calm UI の方針:
 * - フォーカスリング自体にも角丸を適用（要素の border-radius に追従）
 * - offset で要素との隙間を確保し、リングが要素に密着しない柔らかさ
 * - 色は primary/400 を使用（セマンティック border.focus で定義済み）
 *
 * コンポーネント実装時の CSS イメージ:
 *   outline: ${focusRing.width} solid ${border.focus};
 *   outline-offset: ${focusRing.offset};
 *   border-radius: inherit; // 要素の角丸に追従
 */

export const focusRing = {
  /** フォーカスリングの太さ */
  width: '2px',
  /** 要素との隙間（リングが要素に密着しない） */
  offset: '2px',
} as const;
