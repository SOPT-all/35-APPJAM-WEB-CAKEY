import { style } from '@vanilla-extract/css';

import { fixedGenerator } from '@styles/generator.css';

export const container = style([
  fixedGenerator({ bottom: 0 }, 1),
  {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr',
    gap: '1.1rem',
    padding: '1.7rem 2rem',
  },
]);

export const buttonStyle = style({
  width: '9.2rem',
});
