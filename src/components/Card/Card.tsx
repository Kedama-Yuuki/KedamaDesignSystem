import React from 'react';
import { cn } from '../../lib/cn';

// ─── Card（ルートコンテナ） ─────────────────────────────

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** パディングを無くす（テーブルや画像を全幅で入れたいとき） */
  noPadding?: boolean;
}

/**
 * Card コンポーネント
 *
 * コンテンツをグルーピングするコンテナ。
 * Calm UI の「紙がそっと置かれたような」佇まいを shadow-sm で表現。
 *
 * Card.Header / Card.Body / Card.Footer でセクションを分割できる。
 * 単純な用途では Card 直下にコンテンツを置いてもよい。
 *
 * @example
 * ```tsx
 * <Card>
 *   <Card.Header>
 *     <h3>プロジェクト概要</h3>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Kedama Design System は…</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button variant="secondary">閉じる</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */
function CardRoot({ className, noPadding, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md bg-surface shadow-sm',
        'border border-border-muted',
        !noPadding && 'p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = 'Card';

// ─── Card.Header ────────────────────────────────────────

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('mb-4 flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
}

CardHeader.displayName = 'Card.Header';

// ─── Card.Body ──────────────────────────────────────────

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

CardBody.displayName = 'Card.Body';

// ─── Card.Footer ────────────────────────────────────────

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'mt-4 flex items-center justify-end gap-2',
        'border-t border-border-muted pt-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CardFooter.displayName = 'Card.Footer';

// ─── Compound Component ─────────────────────────────────

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
