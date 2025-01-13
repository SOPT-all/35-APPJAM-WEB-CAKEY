import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonStyle = recipe({
  base: [
    flexGenerator('column', 'center', 'center'),
    {
      gap: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  ],
  variants: {
    buttonType: {
      save: {
        width: '2.4rem',
        gap: 0,
      },
      like: {
        gap: '0.6rem',
      },
      gps: {},
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

// export const iconStyle = recipe({
//   base: {
//     display: 'block',
//   },
//   variants: {
//     buttonType: {
//       save: {
//         width: '2.4rem',
//         height: '2.4rem',
//       },
//       like: {
//         width: '2rem',
//         height: '2rem',
//       },
//       gps: {
//         width: '2.4rem',
//         height: '2.4rem',
//       },
//     },
//   },
// });

export const countStyle = style([
  vars.fonts.body08_r_12,
  {
    display: 'block',
    height: '1.4rem',
    color: vars.colors.gray400,
  },
]);
