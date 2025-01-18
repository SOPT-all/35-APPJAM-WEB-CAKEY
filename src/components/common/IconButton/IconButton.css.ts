import { style } from '@vanilla-extract/css';
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
        gap: '0.6rem',
      },
      like36: {
        width: '3.6rem',
      },
    },
    onMap: {
      true: {
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        backgroundColor: vars.colors.white,
      },
      false: {},
    },
  },
});

export const countStyle = style([
  vars.fonts.body08_r_12,
  {
    display: 'block',
    height: '1.4rem',
    color: vars.colors.gray400,
  },
]);
