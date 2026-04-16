/**
 * Kedama Design System — プリミティブ ボーダー幅トークン
 *
 * Calm UI ではボーダーの「硬さ」を色（border color）で
 * 背景になじませて抜くのがコツ。幅は最小限に抑える。
 *
 * thin (1px) が基本。thick (2px) はフォーカスリングや
 * 特に強調したい境界に限定する。
 */

export const borderWidth = {
  /** 0px — ボーダーなし */
  none: '0px',
  /** 1px — 標準のボーダー、ディバイダー */
  thin: '1px',
  /** 2px — フォーカスリング、強調ボーダー */
  thick: '2px',
} as const;
