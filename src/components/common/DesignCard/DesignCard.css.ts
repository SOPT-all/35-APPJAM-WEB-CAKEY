import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const container = style([
  flexGenerator('column'),
  {
    width: '100%',
    gap: '1rem',
    cursor: 'pointer'
  },
]);

export const infoContainer = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
    gap: '0.7rem',
  },
]);

export const infoWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  { gap: '0.6rem', maxWidth: 'calc(100% - 2rem - 0.7rem)' },
]);

export const infoTitleStyle = style([
  vars.fonts.head08_m_18,
  {
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
]);
