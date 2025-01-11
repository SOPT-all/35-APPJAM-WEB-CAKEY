import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = recipe({
  base: [
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center ',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  ],
  variants: {
    onMap: {
      true: {
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        backgroundColor: vars.colors.black,
      },
      false: {},
    },
  },
});

export const iconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const countStyle = style([
  vars.fonts.body08_r_12,
  {
    color: vars.colors.gray2, // 수정 필요
  },
]);
