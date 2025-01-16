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
  },
]);
