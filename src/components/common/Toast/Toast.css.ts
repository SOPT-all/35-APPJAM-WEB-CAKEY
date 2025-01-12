import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';
import { flexGenerator } from '@styles/generator.css';

export const toastStyle = style([
  flexGenerator(),
  {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '25rem',
    height: '4rem',

    backgroundColor: vars.colors.yellow1,
    color: vars.colors.black,
    borderRadius: '0.8rem',
    zIndex: 5,
  },
]);
