import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const modalContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    position: 'relative',
    width: '100%',
    height: '100dvh',
    backgroundColor: vars.colors.black,
  },
]);

export const imageWrapper = style({
  margin: 'auto 0',
  width: '100%',
});

export const closeButton = style({
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  cursor: 'pointer',
});
