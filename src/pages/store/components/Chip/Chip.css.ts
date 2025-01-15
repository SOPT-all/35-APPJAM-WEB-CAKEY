import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const chip = recipe({
  base: style([
    flexGenerator(),
    vars.fonts.body08_r_12,
    {
      padding: '0.4rem 1rem',
      width: 'fit-content',
      borderRadius: '50px',
      color: vars.colors.gray600,
      transition: 'background-color 0.3s ease',
    },
  ]),
  variants: {
    isSelected: {
      false: { backgroundColor: vars.colors.gray200 },
      true: { backgroundColor: vars.colors.white },
    },
  },
});
