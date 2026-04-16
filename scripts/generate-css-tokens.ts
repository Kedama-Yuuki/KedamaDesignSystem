/**
 * CSS Custom Properties 生成スクリプト
 *
 * src/tokens/ のTypeScript定数を唯一の真実（Single Source of Truth）として読み込み、
 * 2段階のCSS変数を生成する:
 *
 *   1. プリミティブ: --primitive-color-primary-600: #315039;
 *   2. セマンティック: --color-fg-default: var(--primitive-color-birch-900);
 *
 * 出力: src/styles/tokens.css
 */

import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Primitives ─────────────────────────────────────────
import {
  primary,
  birch,
  amber,
  warning,
  danger,
  success,
  info,
} from '../src/tokens/primitive/colors';
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from '../src/tokens/primitive/typography';
import { spacing } from '../src/tokens/primitive/spacing';
import { radius } from '../src/tokens/primitive/radius';
import { shadow } from '../src/tokens/primitive/shadow';
import { breakpoints, contentWidth, containerPadding } from '../src/tokens/primitive/breakpoints';
import { zIndex } from '../src/tokens/primitive/zIndex';
import { duration, easing } from '../src/tokens/primitive/motion';
import { borderWidth } from '../src/tokens/primitive/borderWidth';
import { focusRing } from '../src/tokens/primitive/focusRing';
import { opacity, backdropBlur } from '../src/tokens/primitive/opacity';

// ─── Semantics ──────────────────────────────────────────
import { fg, bg, border, accent, status } from '../src/tokens/semantic/colors';
import {
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
} from '../src/tokens/semantic/typography';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Helpers ────────────────────────────────────────────

/** オブジェクトを --prefix-key: value; 形式のCSS変数に変換 */
function flattenToVars(
  obj: Record<string, string | number>,
  prefix: string,
): string[] {
  return Object.entries(obj).map(
    ([key, value]) => `  --${prefix}-${key}: ${value};`,
  );
}

/**
 * プリミティブ値から対応するCSS変数名を逆引きする。
 * セマンティック変数を var(--primitive-...) で参照させるために使用。
 */
function buildPrimitiveValueMap(): Map<string, string> {
  const map = new Map<string, string>();

  const colorPalettes = { primary, birch, amber, warning, danger, success, info };
  for (const [name, palette] of Object.entries(colorPalettes)) {
    for (const [step, hex] of Object.entries(palette)) {
      map.set(hex as string, `var(--primitive-color-${name}-${step})`);
    }
  }

  return map;
}

/**
 * セマンティックカラーオブジェクトをCSS変数に変換。
 * プリミティブ値はvar()参照に、それ以外（rgba等）は直接値として出力。
 */
function semanticColorVars(
  obj: Record<string, string>,
  prefix: string,
  primitiveMap: Map<string, string>,
): string[] {
  return Object.entries(obj).map(([key, value]) => {
    const varRef = primitiveMap.get(value);
    const cssValue = varRef ?? value;
    return `  --${prefix}-${key}: ${cssValue};`;
  });
}

/** TypographyStyleをCSS変数群に変換 */
function typographyVars(
  name: string,
  style: { fontFamily: string; fontSize: string; fontWeight: number; lineHeight: number; letterSpacing: string },
): string[] {
  return [
    `  --typography-${name}-font-family: ${style.fontFamily};`,
    `  --typography-${name}-font-size: ${style.fontSize};`,
    `  --typography-${name}-font-weight: ${style.fontWeight};`,
    `  --typography-${name}-line-height: ${style.lineHeight};`,
    `  --typography-${name}-letter-spacing: ${style.letterSpacing};`,
  ];
}

// ─── Generate ───────────────────────────────────────────

const primitiveMap = buildPrimitiveValueMap();

const lines: string[] = [
  '/* ============================================================',
  ' * Kedama Design System — CSS Custom Properties',
  ' * ',
  ' * ⚠️  このファイルは自動生成です。直接編集しないでください。',
  ' *    編集元: src/tokens/ → scripts/generate-css-tokens.ts',
  ' * ============================================================ */',
  '',
  ':root {',
  '',
  '  /* ── Primitive: Colors ─────────────────────────────── */',
];

const colorPalettes = { primary, birch, amber, warning, danger, success, info };
for (const [name, palette] of Object.entries(colorPalettes)) {
  lines.push(...flattenToVars(palette as Record<string, string>, `primitive-color-${name}`));
}

lines.push('');
lines.push('  /* ── Primitive: Typography ──────────────────────── */');
lines.push(...flattenToVars(fontFamily as Record<string, string>, 'primitive-font-family'));
lines.push(...flattenToVars(fontSize as Record<string, string>, 'primitive-font-size'));
lines.push(...flattenToVars(fontWeight as Record<string, string | number>, 'primitive-font-weight'));
lines.push(...flattenToVars(lineHeight as Record<string, string | number>, 'primitive-line-height'));
lines.push(...flattenToVars(letterSpacing as Record<string, string>, 'primitive-letter-spacing'));

lines.push('');
lines.push('  /* ── Primitive: Spacing ──────────────────────────── */');
lines.push(...flattenToVars(spacing as Record<string, string>, 'primitive-spacing'));

lines.push('');
lines.push('  /* ── Primitive: Radius ───────────────────────────── */');
lines.push(...flattenToVars(radius as Record<string, string>, 'primitive-radius'));

lines.push('');
lines.push('  /* ── Primitive: Shadow ───────────────────────────── */');
lines.push(...flattenToVars(shadow as Record<string, string>, 'primitive-shadow'));

lines.push('');
lines.push('  /* ── Primitive: Breakpoints ──────────────────────── */');
lines.push(...flattenToVars(breakpoints as Record<string, string>, 'primitive-breakpoint'));
lines.push(...flattenToVars(contentWidth as Record<string, string>, 'primitive-content-width'));
lines.push(...flattenToVars(containerPadding as Record<string, string>, 'primitive-container-padding'));

lines.push('');
lines.push('  /* ── Primitive: Z-Index ──────────────────────────── */');
lines.push(...flattenToVars(zIndex as Record<string, string | number>, 'primitive-z'));

lines.push('');
lines.push('  /* ── Primitive: Motion ───────────────────────────── */');
lines.push(...flattenToVars(duration as Record<string, string>, 'primitive-duration'));
lines.push(...flattenToVars(easing as Record<string, string>, 'primitive-easing'));

lines.push('');
lines.push('  /* ── Primitive: Border Width ─────────────────────── */');
lines.push(...flattenToVars(borderWidth as Record<string, string>, 'primitive-border-width'));

lines.push('');
lines.push('  /* ── Primitive: Focus Ring ───────────────────────── */');
lines.push(...flattenToVars(focusRing as Record<string, string>, 'primitive-focus-ring'));

lines.push('');
lines.push('  /* ── Primitive: Opacity ──────────────────────────── */');
lines.push(...flattenToVars(opacity as Record<string, string | number>, 'primitive-opacity'));
lines.push(`  --primitive-backdrop-blur: ${backdropBlur};`);

// ── Semantic Colors ──
lines.push('');
lines.push('  /* ── Semantic: Colors ────────────────────────────── */');
lines.push(...semanticColorVars(fg as Record<string, string>, 'color-fg', primitiveMap));
lines.push(...semanticColorVars(bg as Record<string, string>, 'color-bg', primitiveMap));
lines.push(...semanticColorVars(border as Record<string, string>, 'color-border', primitiveMap));
lines.push(...semanticColorVars(accent as Record<string, string>, 'color-accent', primitiveMap));
lines.push(...semanticColorVars(status as Record<string, string>, 'color-status', primitiveMap));

// ── Semantic Typography ──
lines.push('');
lines.push('  /* ── Semantic: Typography ────────────────────────── */');
const typographyStyles = {
  'heading-2xl': heading2xl,
  'heading-xl': headingXl,
  'heading-lg': headingLg,
  'heading-md': headingMd,
  'heading-sm': headingSm,
  'body-lg': bodyLg,
  'body-md': bodyMd,
  'body-sm': bodySm,
  caption,
  overline,
};
for (const [name, style] of Object.entries(typographyStyles)) {
  lines.push(...typographyVars(name, style));
}

lines.push('');
lines.push('}');
lines.push('');

const outPath = resolve(__dirname, '../src/styles/tokens.css');
writeFileSync(outPath, lines.join('\n'), 'utf-8');
console.log(`✓ Generated ${outPath}`);
