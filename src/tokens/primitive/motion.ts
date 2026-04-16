/**
 * Kedama Design System — プリミティブ モーショントークン
 *
 * Calm UI におけるアニメーションは「装飾」ではなく「状態変化の案内役」。
 * 急な変化を避け、穏やかなイージングと適切な duration で
 * ユーザーを優しく誘導する。
 *
 * 設計方針:
 * - duration は用途別に3段階（即時フィードバック / 標準 / 大きな変化）
 * - easing は有機的な動き（機械的な linear を避ける）
 * - prefers-reduced-motion を必ず尊重すること（コンポーネント実装時）
 */

// ─── Duration ───────────────────────────────────────────
export const duration = {
  /**
   * 0ms — prefers-reduced-motion: reduce 用。
   * すべてのトランジション duration をこの値に差し替える前提で使う。
   *
   * CSS イメージ:
   *   @media (prefers-reduced-motion: reduce) {
   *     * { transition-duration: var(--duration-reduced) !important; }
   *   }
   */
  reduced: '0ms',
  /** 120ms — ホバー、フォーカスなど即時フィードバック */
  fast: '120ms',
  /** 240ms — 標準的なUI変化（アコーディオン、タブ切替など） */
  normal: '240ms',
  /** 400ms — 大きな変化（モーダル出入り、ページ遷移）。余韻を残す */
  slow: '400ms',
} as const;

// ─── Easing ─────────────────────────────────────────────
export const easing = {
  /** 標準イージング — ほとんどのUI操作に使用 */
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** 要素の出現（フェードイン、スライドイン） */
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  /** 要素の退出（フェードアウト、スライドアウト） */
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

/**
 * プリミティブ モーション全体をエクスポート。
 */
export const motion = {
  duration,
  easing,
} as const;
