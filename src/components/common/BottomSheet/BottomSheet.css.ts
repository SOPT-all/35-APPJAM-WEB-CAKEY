import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  zIndex: 1,
  width: '100%',
  maxWidth: 'var(--max-width)',
  minWidth: 'var(--min-width)',
  height: 'calc(100dvh - 11.2rem)',
});

export const container = style({
  position: 'fixed',
  bottom: 0,
  zIndex: 2,
  width: '100%',
  maxWidth: 'var(--max-width)',
  minWidth: 'var(--min-width)',
  height: '80vh',
  padding: '1.4rem 2rem 0',

  backgroundColor: vars.colors.white,
  borderRadius: '2rem 2rem 0rem 0rem',
  boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.10)',
  willChange: 'transform',
});

export const handler = style({
  margin: '0 auto',
  width: '3rem',
  height: '0.4rem',
  borderRadius: '50px',
  background: vars.colors.gray300,
});

export const content = style({
  height: '100%',
  overflowY: 'scroll',
  overscrollBehavior: 'none',
});
