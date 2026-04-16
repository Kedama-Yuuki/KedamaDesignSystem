/**
 * Kedama Design System — プリミティブカラートークン
 *
 * Atmos (atmos.style) で OKLCH 色空間ベースで生成。
 * HEX 値は OKLCH → sRGB 変換後の値。
 *
 * 設計方針:
 * - OKLCH ベースの知覚的に均一なスケール
 * - 彩度を抑えた Calm UI トーン（原則1: Calm）
 * - WCAG 2.2 AA 全ペア検証済み（原則2: Accessible）
 * - ニュートラルは暖色系（birch / 白樺）
 * - 純白 #FFFFFF は不使用。birch/25 が最も明るい面の色。
 *
 * スケール: 25（最明）〜 900（最暗）の11段階
 * 25 は L=0.975（surface・反転テキスト用の暖白）
 *
 * Figma Variables との対応:
 *   Collection: "Primitives" > Group: "color"
 *   例: color/primary/600, color/birch/25
 */

// ─── Primary（苔色 — ブランド・主要アクション）hue 152 ───
export const primary = {
  25: '#EEFBF1',
  50: '#DFF6E4',
  100: '#B9EDC6',
  200: '#8ED09F',
  300: '#6DB07F',
  400: '#539065',
  500: '#416F4E',
  600: '#315039',
  700: '#213325',
  800: '#0F1912',
  900: '#020402',
} as const;

// ─── Birch（白樺 — 暖色ニュートラル）hue 90 ─────────────
export const birch = {
  25: '#F8F7F4',
  50: '#F0EEE9',
  100: '#E0DED7',
  200: '#C1BDB5',
  300: '#A29E93',
  400: '#858073',
  500: '#676358',
  600: '#4B473D',
  700: '#302E27',
  800: '#181611',
  900: '#040302',
} as const;

// ─── Amber（琥珀 — Tertiary・装飾アクセント）hue 80–83 ──
export const amber = {
  25: '#FFF6E5',
  50: '#FFECC9',
  100: '#F6DAA8',
  200: '#DEB870',
  300: '#C09749',
  400: '#A07927',
  500: '#7F5C0E',
  600: '#5E4201',
  700: '#3E2A00',
  800: '#201400',
  900: '#060300',
} as const;

// ─── Warning（警告 — オレンジ）hue 55 ──────────────────
export const warning = {
  25: '#FCF5F1',
  50: '#FAEBE2',
  100: '#FFD4B8',
  200: '#EBAF87',
  300: '#CF8D60',
  400: '#AF6F41',
  500: '#8C532A',
  600: '#693A16',
  700: '#462409',
  800: '#251002',
  900: '#080200',
} as const;

// ─── Danger（エラー — 赤）hue 7–11 ────────────────────
export const danger = {
  25: '#FFF4F5',
  50: '#FEE8EA',
  100: '#FFD0D6',
  200: '#F5A3B0',
  300: '#E07B8E',
  400: '#C4576F',
  500: '#A23954',
  600: '#7B223C',
  700: '#540F25',
  800: '#2E0310',
  900: '#0C0002',
} as const;

// ─── Success（成功 — 黄緑）hue 115 ────────────────────
export const success = {
  25: '#F6F8EE',
  50: '#EDF2D5',
  100: '#DCE4AC',
  200: '#BBC581',
  300: '#9CA65F',
  400: '#7E8745',
  500: '#62692E',
  600: '#474C1C',
  700: '#2D310E',
  800: '#161803',
  900: '#030400',
} as const;

// ─── Info（情報 — 青）hue 231 ─────────────────────────
export const info = {
  25: '#F3F8FA',
  50: '#E2F1FA',
  100: '#B7E6FF',
  200: '#84C8EA',
  300: '#5AA9D0',
  400: '#398AAF',
  500: '#206C8C',
  600: '#0F4E68',
  700: '#063245',
  800: '#031923',
  900: '#010407',
} as const;

/**
 * プリミティブカラー全体をエクスポート。
 *
 * 純白 (#FFFFFF) / 純黒 (#000000) は定義しない。
 * 最明色は birch[25] (#F8F7F4)、最暗色は birch[900] (#040302) を使用する。
 */
export const primitiveColors = {
  primary,
  birch,
  amber,
  warning,
  danger,
  success,
  info,
} as const;
