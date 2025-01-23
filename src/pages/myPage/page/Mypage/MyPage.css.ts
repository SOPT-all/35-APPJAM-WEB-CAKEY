import { style, styleVariants } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const myPageLayout = style([
  flexGenerator('column'),
  {
    width: '100%',
    height: 'calc(100dvh - 6rem)',
  },
]);

export const profileCardStyle = styleVariants({
  login: { margin: '3.8rem 0 3.6rem' },
  logout: { margin: '3.8rem 0 3rem' },
});

export const letsGoButtonWrapper = style([
  flexGenerator('column'),
  { padding: '0 2rem', gap: '0.6rem', width: '100%' },
]);

export const loginButton = style({ padding: '0 2rem', width: '100%' });

export const footerWrapper = style({
  marginTop: 'auto',
  width: '100%',
});
