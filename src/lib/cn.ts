import { clsx, type ClassValue } from 'clsx';

/**
 * clsx ラッパー。
 * Tailwind クラスの結合に使用する。
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
