import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { TextField } from '../components/TextField';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', backgroundColor: 'var(--color-bg-page)', minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Card>;

// ─── 基本 ───────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <p style={{ color: 'var(--color-fg-default)', fontFamily: 'var(--primitive-font-family-body)' }}>
        シンプルなカードコンテナ。padding付きで、内側にコンテンツを配置します。
      </p>
    </Card>
  ),
};

// ─── Header / Body / Footer ─────────────────────────────

export const WithSections: Story = {
  name: 'Header / Body / Footer',
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <Card.Header>
        <h3
          style={{
            fontFamily: 'var(--primitive-font-family-heading)',
            fontSize: 'var(--primitive-font-size-2xl)',
            fontWeight: 500,
            color: 'var(--color-fg-default)',
            margin: 0,
          }}
        >
          プロジェクト概要
        </h3>
        <Badge status="success">進行中</Badge>
      </Card.Header>
      <Card.Body>
        <p
          style={{
            fontFamily: 'var(--primitive-font-family-body)',
            fontSize: 'var(--primitive-font-size-md)',
            lineHeight: 1.6,
            color: 'var(--color-fg-default)',
            margin: 0,
          }}
        >
          Kedama Design Systemは、社内業務システム向けのReact + TypeScriptデザインシステムです。
          Calm UIの原則に基づき、穏やかで確かなインターフェースを提供します。
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">閉じる</Button>
        <Button variant="primary" size="sm">詳細を見る</Button>
      </Card.Footer>
    </Card>
  ),
};

// ─── noPadding ──────────────────────────────────────────

export const NoPadding: Story = {
  name: 'noPadding（テーブル用途）',
  render: () => (
    <Card noPadding style={{ maxWidth: '480px' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-border-muted)' }}>
        <h3
          style={{
            fontFamily: 'var(--primitive-font-family-heading)',
            fontSize: 'var(--primitive-font-size-xl)',
            fontWeight: 500,
            color: 'var(--color-fg-default)',
            margin: 0,
          }}
        >
          最近のアクティビティ
        </h3>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {[
            { action: 'デザイントークン更新', user: '東森', time: '2分前' },
            { action: 'Buttonコンポーネント追加', user: 'Claude', time: '15分前' },
            { action: 'プロジェクト初期化', user: '東森', time: '1時間前' },
          ].map((row, i) => (
            <tr
              key={i}
              style={{ borderBottom: '1px solid var(--color-border-muted)' }}
            >
              <td
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  color: 'var(--color-fg-default)',
                  fontFamily: 'var(--primitive-font-family-body)',
                }}
              >
                {row.action}
              </td>
              <td
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  color: 'var(--color-fg-muted)',
                  fontFamily: 'var(--primitive-font-family-body)',
                }}
              >
                {row.user}
              </td>
              <td
                style={{
                  padding: '10px 20px',
                  fontSize: '12px',
                  color: 'var(--color-fg-placeholder)',
                  fontFamily: 'var(--primitive-font-family-mono)',
                  textAlign: 'right',
                }}
              >
                {row.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  ),
};

// ─── フォームカード ─────────────────────────────────────

export const FormCard: Story = {
  name: '使用例：フォームカード',
  render: () => (
    <Card style={{ maxWidth: '440px' }}>
      <Card.Header>
        <h3
          style={{
            fontFamily: 'var(--primitive-font-family-heading)',
            fontSize: 'var(--primitive-font-size-2xl)',
            fontWeight: 500,
            color: 'var(--color-fg-default)',
            margin: 0,
          }}
        >
          お問い合わせ
        </h3>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField label="お名前" placeholder="山田 太郎" />
          <TextField label="メールアドレス" type="email" placeholder="taro@example.com" />
          <TextField label="件名" placeholder="お問い合わせ内容のタイトル" />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">キャンセル</Button>
        <Button variant="primary" size="sm">送信する</Button>
      </Card.Footer>
    </Card>
  ),
};
