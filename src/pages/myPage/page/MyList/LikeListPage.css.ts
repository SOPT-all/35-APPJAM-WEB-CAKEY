import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const myListContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {},
]);

export const titleWrapper = style([
  { width: '100%', padding: '1.1rem 0 1.6rem 2rem' },
]);

export const myListTitle = style([
  vars.fonts.head01_b_24,
  { color: vars.colors.gray900 },
]);

export const cardListStyle = style({ padding: '1.2rem 2rem 0' });

export const tabSticky = style({
  width: '100%',
  position: 'sticky',
  top: '6rem',
  zIndex: 1,
});
