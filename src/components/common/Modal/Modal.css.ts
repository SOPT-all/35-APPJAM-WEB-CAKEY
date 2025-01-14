import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const backdropStyle = style({
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  background: vars.colors.dimmed,
  zIndex: '3',
});

export const modalStyle = recipe({
  base: [
    flexGenerator(),
    { zIndex: 4, backgroundColor: vars.colors.white, position: 'fixed' },
  ],
  variants: {
    variant: {
      center: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
      },
      bottom: {
        bottom: '0',
        width: '100%',
        borderRadius: '10px 10px 0px 0px',
      },
    },
  },
});
