import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = style([
  flexGenerator('row', 'flex-start'),
  {
    gap: '1.2rem',
    overflowX: 'scroll',
    paddingLeft: '2.8rem',
    paddingRight: '3rem',
  },
]);

export const imageStyle = style({
  width: '31rem',
  height: '31rem',
  flexShrink: 0,
});

export const moreButtonStyle = style([
  flexGenerator('column'),
  { gap: '0.8rem' },
]);

export const moreTextStyle = style([
  vars.fonts.body07_r_14,
  { color: vars.colors.gray500 },
]);
