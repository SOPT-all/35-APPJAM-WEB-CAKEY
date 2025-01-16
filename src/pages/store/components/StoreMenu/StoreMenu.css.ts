import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { flexGenerator } from '@styles/generator.css';

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.6rem',
  padding: '2.6rem 0',
});

export const sectionBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const boxTitle = style([
  flexGenerator('row', 'flex-start', 'center'),
  vars.fonts.head03_b_18,
  {
    gap: '0.6rem',
    padding: '0 2rem',
    color: vars.colors.gray800,
  },
]);

export const boxTitleSubText = style([vars.fonts.body10_l_12]);

export const tasteDescription = style([
  vars.fonts.body07_r_14,
  {
    padding: '0 2rem',
  },
]);
