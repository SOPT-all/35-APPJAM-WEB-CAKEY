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
  flexGenerator(),
  {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const infoWrapper = style([
  flexGenerator('column'),
  { gap: '0.6rem', alignItems: 'flex-start' },
]);

export const infoTitleStyle = style(vars.fonts.head08_m_18);
