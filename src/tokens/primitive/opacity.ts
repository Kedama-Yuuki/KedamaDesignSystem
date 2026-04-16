/**
 * Kedama Design System — プリミティブ 不透明度トークン
 *
 * disabled 状態はセマンティックカラーで吸収済みのため、
 * ここでは主にオーバーレイ（scrim）用途を定義する。
 *
 * Calm UI の方針:
 * - モーダル背景は真っ暗にしない。背後をうっすら感じさせる
 * - backdrop-filter: blur() との併用を推奨
 *   → ノイズを消しつつ空間の広がりを維持
 */

export const opacity = {
  /** disabled 要素の不透明度（テキスト・アイコン等） */
  disabled: 0.4,
  /** scrim（モーダル・ダイアログの背景オーバーレイ）*/
  scrim: 0.5,
} as const;

/**
 * スクリム（オーバーレイ背景）のバックドロップブラー。
 * opacity.scrim と組み合わせて使用する。
 *
 * CSS イメージ:
 *   background: oklch(from birch-900 l c h / ${opacity.scrim});
 *   backdrop-filter: blur(${backdropBlur});
 */
export const backdropBlur = '8px' as const;
