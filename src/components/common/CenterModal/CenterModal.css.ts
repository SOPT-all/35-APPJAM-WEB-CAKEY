import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const backdropStyle = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  background: vars.colors.dimmed,
  zIndex: '4',
});

export const modalStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '2rem',
  borderRadius: '10px',
  backgroundColor: vars.colors.white,
  zIndex: '5',
});
