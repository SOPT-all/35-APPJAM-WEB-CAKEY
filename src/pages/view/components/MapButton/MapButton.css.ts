import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonStyle = style([
  flexGenerator(),
  {
    width: '4rem',
    height: '4rem',
    zIndex: 1,
    borderRadius: 50,
    backgroundColor: vars.colors.white,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.18);',
  },
]);
