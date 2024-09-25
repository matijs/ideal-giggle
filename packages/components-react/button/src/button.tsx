import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  function Button(props, forwardedRef) {
    const { appearance, children, className, ...restProps } = props;

    return (
      <button
        className={clsx(
          'button',
          {
            ['button--primary']: appearance === 'primary',
            ['button--secondary']: appearance === 'secondary',
          },
          className
        )}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
