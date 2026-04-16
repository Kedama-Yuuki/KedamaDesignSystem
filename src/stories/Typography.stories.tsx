import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { semanticTypography, fontFamily, fontSize } from '../tokens';
import type { TypographyStyle } from '../tokens';

// ─── Helpers ────────────────────────────────────────────

function TypographySample({
  name,
  style,
  sampleJa,
  sampleEn,
}: {
  name: string;
  style: TypographyStyle;
  sampleJa: string;
  sampleEn: string;
}) {
  const cssStyle: React.CSSProperties = {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    color: '#040302',
  };

  return (
    <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #E0DED7' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '12px',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#315039',
            minWidth: '120px',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: '"Noto Sans Mono", monospace',
            fontSize: '11px',
            color: '#858073',
          }}
        >
          {style.fontSize} / {style.fontWeight} / {style.lineHeight} / {style.letterSpacing}
        </span>
      </div>
      <p style={{ ...cssStyle, marginBottom: '4px' }}>{sampleJa}</p>
      <p style={{ ...cssStyle, color: '#676358' }}>{sampleEn}</p>
    </div>
  );
}

// ─── Typography Scale Story ─────────────────────────────

const samples: { name: string; key: keyof typeof semanticTypography; ja: string; en: string }[] = [
  {
    name: 'heading-2xl',
    key: 'heading-2xl',
    ja: '穏やかで、確かなデザイン',
    en: 'Calm, reliable design',
  },
  {
    name: 'heading-xl',
    key: 'heading-xl',
    ja: '日々の業務を静かに支える',
    en: 'Quietly supporting daily work',
  },
  {
    name: 'heading-lg',
    key: 'heading-lg',
    ja: '情報の階層を自然に整理する',
    en: 'Naturally organizing information hierarchy',
  },
  {
    name: 'heading-md',
    key: 'heading-md',
    ja: 'セクションの見出しとして使用します',
    en: 'Used as section headings',
  },
  {
    name: 'heading-sm',
    key: 'heading-sm',
    ja: 'カードやサブセクションの見出し',
    en: 'Card and subsection headings',
  },
  {
    name: 'body-lg',
    key: 'body-lg',
    ja: '本文のデフォルトサイズ。日本語の可読性を最優先に設計されたテキストスタイルです。一行あたり40〜60文字を目安とし、行間は1.6に設定しています。',
    en: 'Default body text. Designed with Japanese readability as the top priority.',
  },
  {
    name: 'body-md',
    key: 'body-md',
    ja: '補助テキストやフォーム内のヘルプテキストに使用します。メインの本文よりやや小さいサイズです。',
    en: 'Used for helper text and secondary information.',
  },
  {
    name: 'body-sm',
    key: 'body-sm',
    ja: '注釈やフッターなど、補足的な情報を表示するための最小本文サイズです。',
    en: 'Smallest body size for footnotes and supplementary info.',
  },
  {
    name: 'caption',
    key: 'caption',
    ja: 'ラベルやメタ情報に使用。タイムスタンプ、バージョン番号など。',
    en: 'Labels, metadata, timestamps.',
  },
  {
    name: 'overline',
    key: 'overline',
    ja: 'カテゴリ表示・セクションラベル',
    en: 'CATEGORY / SECTION LABEL',
  },
];

function TypographyScalePage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        タイポグラフィ
      </h2>
      <p
        style={{
          fontFamily: '"Noto Sans JP", sans-serif',
          color: '#676358',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        調和数列スケール（Shiftbrain harmonic series）。基数8、ベース16px。
        <br />
        DM Sans（見出し・UI英語） / Noto Sans JP（日本語全般） / Noto Sans Mono（コード）
      </p>
      {samples.map((s) => (
        <TypographySample
          key={s.key}
          name={s.name}
          style={semanticTypography[s.key]}
          sampleJa={s.ja}
          sampleEn={s.en}
        />
      ))}
    </div>
  );
}

// ─── Font Family Story ──────────────────────────────────

function FontFamilyPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '24px',
          color: '#040302',
        }}
      >
        Font Families
      </h2>
      {Object.entries(fontFamily).map(([name, value]) => (
        <div
          key={name}
          style={{
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid #E0DED7',
          }}
        >
          <h3
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#315039',
              marginBottom: '8px',
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: '"Noto Sans Mono", monospace',
              fontSize: '11px',
              color: '#858073',
              marginBottom: '12px',
            }}
          >
            {value}
          </p>
          <p style={{ fontFamily: value, fontSize: '24px', color: '#040302', marginBottom: '4px' }}>
            AaBbCc あいうえお 漢字 0123456789
          </p>
          <p style={{ fontFamily: value, fontSize: '16px', color: '#676358' }}>
            The quick brown fox jumps over the lazy dog. 素早い茶色の狐が怠惰な犬を飛び越える。
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Font Size Scale Story ──────────────────────────────

function FontSizeScalePage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        フォントサイズスケール
      </h2>
      <p
        style={{
          fontFamily: '"Noto Sans JP", sans-serif',
          color: '#676358',
          marginBottom: '32px',
          lineHeight: 1.6,
          fontSize: '14px',
        }}
      >
        調和数列: 1rem × 8/n（n は等差数列）
      </p>
      {Object.entries(fontSize).map(([name, value]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #E0DED7',
          }}
        >
          <span
            style={{
              fontFamily: '"Noto Sans Mono", monospace',
              fontSize: '12px',
              color: '#858073',
              minWidth: '80px',
            }}
          >
            {name} ({value})
          </span>
          <span
            style={{
              fontFamily: '"Noto Sans JP", "DM Sans", sans-serif',
              fontSize: value,
              color: '#040302',
            }}
          >
            穏やかなデザイン Calm UI
          </span>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Typography',
};
export default meta;

export const Scale: StoryObj = {
  render: () => <TypographyScalePage />,
};

export const FontFamilies: StoryObj = {
  render: () => <FontFamilyPage />,
};

export const FontSizeScale: StoryObj = {
  render: () => <FontSizeScalePage />,
};
