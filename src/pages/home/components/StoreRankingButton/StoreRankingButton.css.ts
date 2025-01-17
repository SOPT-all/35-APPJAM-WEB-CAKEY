import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const rankingContainer = style([
  flexGenerator('row', 'space-between', 'center'),
  { width: '100%', maxWidth: '100%', gap: '1.2rem', overflow: 'hidden' },
]);

export const rankingWrapper = style([
  flexGenerator('row', 'flex-start'),
  { gap: '1.3rem', flex: '1', overflow: 'hidden' },
]);

export const labelStyle = style({ width: '2.3rem' });

export const rankingLeftBox = style([
  flexGenerator('row', 'flex-start'),
  { gap: '0.6rem', flex: '1', overflow: 'hidden' },
]);

export const storeNameText = style([
  vars.fonts.body04_m_16,
  {
    color: vars.colors.gray800,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);

export const isLiked = style([
  vars.fonts.body08_r_12,
  { color: vars.colors.gray400 },
]);

export const rankingRightBox = style([
  flexGenerator(),
  { gap: '1.2rem', flexShrink: 0 },
]);
