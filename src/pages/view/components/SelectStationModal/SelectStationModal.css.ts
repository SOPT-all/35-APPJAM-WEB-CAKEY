import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const modalLayoutStyle = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    maxWidth: 'var(--max-width)',
    width: '100dvw',
    minHeight: '100dvh',
    paddingTop: '6rem',
  },
]);

export const textSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    margin: '2rem 0 3.6rem',
    gap: '0.8rem',
    padding: '0 2rem',
    width: '100%',
  },
]);

export const h1Style = style([
  vars.fonts.head01_b_24,
  {
    color: vars.colors.black,
  },
]);

export const spanStyle = style([
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray700,
  },
]);

export const scrollSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '1rem',
    paddingLeft: '1.8rem',
    width: '100%',
    maxHeight: 'calc(100dvh - 8rem - 7.3rem - 4rem - 6rem)',
    overflowY: 'auto',
    scrollbarGutter: 'stable',

    '::-webkit-scrollbar': {
      display: 'block',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: vars.colors.gray300,
      borderRadius: 50,
      border: `6px solid ${vars.colors.white}`,
    },
  },
]);

export const footerSection = style({
  width: '100%',
  marginTop: 'auto',
  padding: '0 2rem',
});
