/**
 * Kedama Design System — メインエントリーポイント
 *
 * トークン + CSS + コンポーネント（Phase 4以降）をすべてエクスポート。
 *
 * 使い方:
 *   import { semanticColors, spacing } from '@kedama/design-system';
 *   import '@kedama/design-system/styles';
 */

// CSS（Tailwind + トークンCSS変数）
import './styles/tailwind.css';

// トークン re-export
export * from './tokens';
