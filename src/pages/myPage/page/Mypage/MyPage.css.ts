import { style, styleVariants } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const profileCardStyle = styleVariants({
  login: { margin: '3.8rem 0 3.6rem' },
  logout: { margin: '3.8rem 0 3rem' },
});

export const letsGoButtonStyle = style([
  flexGenerator('column'),
  { padding: '0 1.9rem 0 2rem', gap: '0.6rem' },
]);

export const loginButton = style({ padding: '0 2rem' });
