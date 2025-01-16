import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const inputContainer = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '0.38rem',
  },
]);

export const inputTitle = style([
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray700,
  },
]);

export const inputStyle = recipe({
  base: {
    width: '100%',
    backgroundColor: vars.colors.gray100,
    borderRadius: '0.8rem',
    padding: '1.4rem 2rem',
    transition: 'border-color 0.3s ease',
  },
  variants: {
    state: {
      default: { color: vars.colors.gray400 },
      active: {
        color: vars.colors.gray900,
        border: `1px solid ${vars.colors.red1}`,
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
