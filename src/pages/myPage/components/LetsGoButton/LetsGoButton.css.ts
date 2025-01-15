import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const letsGoContainer = style([
  flexGenerator('row', 'space-between'),
  {
    padding: '1.8rem',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: vars.colors.white,
  },
]);

export const whereToGo = style([
  vars.fonts.body04_m_16,
  { color: vars.colors.gray900 },
]);
