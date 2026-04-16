/**
 * Kedama Design System — プリミティブ シャドウトークン
 *
 * Calm UI の「空気感」を作るシャドウ。
 * 階層を示す記号ではなく、要素がそこに「在る」感覚を演出する。
 *
 * 設計方針:
 * - blur を大きく、opacity を低く → 柔らかい印象
 * - lg にはブランドカラー（primary/苔色）を混ぜて上質感を付与
 * - spread は控えめか負値 → 影が要素からはみ出しすぎない
 *
 * Figma との対応:
 *   Effect Styles として定義（Variables ではなく Styles）
 *   例: shadow/sm, shadow/md, shadow/lg
 */

export const shadow = {
  /**
   * 紙がそっと置かれたような浮き上がり。
   * カード静止状態、ホバー前の控えめな奥行き。
   * blur 8px / opacity 4%
   */
  sm: '0 1px 8px 0 rgba(0, 0, 0, 0.04)',

  /**
   * フローティング要素が浮き上がって見える。
   * ドロップダウン、ポップオーバー、ホバー時のカード。
   * 2層: メイン blur 16px / サブ blur 6px
   */
  md: '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',

  /**
   * 画面全体に柔らかい奥行きと上質感。
   * モーダル、ダイアログ、最前面の要素。
   * ブランドカラー（primary-600: #315039）を影に混ぜることで
   * 無機質な黒影を避け、空間に温かみを与える。
   * 2層: カラーシャドウ blur 32px / ニュートラルシャドウ blur 12px
   */
  lg: '0 8px 32px -4px rgba(49, 80, 57, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
} as const;
