import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const categoryBarContainer = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
  },
]);
