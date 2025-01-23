import { style } from '@vanilla-extract/css';

import { fixedGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const overlayStyle = style([
  fixedGenerator({ top: 0 }, 1),
  {
    height: 'calc(100dvh - 11.2rem)',
  },
]);

export const bottomSheetStyle = style([
  fixedGenerator({ bottom: 0 }, 2),
  {
    height: '79vh',
    padding: '1.4rem 2rem 0',

    backgroundColor: vars.colors.white,
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10)',
    willChange: 'transform',
  },
]);

export const handler = style({
  margin: '0 auto',
  width: '3rem',
  height: '0.4rem',
  borderRadius: '50px',
  background: vars.colors.gray300,
});

export const content = style({
  height: 'calc(100% - 0.4rem)',
  overflowY: 'scroll',
});
