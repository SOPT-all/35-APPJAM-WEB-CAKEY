import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const categoryBarContainer = style([
  flexGenerator(),
  {
    width: '100%',
    gap: '1.6rem',
  },
]);
