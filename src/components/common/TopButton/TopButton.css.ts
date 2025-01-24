import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  position: 'fixed',
  bottom: '3.2rem',
  right: '2rem',
  '@media': {
    'screen and (min-width: 430px)': {
      left: 'calc(50% + 13.5rem)',
      right: 'auto',
    },
  },
});
