import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const authModalContainer = style([
  flexGenerator('column'),
  {
    padding: '2.1rem 2rem',
    gap: '1.8rem',
  },
]);
export const modalMessage = style([
  vars.fonts.head06_sb_16,
  { color: vars.colors.gray900 },
]);
export const buttonSet = style([
  flexGenerator(),
  { width: '100%', minWidth: '25.9rem', gap: '1.5rem' },
]);