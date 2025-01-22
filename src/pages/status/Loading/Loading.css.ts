import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const loadingContainer = style([
  flexGenerator('column'),
  {
    gap: '1.8rem',
    height: '100dvh',
    margin: 'auto 0',
  },
]);

export const lottieStyle = style({
  width: '10rem',
  height: '10rem',
});

export const textBox = style([
  flexGenerator('column'),
  {
    gap: '0.7rem',
  },
]);

export const h1Style = style([
  vars.fonts.head03_b_18,
  {
    color: vars.colors.gray700,
  },
]);

export const spanStyle = style([
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray500,
  },
]);
