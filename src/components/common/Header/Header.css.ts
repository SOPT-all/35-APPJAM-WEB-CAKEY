import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { flexGenerator } from '@styles/generator.css';
import { fixedGenerator } from '@styles/fixedGenerator.css';

export const container = recipe({
  base: style([
    flexGenerator('row', 'space-between', 'center'),
    fixedGenerator('top'),
    {
      height: '6rem',
      padding: '1.6rem 2rem 1.2rem',
    },
  ]),
  variants: {
    bgColor: {
      white: { backgroundColor: vars.colors.white },
      mainBlue: { backgroundColor: vars.colors.mainBlue },
    },
  },
  defaultVariants: {
    bgColor: 'white',
  },
});
