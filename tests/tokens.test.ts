import { describe, it, expect } from 'vitest';
import {
  primitiveColors,
  spacing,
  radius,
  shadow,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  borderWidth,
  focusRing,
  zIndex,
  duration,
  easing,
  opacity,
  backdropBlur,
  breakpoints,
  contentWidth,
  containerPadding,
  semanticColors,
  semanticTypography,
} from '@/tokens';

// ─── Primitive Color Tokens ─────────────────────────────

describe('Primitive Colors', () => {
  const palettes = Object.entries(primitiveColors);
  const steps = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

  it('has 7 color palettes', () => {
    expect(palettes).toHaveLength(7);
  });

  it.each(palettes)('%s has all 11 steps (25–900)', (_name, palette) => {
    for (const step of steps) {
      expect(palette).toHaveProperty(String(step));
    }
    expect(Object.keys(palette)).toHaveLength(11);
  });

  it.each(palettes)('%s values are valid hex colors', (_name, palette) => {
    for (const value of Object.values(palette)) {
      expect(value).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it('does not contain pure white (#FFFFFF)', () => {
    for (const [, palette] of palettes) {
      for (const value of Object.values(palette)) {
        expect(value.toUpperCase()).not.toBe('#FFFFFF');
      }
    }
  });

  it('does not contain pure black (#000000)', () => {
    for (const [, palette] of palettes) {
      for (const value of Object.values(palette)) {
        expect(value.toUpperCase()).not.toBe('#000000');
      }
    }
  });
});

// ─── Primitive Typography Tokens ────────────────────────

describe('Primitive Typography', () => {
  it('fontFamily has heading, body, mono', () => {
    expect(fontFamily).toHaveProperty('heading');
    expect(fontFamily).toHaveProperty('body');
    expect(fontFamily).toHaveProperty('mono');
  });

  it('fontSize values are rem strings', () => {
    for (const value of Object.values(fontSize)) {
      expect(value).toMatch(/^[\d.]+rem$/);
    }
  });

  it('fontWeight values are numbers', () => {
    for (const value of Object.values(fontWeight)) {
      expect(typeof value).toBe('number');
    }
  });

  it('lineHeight values are numbers', () => {
    for (const value of Object.values(lineHeight)) {
      expect(typeof value).toBe('number');
      expect(value).toBeGreaterThan(0);
    }
  });

  it('letterSpacing values are em strings', () => {
    for (const value of Object.values(letterSpacing)) {
      expect(value).toMatch(/^-?[\d.]+em$/);
    }
  });
});

// ─── Spacing Tokens ─────────────────────────────────────

describe('Spacing', () => {
  it('has 13 steps', () => {
    expect(Object.keys(spacing)).toHaveLength(13);
  });

  it('values are px strings', () => {
    for (const value of Object.values(spacing)) {
      expect(value).toMatch(/^\d+px$/);
    }
  });

  it('starts at 0px', () => {
    expect(spacing[0]).toBe('0px');
  });
});

// ─── Other Primitive Tokens ─────────────────────────────

describe('Radius', () => {
  it('has none, sm, md, lg, full', () => {
    expect(Object.keys(radius)).toEqual(['none', 'sm', 'md', 'lg', 'full']);
  });
});

describe('Shadow', () => {
  it('has sm, md, lg', () => {
    expect(Object.keys(shadow)).toEqual(['sm', 'md', 'lg']);
  });
});

describe('Border Width', () => {
  it('has none, thin, thick', () => {
    expect(Object.keys(borderWidth)).toEqual(['none', 'thin', 'thick']);
  });
});

describe('Focus Ring', () => {
  it('has width and offset', () => {
    expect(focusRing.width).toBe('2px');
    expect(focusRing.offset).toBe('2px');
  });
});

describe('Z-Index', () => {
  it('values increase monotonically', () => {
    const values = Object.values(zIndex);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });
});

describe('Motion', () => {
  it('duration.reduced is 0ms', () => {
    expect(duration.reduced).toBe('0ms');
  });

  it('easing values are cubic-bezier strings', () => {
    for (const value of Object.values(easing)) {
      expect(value).toMatch(/^cubic-bezier\(/);
    }
  });
});

describe('Opacity', () => {
  it('values are between 0 and 1', () => {
    for (const value of Object.values(opacity)) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }
  });
});

describe('Breakpoints', () => {
  it('values increase from sm to xl', () => {
    const order = ['sm', 'md', 'lg', 'xl'] as const;
    for (let i = 1; i < order.length; i++) {
      const prev = parseInt(breakpoints[order[i - 1]]);
      const curr = parseInt(breakpoints[order[i]]);
      expect(curr).toBeGreaterThan(prev);
    }
  });
});

// ─── Semantic Color Tokens ──────────────────────────────

describe('Semantic Colors', () => {
  it('has fg, bg, border, accent, status groups', () => {
    expect(semanticColors).toHaveProperty('fg');
    expect(semanticColors).toHaveProperty('bg');
    expect(semanticColors).toHaveProperty('border');
    expect(semanticColors).toHaveProperty('accent');
    expect(semanticColors).toHaveProperty('status');
  });

  it('fg.default is birch-900', () => {
    expect(semanticColors.fg.default).toBe('#040302');
  });

  it('bg.surface is birch-25 (warmest white)', () => {
    expect(semanticColors.bg.surface).toBe('#F8F7F4');
  });

  it('all semantic color values are valid CSS color strings', () => {
    const allValues = [
      ...Object.values(semanticColors.fg),
      ...Object.values(semanticColors.bg),
      ...Object.values(semanticColors.border),
      ...Object.values(semanticColors.accent),
      ...Object.values(semanticColors.status),
    ];
    for (const value of allValues) {
      expect(value).toMatch(/^(#[0-9A-Fa-f]{6}|rgba?\(.+\))$/);
    }
  });
});

// ─── Semantic Typography Tokens ─────────────────────────

describe('Semantic Typography', () => {
  it('has 10 styles', () => {
    expect(Object.keys(semanticTypography)).toHaveLength(10);
  });

  it('each style has all required properties', () => {
    const requiredKeys = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'];
    for (const [, style] of Object.entries(semanticTypography)) {
      for (const key of requiredKeys) {
        expect(style).toHaveProperty(key);
      }
    }
  });

  it('headings use heading font family', () => {
    const headings = ['heading-2xl', 'heading-xl', 'heading-lg', 'heading-md', 'heading-sm'] as const;
    for (const name of headings) {
      expect(semanticTypography[name].fontFamily).toContain('DM Sans');
    }
  });

  it('body styles use body font family', () => {
    const bodies = ['body-lg', 'body-md', 'body-sm'] as const;
    for (const name of bodies) {
      expect(semanticTypography[name].fontFamily).toContain('Noto Sans JP');
    }
  });
});
