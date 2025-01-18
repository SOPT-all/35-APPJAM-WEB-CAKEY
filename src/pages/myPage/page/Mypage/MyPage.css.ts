import { style, styleVariants } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const profileCardStyle = styleVariants({
  login: { margin: '3.8rem 0 3.6rem' },
  logout: { margin: '3.8rem 0 3rem' },
});

export const letsGoButtonWrapper = style([
  flexGenerator('column'),
  { padding: '0 2rem', gap: '0.6rem' },
]);

export const loginButton = style({ padding: '0 2rem' });
