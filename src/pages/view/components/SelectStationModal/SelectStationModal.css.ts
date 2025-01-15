import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const modalLayoutStyle = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    maxWidth: 430,
    width: '100dvw',
    minHeight: '100dvh',
    padding: '8rem 2rem 1.7rem',
  },
]);

export const textSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '0.8rem',
  },
]);

export const h1Style = style([
  vars.fonts.head01_b_24,
  {
    color: vars.colors.black,
  },
]);

export const spanBox = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray700,
  },
]);

export const scrollSection = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '1rem',
    width: '100%',
    maxHeight: 'calc(100dvh - 8rem - 7.3rem - 4rem - 6rem)',
    overflowY: 'auto',
    margin: '1.7rem 0',

    '::-webkit-scrollbar': {
      display: 'block',
      width: 4,
      height: 143,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: vars.colors.gray300,
      borderRadius: 50,
    },
  },
]);

export const footerSection = style({
  width: '100%',
  marginTop: 'auto',
});
