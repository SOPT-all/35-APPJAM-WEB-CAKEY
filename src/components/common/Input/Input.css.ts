import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const inputContainer = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '0.4rem',
    width: '100%',
  },
]);

export const inputTitle = style([
  flexGenerator(),
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray700,
  },
]);

export const inputStyle = recipe({
  base: [
    vars.fonts.body07_r_14,
    {
      width: '100%',
      backgroundColor: vars.colors.white,
      border: `1px solid ${vars.colors.gray300}`,
      borderRadius: '8px',
      padding: '1.4rem 2rem',
      selectors: {
        '&:focus': {
          border: `1px solid ${vars.colors.gray500}`,
        },
      },
    },
  ],
  variants: {
    state: {
      default: { color: vars.colors.gray400 },
      active: {
        color: vars.colors.gray900,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
