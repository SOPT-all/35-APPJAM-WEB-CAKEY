import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = style([
  flexGenerator('column'),
  {
    width: '100%',
    gap: '1rem',
  },
]);

export const infoContainer = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
  },
]);

export const infoWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  { gap: '0.6rem' },
]);

export const infoTitleStyle = style(vars.fonts.head08_m_18);
