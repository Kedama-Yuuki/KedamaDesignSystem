import React from 'react';
import { cn } from '../../lib/cn';

// ─── Types ──────────────────────────────────────────────

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** アイコンのサイズ（px）。デフォルト 20 */
  size?: number;
  /** アクセシビリティ用のラベル。指定すると role="img" になる。省略すると aria-hidden="true" */
  label?: string;
}

// ─── Base Icon Wrapper ──────────────────────────────────

/**
 * Icon ベースコンポーネント
 *
 * すべてのアイコンの共通ラッパー。SVGの属性を統一的に管理する。
 * - label がなければ decorative（aria-hidden="true"）
 * - label があれば informative（role="img", aria-label）
 * - stroke ベース（strokeWidth=1.5, strokeLinecap/join=round）
 *
 * 各アイコンは children に <path> 等を渡すことで定義する。
 *
 * @example
 * ```tsx
 * <Icon label="検索"><path d="..." /></Icon>
 * <Icon size={24} className="text-fg-muted"><path d="..." /></Icon>
 * ```
 */
export function Icon({
  size = 20,
  label,
  className,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('inline-block shrink-0', className)}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      {...props}
    >
      {children}
    </svg>
  );
}

Icon.displayName = 'Icon';

// ─── Preset Icons ───────────────────────────────────────
// 業務システムで頻出するアイコンを事前定義。
// すべて Icon をベースにし、path のみを差し替える。

type PresetIconProps = Omit<IconProps, 'children'>;

/** 検索 */
export function SearchIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="9" r="5" />
      <path d="m13 13 4 4" />
    </Icon>
  );
}

/** 閉じる（×） */
export function CloseIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="m5 5 10 10M15 5 5 15" />
    </Icon>
  );
}

/** プラス（追加） */
export function PlusIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="M10 4v12M4 10h12" />
    </Icon>
  );
}

/** チェック（完了） */
export function CheckIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </Icon>
  );
}

/** 警告（三角!） */
export function AlertIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="M10 7v3.5" />
      <circle cx="10" cy="13" r="0.5" fill="currentColor" stroke="none" />
      <path d="M8.68 3.5a1.5 1.5 0 0 1 2.64 0l5.5 10A1.5 1.5 0 0 1 15.5 16h-11a1.5 1.5 0 0 1-1.32-2.5l5.5-10Z" />
    </Icon>
  );
}

/** 情報（i マーク） */
export function InfoIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 9v4" />
      <circle cx="10" cy="7" r="0.5" fill="currentColor" stroke="none" />
    </Icon>
  );
}

/** 矢印右 */
export function ArrowRightIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10h12m-5-5 5 5-5 5" />
    </Icon>
  );
}

/** 矢印左 */
export function ArrowLeftIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="M16 10H4m5-5-5 5 5 5" />
    </Icon>
  );
}

/** ゴミ箱（削除） */
export function TrashIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6h12M8 6V4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V6" />
      <path d="M5.5 6 6 16.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1L14.5 6" />
    </Icon>
  );
}

/** 編集（ペン） */
export function EditIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <path d="m12.5 3.5 4 4L7 17H3v-4L12.5 3.5Z" />
    </Icon>
  );
}

/** 設定（歯車） */
export function SettingsIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2m0 12v2M2 10h2m12 0h2m-2.34-5.66-1.42 1.42M5.76 14.24l-1.42 1.42m0-11.32 1.42 1.42m8.48 8.48 1.42 1.42" />
    </Icon>
  );
}

/** ユーザー */
export function UserIcon(props: PresetIconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="7" r="3.5" />
      <path d="M3 17.5a7 7 0 0 1 14 0" />
    </Icon>
  );
}
