import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { spacing, radius, shadow, borderWidth } from '../tokens';

// ─── Spacing Story ──────────────────────────────────────

function SpacingPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', fontFamily: '"Noto Sans JP", sans-serif' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        スペーシング
      </h2>
      <p style={{ color: '#676358', marginBottom: '32px', lineHeight: 1.6 }}>
        4px基準のスケール。トークン名がそのままpx値を示す実値ベース命名。
      </p>
      {Object.entries(spacing).map(([name, value]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              fontFamily: '"Noto Sans Mono", monospace',
              fontSize: '12px',
              color: '#858073',
              minWidth: '100px',
              textAlign: 'right',
            }}
          >
            spacing/{name} ({value})
          </span>
          <div
            style={{
              height: '24px',
              width: value,
              backgroundColor: '#539065',
              borderRadius: '2px',
              minWidth: name === '0' ? '1px' : undefined,
              opacity: 0.7,
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Radius Story ───────────────────────────────────────

function RadiusPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', fontFamily: '"Noto Sans JP", sans-serif' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        角丸（Radius）
      </h2>
      <p style={{ color: '#676358', marginBottom: '32px', lineHeight: 1.6 }}>
        Calm UIのメインは md（8px）。清潔感と柔らかさのバランス。
      </p>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {Object.entries(radius).map(([name, value]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#F8F7F4',
                border: '2px solid #315039',
                borderRadius: value,
                marginBottom: '8px',
              }}
            />
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#040302',
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: '"Noto Sans Mono", monospace',
                fontSize: '11px',
                color: '#858073',
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Shadow Story ───────────────────────────────────────

function ShadowPage() {
  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '800px',
        fontFamily: '"Noto Sans JP", sans-serif',
        backgroundColor: '#F0EEE9',
        minHeight: '400px',
      }}
    >
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        シャドウ
      </h2>
      <p style={{ color: '#676358', marginBottom: '32px', lineHeight: 1.6 }}>
        柔らかい影で「空気感」を演出。lg にはブランドカラー（苔色）を混ぜて上質感を付与。
      </p>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {Object.entries(shadow).map(([name, value]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '160px',
                height: '100px',
                backgroundColor: '#F8F7F4',
                borderRadius: '8px',
                boxShadow: value,
                marginBottom: '12px',
              }}
            />
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#040302',
              }}
            >
              shadow-{name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Border Width Story ─────────────────────────────────

function BorderWidthPage() {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', fontFamily: '"Noto Sans JP", sans-serif' }}>
      <h2
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#040302',
        }}
      >
        ボーダー幅
      </h2>
      <p style={{ color: '#676358', marginBottom: '32px', lineHeight: 1.6 }}>
        thin（1px）が基本。thick（2px）はフォーカスリングや強調に限定。
      </p>
      <div style={{ display: 'flex', gap: '32px' }}>
        {Object.entries(borderWidth)
          .filter(([name]) => name !== 'none')
          .map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  border: `${value} solid #A29E93`,
                  borderRadius: '8px',
                  marginBottom: '8px',
                }}
              />
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#040302' }}>{name}</div>
              <div
                style={{
                  fontFamily: '"Noto Sans Mono", monospace',
                  fontSize: '11px',
                  color: '#858073',
                }}
              >
                {value}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Spacing & Layout',
};
export default meta;

export const SpacingScale: StoryObj = {
  render: () => <SpacingPage />,
};

export const RadiusTokens: StoryObj = {
  render: () => <RadiusPage />,
};

export const ShadowTokens: StoryObj = {
  render: () => <ShadowPage />,
};

export const BorderWidthTokens: StoryObj = {
  render: () => <BorderWidthPage />,
};
