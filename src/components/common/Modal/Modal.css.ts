import { recipe } from '@vanilla-extract/recipes';

import { fixedGenerator, flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const backdropStyle = recipe({
  base: [
    fixedGenerator({ top: 0, center: true }),
    {
      height: '100%',
      background: vars.colors.dimmed,
    },
  ],
  variants: {
    variant: {
      center: {zIndex: 5},
      bottom: {zIndex: 3}
    }
  }
})

export const modalStyle = recipe({
  base: [
    flexGenerator(),
    {backgroundColor: vars.colors.white, position: 'fixed' },
  ],
  variants: {
    variant: {
      center: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        zIndex: 5, 
      },
      bottom: [
        fixedGenerator({ bottom: 0, center: true }, 4),
        {
          borderRadius: '10px 10px 0px 0px',
          boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
          zIndex: 4
        },
      ],
    },
  },
});
