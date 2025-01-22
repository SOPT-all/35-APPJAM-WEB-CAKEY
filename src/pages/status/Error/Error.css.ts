import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const errorPageLayout = style([
  flexGenerator('column'),
  { padding: '1.7rem 2rem', height: '100vh' },
]);

export const errorContentWrapper = style([
  flexGenerator('column'),
  {
    gap: '2rem',
    marginTop: '22.8rem',
  },
]);

export const errorLottiesStyle = style({
  width: '7rem',
});

export const errorTextWrapper = style([
  flexGenerator('column'),
  { gap: '0.7rem' },
]);

export const errorMainTextStyle = style([
  vars.fonts.head03_b_18,
  { color: vars.colors.gray700 },
]);

export const errorSubTextStyle = style([
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray500,
  },
]);

export const buttonWrapper = style({
  width: '100%',
  marginTop: 'auto',
});
