import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'ボタン',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// ─── 基本バリアント ─────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', children: '保存する' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'キャンセル' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: '詳細を見る' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: '削除する' },
};

// ─── サイズ ─────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// ─── 全バリアント一覧 ───────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['primary', 'secondary', 'ghost', 'danger'] as const).map((variant) => (
        <div key={variant}>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#315039',
              marginBottom: '8px',
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button variant={variant} size="sm">Small</Button>
            <Button variant={variant} size="md">Medium</Button>
            <Button variant={variant} size="lg">Large</Button>
            <Button variant={variant} size="md" disabled>Disabled</Button>
            <Button variant={variant} size="md" loading>読込中</Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── ローディング状態 ───────────────────────────────────

export const Loading: Story = {
  args: { loading: true, children: '保存中…' },
};

// ─── 無効状態 ───────────────────────────────────────────

export const Disabled: Story = {
  args: { disabled: true, children: '操作できません' },
};

// ─── アイコン付き ───────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const WithIconLeft: Story = {
  args: {
    iconLeft: <PlusIcon />,
    children: '新規作成',
  },
};

export const WithIconRight: Story = {
  args: {
    iconRight: <ArrowRightIcon />,
    children: '次へ進む',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button iconLeft={<PlusIcon />}>新規作成</Button>
      <Button variant="secondary" iconRight={<ArrowRightIcon />}>次へ進む</Button>
      <Button variant="ghost" iconLeft={<PlusIcon />}>追加する</Button>
      <Button variant="danger" iconLeft={<PlusIcon />} loading>削除中…</Button>
    </div>
  ),
};
