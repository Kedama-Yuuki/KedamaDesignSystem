/**
 * Kedama Design System — デザイントークン パブリックAPI
 *
 * すべてのトークンはこのファイル経由でインポートする。
 *
 * 使い方:
 *   import { semanticColors, semanticTypography, spacing } from '@/tokens';
 *
 * 階層:
 *   primitive/ — 値そのもの（色のHEX値、px値など）
 *   semantic/  — 用途を意味する（fg.default, heading-2xl など）
 */

// ─── Primitive ──────────────────────────────────────────
export {
  primitiveColors,
  primary,
  birch,
  amber,
  warning,
  danger,
  success,
  info,
} from './primitive/colors';

export {
  primitiveTypography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from './primitive/typography';

export { spacing } from './primitive/spacing';
export { radius } from './primitive/radius';
export { shadow } from './primitive/shadow';
export { breakpoints, contentWidth, containerPadding } from './primitive/breakpoints';
export { zIndex } from './primitive/zIndex';
export { motion, duration, easing } from './primitive/motion';
export { borderWidth } from './primitive/borderWidth';
export { focusRing } from './primitive/focusRing';
export { opacity, backdropBlur } from './primitive/opacity';

// ─── Semantic ───────────────────────────────────────────
export {
  semanticColors,
  fg,
  bg,
  border,
  accent,
  status,
} from './semantic/colors';

export {
  semanticTypography,
  heading2xl,
  headingXl,
  headingLg,
  headingMd,
  headingSm,
  bodyLg,
  bodyMd,
  bodySm,
  caption,
  overline,
  type TypographyStyle,
} from './semantic/typography';
