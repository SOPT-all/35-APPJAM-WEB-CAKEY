import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const CategoryButtonStyle = style([
  flexGenerator('column'),
  {
    gap: '0.8rem',
    width: '7.2rem',
  },
]);

export const activeTextStyle = style([
  vars.fonts.head06_sb_16,
  {
    color: vars.colors.gray600,
  },
]);

export const unActiveTextStyle = style([
  vars.fonts.body06_r_16,
  {
    color: vars.colors.gray600,
  },
]);
