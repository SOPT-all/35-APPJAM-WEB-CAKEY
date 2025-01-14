import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = style([
  flexGenerator('row', 'flex-start'),
  {
    overflowX: 'scroll',
    gap: '0.8rem',
    backgroundColor: vars.colors.gray100,
    padding: '1rem 2rem',
  },
]);

export const activeCategoryStyle = style([
  flexGenerator(),
  vars.fonts.body02_sb_14,
  {
    color: vars.colors.white,
    backgroundColor: vars.colors.red1,
    padding: '0.6rem 1.4rem',
    borderRadius: '50px',
    flexShrink: 0,
  },
]);

export const defaultCategoryStyle = style([
  flexGenerator(),
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray500,
    padding: '0.6rem 1.4rem',
    flexShrink: 0,
  },
]);
