import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { fixedGenerator, flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const toastStyle = recipe({
  base: [
    flexGenerator(),
    fixedGenerator({ bottom: '4.6rem', center: true }, 5),
    vars.fonts.body05_m_14,
    {
      width: 'fit-content',
      minWidth: 'auto',
      backgroundColor: vars.colors.number,
      color: vars.colors.white,
      borderRadius: '50px',
    },
  ],
  variants: {
    isButton: {
      true: {
        justifyContent: 'space-between',
        width: '33.5rem',
        padding: '1.05rem 1.4rem 1.05rem 2.4rem',
      },
      false: {
        padding: '1.7rem 1.8rem',
      },
    },
  },
});

export const toastMessageStyle = style([flexGenerator(), { gap: '0.4rem' }]);

export const toastButtonStyle = style([
  vars.fonts.body07_r_14,
  {
    padding: '0.8rem 1.8rem',
    color: vars.colors.white,
    backgroundColor: vars.colors.gray700,
    borderRadius: '50px',
  },
]);
