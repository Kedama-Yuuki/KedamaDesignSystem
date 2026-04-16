import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  Icon,
  SearchIcon,
  CloseIcon,
  PlusIcon,
  CheckIcon,
  AlertIcon,
  InfoIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  TrashIcon,
  EditIcon,
  SettingsIcon,
  UserIcon,
} from './Icon';

describe('Icon', () => {
  // ─── ベースコンポーネント ─────────────────────────────

  it('renders an svg element', () => {
    const { container } = render(
      <Icon><path d="M0 0" /></Icon>,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('defaults to size 20', () => {
    const { container } = render(
      <Icon><path d="M0 0" /></Icon>,
    );
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('20');
    expect(svg.getAttribute('height')).toBe('20');
  });

  it('accepts custom size', () => {
    const { container } = render(
      <Icon size={32}><path d="M0 0" /></Icon>,
    );
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
  });

  it('is aria-hidden when no label', () => {
    const { container } = render(
      <Icon><path d="M0 0" /></Icon>,
    );
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('has role="img" and aria-label when label is provided', () => {
    render(
      <Icon label="検索"><path d="M0 0" /></Icon>,
    );
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('aria-label', '検索');
  });

  it('uses stroke-based styling', () => {
    const { container } = render(
      <Icon><path d="M0 0" /></Icon>,
    );
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('stroke')).toBe('currentColor');
    expect(svg.getAttribute('fill')).toBe('none');
  });

  it('merges custom className', () => {
    const { container } = render(
      <Icon className="text-danger-500"><path d="M0 0" /></Icon>,
    );
    expect(container.querySelector('svg')?.className.baseVal).toContain('text-danger-500');
  });

  // ─── プリセットアイコン ───────────────────────────────

  const presets = [
    ['SearchIcon', SearchIcon],
    ['CloseIcon', CloseIcon],
    ['PlusIcon', PlusIcon],
    ['CheckIcon', CheckIcon],
    ['AlertIcon', AlertIcon],
    ['InfoIcon', InfoIcon],
    ['ArrowRightIcon', ArrowRightIcon],
    ['ArrowLeftIcon', ArrowLeftIcon],
    ['TrashIcon', TrashIcon],
    ['EditIcon', EditIcon],
    ['SettingsIcon', SettingsIcon],
    ['UserIcon', UserIcon],
  ] as const;

  it.each(presets)('%s renders without crashing', (_name, IconComponent) => {
    const { container } = render(<IconComponent />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it.each(presets)('%s passes size prop through', (_name, IconComponent) => {
    const { container } = render(<IconComponent size={24} />);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('24');
  });

  it.each(presets)('%s passes label prop through', (_name, IconComponent) => {
    render(<IconComponent label="テスト" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'テスト');
  });
});
