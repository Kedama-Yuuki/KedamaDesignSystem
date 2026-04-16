import type { Meta, StoryObj } from '@storybook/react';
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
} from '../components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: { control: { type: 'range', min: 12, max: 48, step: 4 } },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

// ─── 全アイコン一覧 ─────────────────────────────────────

const allIcons = [
  { name: 'SearchIcon', component: SearchIcon, label: '検索' },
  { name: 'CloseIcon', component: CloseIcon, label: '閉じる' },
  { name: 'PlusIcon', component: PlusIcon, label: '追加' },
  { name: 'CheckIcon', component: CheckIcon, label: '完了' },
  { name: 'AlertIcon', component: AlertIcon, label: '警告' },
  { name: 'InfoIcon', component: InfoIcon, label: '情報' },
  { name: 'ArrowRightIcon', component: ArrowRightIcon, label: '矢印右' },
  { name: 'ArrowLeftIcon', component: ArrowLeftIcon, label: '矢印左' },
  { name: 'TrashIcon', component: TrashIcon, label: '削除' },
  { name: 'EditIcon', component: EditIcon, label: '編集' },
  { name: 'SettingsIcon', component: SettingsIcon, label: '設定' },
  { name: 'UserIcon', component: UserIcon, label: 'ユーザー' },
] as const;

export const AllIcons: Story = {
  name: '全アイコン一覧',
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2
        style={{
          fontFamily: 'var(--primitive-font-family-heading)',
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: 'var(--color-fg-default)',
        }}
      >
        アイコン
      </h2>
      <p
        style={{
          fontFamily: 'var(--primitive-font-family-body)',
          color: 'var(--color-fg-muted)',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        業務システムで頻出するSVGアイコンセット。stroke ベース、20×20 viewBox。
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
        }}
      >
        {allIcons.map(({ name, component: IconComponent, label }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--color-border-muted)',
            }}
          >
            <IconComponent size={24} />
            <span
              style={{
                fontFamily: 'var(--primitive-font-family-mono)',
                fontSize: '11px',
                color: 'var(--color-fg-muted)',
                textAlign: 'center',
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontFamily: 'var(--primitive-font-family-body)',
                fontSize: '12px',
                color: 'var(--color-fg-placeholder)',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── サイズバリエーション ───────────────────────────────

export const Sizes: Story = {
  name: 'サイズ',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
      {[12, 16, 20, 24, 32, 40].map((size) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <SearchIcon size={size} />
          <div
            style={{
              fontFamily: 'var(--primitive-font-family-mono)',
              fontSize: '11px',
              color: 'var(--color-fg-muted)',
              marginTop: '4px',
            }}
          >
            {size}px
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── カラーバリエーション ───────────────────────────────

export const Colors: Story = {
  name: 'カラー',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
      <CheckIcon size={24} className="text-[var(--color-status-success)]" />
      <AlertIcon size={24} className="text-[var(--color-status-warning)]" />
      <CloseIcon size={24} className="text-[var(--color-status-danger)]" />
      <InfoIcon size={24} className="text-[var(--color-status-info)]" />
      <SettingsIcon size={24} className="text-fg-muted" />
      <UserIcon size={24} className="text-accent-primary" />
    </div>
  ),
};

// ─── カスタムアイコンの例 ───────────────────────────────

export const CustomIcon: Story = {
  name: 'カスタムアイコン',
  render: () => (
    <div style={{ padding: '24px' }}>
      <p
        style={{
          fontFamily: 'var(--primitive-font-family-body)',
          color: 'var(--color-fg-muted)',
          marginBottom: '16px',
          fontSize: '14px',
        }}
      >
        Icon ベースにカスタムの path を渡してオリジナルアイコンを作成できます:
      </p>
      <Icon size={24} label="ハート">
        <path d="M10 17s-7-4.35-7-8.5A3.5 3.5 0 0 1 10 6a3.5 3.5 0 0 1 7 2.5c0 4.15-7 8.5-7 8.5Z" />
      </Icon>
    </div>
  ),
};
