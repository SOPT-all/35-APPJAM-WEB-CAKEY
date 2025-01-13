import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const label = style([
  vars.fonts.body05_m_14,
  flexGenerator(),
  {
    color: vars.colors.red1,
    backgroundColor: vars.colors.red3,
    padding: '0.3rem 0.8rem',
    width: 'fit-content',
    borderRadius: '5rem',
  },
]);
