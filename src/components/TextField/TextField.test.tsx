import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { TextField } from './TextField';

describe('TextField', () => {
  // ─── レンダリング ─────────────────────────────────────

  it('renders an input element', () => {
    render(<TextField />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<TextField placeholder="入力してください" />);
    expect(screen.getByPlaceholderText('入力してください')).toBeInTheDocument();
  });

  // ─── ラベル ───────────────────────────────────────────

  it('renders label and associates it with input', () => {
    render(<TextField label="メールアドレス" />);
    const input = screen.getByLabelText('メールアドレス');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('uses external id when provided', () => {
    render(<TextField label="名前" id="custom-id" />);
    const input = screen.getByLabelText('名前');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  // ─── ヘルプテキスト ───────────────────────────────────

  it('renders helper text', () => {
    render(<TextField helperText="8文字以上" />);
    expect(screen.getByText('8文字以上')).toBeInTheDocument();
  });

  it('associates helper text with input via aria-describedby', () => {
    render(<TextField label="パスワード" helperText="8文字以上" />);
    const input = screen.getByLabelText('パスワード');
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    const helperEl = document.getElementById(describedBy!);
    expect(helperEl?.textContent).toBe('8文字以上');
  });

  // ─── エラー状態 ───────────────────────────────────────

  it('renders error message', () => {
    render(<TextField error="必須項目です" />);
    expect(screen.getByText('必須項目です')).toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    render(<TextField label="名前" error="必須です" />);
    expect(screen.getByLabelText('名前')).toHaveAttribute('aria-invalid', 'true');
  });

  it('error message has role="alert"', () => {
    render(<TextField error="エラーです" />);
    expect(screen.getByRole('alert')).toHaveTextContent('エラーです');
  });

  it('shows error instead of helper when both provided', () => {
    render(<TextField helperText="ヒント" error="エラー" />);
    expect(screen.getByText('エラー')).toBeInTheDocument();
    expect(screen.queryByText('ヒント')).not.toBeInTheDocument();
  });

  it('does not set aria-invalid when no error', () => {
    render(<TextField label="名前" />);
    expect(screen.getByLabelText('名前')).not.toHaveAttribute('aria-invalid');
  });

  // ─── disabled状態 ─────────────────────────────────────

  it('disables input when disabled', () => {
    render(<TextField label="名前" disabled />);
    expect(screen.getByLabelText('名前')).toBeDisabled();
  });

  // ─── アイコン ─────────────────────────────────────────

  it('renders leading icon', () => {
    render(<TextField leadingIcon={<span data-testid="lead">🔍</span>} />);
    expect(screen.getByTestId('lead')).toBeInTheDocument();
  });

  it('renders trailing icon', () => {
    render(<TextField trailingIcon={<span data-testid="trail">✕</span>} />);
    expect(screen.getByTestId('trail')).toBeInTheDocument();
  });

  // ─── 入力操作 ─────────────────────────────────────────

  it('accepts user input', async () => {
    render(<TextField label="名前" />);
    const input = screen.getByLabelText('名前');
    await userEvent.type(input, 'ケダマ太郎');
    expect(input).toHaveValue('ケダマ太郎');
  });

  it('fires onChange', async () => {
    const onChange = vi.fn();
    render(<TextField label="名前" onChange={onChange} />);
    await userEvent.type(screen.getByLabelText('名前'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  // ─── ref転送 ──────────────────────────────────────────

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextField ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  // ─── カスタムクラス ───────────────────────────────────

  it('merges custom className on wrapper', () => {
    const { container } = render(<TextField className="my-field" />);
    expect(container.firstChild).toHaveClass('my-field');
  });
});
