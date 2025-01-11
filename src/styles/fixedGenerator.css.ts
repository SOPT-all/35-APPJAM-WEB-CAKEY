import { style } from '@vanilla-extract/css';

export const fixedGenerator = (
  position: 'top' | 'bottom' = 'top',
  zIndex: number = 1
) =>
  style({
    position: 'fixed',
    [position]: 0,
    zIndex,
    width: '100%',
    maxWidth: 'var(--max-width)',
    minWidth: 'var(--min-width)',
  });
