import type { PointerEvent } from 'react';
import { Button } from '@acme/button-react';
import { CalendarIcon } from './calendar-icon';
import { clsx } from 'clsx';
import { useState } from 'react';

export function Calendar() {
  const [ariaPressed, setAriaPressed] = useState(false);

  function onClick(_event: PointerEvent<HTMLButtonElement>): void {
    setAriaPressed((v) => !v);
  }

  return (
    <div className="calendar">
      <Button
        appearance="secondary"
        aria-label="toggle"
        aria-pressed={ariaPressed}
        onClick={onClick}
      >
        <CalendarIcon />
      </Button>
    </div>
  );
}
