import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

export type Props = HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  function Paragraph(props, forwardedRef) {
    const { children, className, ...restProps } = props;

    return (
      <p
        className={clsx('paragraph', className)}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </p>
    );
  }
);
