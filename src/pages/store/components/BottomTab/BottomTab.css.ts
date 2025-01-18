import { style } from '@vanilla-extract/css';

import { fixedGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = style([
  fixedGenerator({ bottom: 0 }, 1),
  {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr',
    gap: '1.1rem',
    padding: '1.7rem 2rem',
    backgroundColor: vars.colors.white,
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
  },
]);
