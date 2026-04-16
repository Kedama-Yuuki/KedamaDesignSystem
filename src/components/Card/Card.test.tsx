import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';

describe('Card', () => {
  // ─── 基本レンダリング ─────────────────────────────────

  it('renders children', () => {
    render(<Card>カードコンテンツ</Card>);
    expect(screen.getByText('カードコンテンツ')).toBeInTheDocument();
  });

  it('renders as a div', () => {
    const { container } = render(<Card>テスト</Card>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('has surface background and shadow', () => {
    const { container } = render(<Card>テスト</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-surface');
    expect(card.className).toContain('shadow-sm');
  });

  it('has padding by default', () => {
    const { container } = render(<Card>テスト</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('p-6');
  });

  it('removes padding with noPadding', () => {
    const { container } = render(<Card noPadding>テスト</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toContain('p-6');
  });

  it('merges custom className', () => {
    const { container } = render(<Card className="my-card">テスト</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('my-card');
  });

  it('passes through HTML attributes', () => {
    render(<Card data-testid="card" role="region">テスト</Card>);
    expect(screen.getByTestId('card')).toHaveAttribute('role', 'region');
  });

  // ─── サブコンポーネント ───────────────────────────────

  it('renders Card.Header', () => {
    render(
      <Card>
        <Card.Header>ヘッダー</Card.Header>
      </Card>,
    );
    expect(screen.getByText('ヘッダー')).toBeInTheDocument();
  });

  it('renders Card.Body', () => {
    render(
      <Card>
        <Card.Body>ボディ</Card.Body>
      </Card>,
    );
    expect(screen.getByText('ボディ')).toBeInTheDocument();
  });

  it('renders Card.Footer', () => {
    render(
      <Card>
        <Card.Footer>フッター</Card.Footer>
      </Card>,
    );
    expect(screen.getByText('フッター')).toBeInTheDocument();
  });

  it('renders all sections together', () => {
    render(
      <Card>
        <Card.Header>ヘッダー</Card.Header>
        <Card.Body>ボディ</Card.Body>
        <Card.Footer>フッター</Card.Footer>
      </Card>,
    );
    expect(screen.getByText('ヘッダー')).toBeInTheDocument();
    expect(screen.getByText('ボディ')).toBeInTheDocument();
    expect(screen.getByText('フッター')).toBeInTheDocument();
  });

  it('Card.Header merges className', () => {
    render(
      <Card>
        <Card.Header className="custom-header">H</Card.Header>
      </Card>,
    );
    expect(screen.getByText('H').className).toContain('custom-header');
  });

  it('Card.Footer has border-top', () => {
    render(
      <Card>
        <Card.Footer>F</Card.Footer>
      </Card>,
    );
    expect(screen.getByText('F').className).toContain('border-t');
  });
});
