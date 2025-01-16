import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const myListContainer = style([{}]);

export const myListTitle = style([
  vars.fonts.head01_b_24,
  { color: vars.colors.gray900, padding: '1.1rem 0 1.6rem 2rem' },
]);

export const cardListStyle = style({ padding: '1.2rem 2rem 0' });
