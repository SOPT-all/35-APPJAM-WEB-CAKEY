import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

import { flexGenerator } from '../../../styles/generator.css';

export const backdropStyle = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  background: vars.colors.dimmed,
  zIndex: '2',
});

export const modalStyle = style([
  flexGenerator(),
  {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: vars.colors.white,
    zIndex: '3',
  },
]);
