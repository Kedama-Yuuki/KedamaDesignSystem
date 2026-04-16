/**
 * Kedama Design System — セマンティック タイポグラフィトークン
 *
 * 用途ベースの命名（h1〜h6 禁止、ルール 1.3）。
 * 各スタイルは fontFamily / fontSize / fontWeight / lineHeight / letterSpacing の組み合わせ。
 *
 * フォント使い分け:
 *   heading → fontFamily.heading（DM Sans 優先 — 見出し・UI英語テキスト）
 *   body / caption / overline → fontFamily.body（Noto Sans JP 優先 — 日本語全般）
 *
 * ビジュアルの役割と HTML のセマンティクスは別の軸:
 *   heading-xl が <h2> になるか <h3> になるかは文脈次第。
 *   コード側では適切な HTML 要素と ARIA 属性を必ず付与する。
 *
 * Figma Styles との対応:
 *   Text Styles として定義
 *   例: heading/2xl, body/md, caption
 */

import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from '../primitive/typography';

// ─── 型定義 ─────────────────────────────────────────────
export type TypographyStyle = {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
};

// ─── Heading（見出し） ──────────────────────────────────
// DM Sans 優先。日本語が混在する見出しでは Noto Sans JP にフォールバック。

/** ページタイトル — 42.67px (8/3) */
export const heading2xl: TypographyStyle = {
  fontFamily: fontFamily.heading,
  fontSize: fontSize['5xl'],
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.tight,
};

/** セクション見出し（大） — 32px (8/4) */
export const headingXl: TypographyStyle = {
  fontFamily: fontFamily.heading,
  fontSize: fontSize['4xl'],
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.tight,
};

/** セクション見出し（中） — 25.6px (8/5) */
export const headingLg: TypographyStyle = {
  fontFamily: fontFamily.heading,
  fontSize: fontSize['3xl'],
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.tight,
};

/** セクション見出し（小） — 21.33px (8/6) */
export const headingMd: TypographyStyle = {
  fontFamily: fontFamily.heading,
  fontSize: fontSize['2xl'],
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.normal,
};

/** カード見出し、サブセクション — 18.29px (8/7) */
export const headingSm: TypographyStyle = {
  fontFamily: fontFamily.heading,
  fontSize: fontSize.xl,
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.tight,
  letterSpacing: letterSpacing.normal,
};

// ─── Body（本文） ───────────────────────────────────────
// Noto Sans JP 優先。日本語の可読性を最優先。

/** デフォルト本文・リード文 — 16px (8/8 = 基準サイズ) */
export const bodyLg: TypographyStyle = {
  fontFamily: fontFamily.body,
  fontSize: fontSize.lg,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.normal,
  letterSpacing: letterSpacing.normal,
};

/** 補助テキスト — 14.22px (8/9) */
export const bodyMd: TypographyStyle = {
  fontFamily: fontFamily.body,
  fontSize: fontSize.md,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.normal,
  letterSpacing: letterSpacing.normal,
};

/** 注釈、フッター — 12.8px (8/10) */
export const bodySm: TypographyStyle = {
  fontFamily: fontFamily.body,
  fontSize: fontSize.sm,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.normal,
  letterSpacing: letterSpacing.normal,
};

// ─── Caption & Overline ─────────────────────────────────

/** ラベル、メタ情報 — 11.64px (8/11) */
export const caption: TypographyStyle = {
  fontFamily: fontFamily.body,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.relaxed,
  letterSpacing: letterSpacing.normal,
};

/** カテゴリ表示、セクションラベル（大文字推奨） — 10.67px (8/12) */
export const overline: TypographyStyle = {
  fontFamily: fontFamily.body,
  fontSize: fontSize['2xs'],
  fontWeight: fontWeight.medium,
  lineHeight: lineHeight.relaxed,
  letterSpacing: letterSpacing.wide,
};

/**
 * セマンティック タイポグラフィ全体をエクスポート。
 * コンポーネントでの参照例:
 *   import { semanticTypography } from '@/tokens';
 *   const style = semanticTypography['heading-2xl'];
 */
export const semanticTypography = {
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
} as const;
