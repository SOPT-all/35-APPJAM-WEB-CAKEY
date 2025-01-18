import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const loginPageStlye = style([
  flexGenerator('column', 'space-between', 'flex-start'),
  { height: '100dvh' },
]);

export const titleWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  { gap: '1.8rem', padding: '0 2rem', margin: '5.7rem 0 0' },
]);

export const titleText = style([
  flexGenerator('column', 'center', 'flex-start'),
  vars.fonts.head02_b_20,
  { color: vars.colors.gray800, gap: '0.8rem' },
]);

export const imageButtonContainer = style([
  flexGenerator('column'),
  { gap: '0.8rem', width: '100%' },
]);

export const loginMainImage = style({ marginLeft: 'auto', width: '29.3rem' });

export const loginButtonWrapper = style([
  flexGenerator('column'),
  { gap: '2rem', padding: '0 2rem', width: '100%', margin: '0 0 3.4rem' },
]);

export const noLoginButton = style([
  vars.fonts.body07_r_14,
  { color: vars.colors.gray900 },
]);
