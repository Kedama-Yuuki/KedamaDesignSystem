/**
 * Kedama Design System — メインエントリーポイント
 *
 * トークン + CSS + コンポーネント（Phase 4以降）をすべてエクスポート。
 *
 * 使い方:
 *   import { Button, Badge, semanticColors } from '@kedama/design-system';
 *   import '@kedama/design-system/styles';
 */

// CSS（Tailwind + トークンCSS変数）
import './styles/tailwind.css';

// トークン re-export
export * from './tokens';

// コンポーネント
export { Button, buttonVariants, type ButtonProps } from './components/Button';
export { Badge, badgeVariants, type BadgeProps } from './components/Badge';

// ユーティリティ
export { cn } from './lib/cn';
