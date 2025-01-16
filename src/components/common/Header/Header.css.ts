import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator, fixedGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = recipe({
  base: style([
    flexGenerator('row', 'space-between', 'center'),
    fixedGenerator({ top: 0 }, 1),
    {
      height: '6rem',
      padding: '1.6rem 2rem 1.2rem',
    },
  ]),
  variants: {
    bgColor: {
      white: { backgroundColor: vars.colors.white },
      yellow: { backgroundColor: vars.colors.yellow2 },
    },
  },
});
