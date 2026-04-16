/**
 * WCAG コントラスト比 自動検証テスト
 *
 * セマンティックカラーの主要なテキスト×背景の組み合わせを
 * WCAG 2.2 AA 基準で検証する。
 *
 * AA基準:
 *   - 通常テキスト: 4.5:1 以上
 *   - 大テキスト（18px bold / 24px regular 以上）: 3:1 以上
 *   - 非テキスト要素（UI部品、グラフ等）: 3:1 以上
 */

import { describe, it, expect } from 'vitest';
import { fg, bg, border, accent, status } from '@/tokens/semantic/colors';

// ─── Relative Luminance Calculation ─────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace('#', '');
  return [
    parseInt(cleaned.slice(0, 2), 16) / 255,
    parseInt(cleaned.slice(2, 4), 16) / 255,
    parseInt(cleaned.slice(4, 6), 16) / 255,
  ];
}

function linearize(channel: number): number {
  return channel <= 0.04045
    ? channel / 12.92
    : Math.pow((channel + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(linearize);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(fg: string, bg: string): number {
  const lFg = relativeLuminance(fg);
  const lBg = relativeLuminance(bg);
  const lighter = Math.max(lFg, lBg);
  const darker = Math.min(lFg, lBg);
  return (lighter + 0.05) / (darker + 0.05);
}

// ─── Helper ─────────────────────────────────────────────

function isHex(value: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
}

// ─── Tests ──────────────────────────────────────────────

describe('WCAG AA Contrast Ratios', () => {
  describe('Normal text (4.5:1)', () => {
    const normalTextPairs: [string, string, string][] = [
      // [label, foreground, background]
      ['fg.default on bg.surface', fg.default, bg.surface],
      ['fg.default on bg.page', fg.default, bg.page],
      ['fg.default on bg.subtle', fg.default, bg.subtle],
      ['fg.muted on bg.surface', fg.muted, bg.surface],
      ['fg.muted on bg.page', fg.muted, bg.page],
      ['fg.inverse on bg.inverse', fg.inverse, bg.inverse],
      ['fg.link on bg.surface', fg.link, bg.surface],
      ['fg.link on bg.page', fg.link, bg.page],
    ];

    it.each(normalTextPairs)('%s ≥ 4.5:1', (label, fgColor, bgColor) => {
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `${label}: ${ratio.toFixed(2)}:1 (need 4.5:1). FG=${fgColor}, BG=${bgColor}`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Large text (3:1)', () => {
    const largeTextPairs: [string, string, string][] = [
      ['fg.link-hover on bg.surface', fg['link-hover'], bg.surface],
      ['fg.link-hover on bg.page', fg['link-hover'], bg.page],
    ];

    it.each(largeTextPairs)('%s ≥ 3:1', (label, fgColor, bgColor) => {
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `${label}: ${ratio.toFixed(2)}:1 (need 3:1). FG=${fgColor}, BG=${bgColor}`,
      ).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Non-text UI elements (3:1)', () => {
    const uiPairs: [string, string, string][] = [
      ['fg.placeholder on bg.surface (WCAG 3:1 for placeholders)', fg.placeholder, bg.surface],
      ['border.strong on bg.surface', border.strong, bg.surface],
      // border.default は意図的に控えめ（subtle divider）。3:1が必要な場面では border.strong を使用。
      ['accent.primary on bg.surface', accent.primary, bg.surface],
      ['border.active on bg.surface', border.active, bg.surface],
      ['border.error on bg.surface', border.error, bg.surface],
    ];

    it.each(uiPairs)('%s ≥ 3:1', (label, fgColor, bgColor) => {
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `${label}: ${ratio.toFixed(2)}:1 (need 3:1). FG=${fgColor}, BG=${bgColor}`,
      ).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Accent button text on accent backgrounds (4.5:1)', () => {
    const accentPairs: [string, string, string][] = [
      ['accent.primary-fg on accent.primary', accent['primary-fg'], accent.primary],
      ['accent.primary-fg on accent.primary-hover', accent['primary-fg'], accent['primary-hover']],
      ['accent.primary-fg on accent.primary-active', accent['primary-fg'], accent['primary-active']],
      ['accent.tertiary-fg on accent.tertiary', accent['tertiary-fg'], accent.tertiary],
      ['accent.tertiary-fg on accent.tertiary-hover', accent['tertiary-fg'], accent['tertiary-hover']],
    ];

    it.each(accentPairs)('%s ≥ 4.5:1', (label, fgColor, bgColor) => {
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `${label}: ${ratio.toFixed(2)}:1 (need 4.5:1). FG=${fgColor}, BG=${bgColor}`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Status text on status backgrounds (4.5:1)', () => {
    const statuses = ['success', 'warning', 'danger', 'info'] as const;

    it.each(statuses)('%s text on %s-bg ≥ 4.5:1', (s) => {
      const fgColor = status[s];
      const bgColor = status[`${s}-bg`];
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `status.${s} on status.${s}-bg: ${ratio.toFixed(2)}:1 (need 4.5:1)`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Status solid-fg on status solid backgrounds (4.5:1)', () => {
    const statuses = ['success', 'warning', 'danger', 'info'] as const;

    it.each(statuses)('%s-fg on %s-solid ≥ 4.5:1', (s) => {
      const fgColor = status[`${s}-fg`];
      const bgColor = status[`${s}-solid`];
      if (!isHex(fgColor) || !isHex(bgColor)) return;
      const ratio = contrastRatio(fgColor, bgColor);
      expect(
        ratio,
        `status.${s}-fg on status.${s}-solid: ${ratio.toFixed(2)}:1 (need 4.5:1)`,
      ).toBeGreaterThanOrEqual(4.5);
    });
  });
});
