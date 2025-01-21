import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonStyle = recipe({
  base: [
    flexGenerator('column'),
    {
      gap: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  ],
  variants: {
    buttonType: {
      save24: {
        width: '2.4rem',
        gap: 0,
      },
      save28: {
        width: '2.8rem',
        gap: 0,
      },
      like20: {
        width: '2rem',
        gap: '0.6rem',
      },
      like36: {
        width: '3.6rem',
        gap: 0,
      },
    },
  },
});

export const countStyle = recipe({
  base: {
    color: vars.colors.gray400,
  },
  variants: {
    buttonType: {
      save24: [vars.fonts.body08_r_12],
      save28: [vars.fonts.body07_r_14],
      like20: [vars.fonts.body08_r_12],
      like36: [],
    },
  },
});
