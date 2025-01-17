import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const rankingContainer = style([
  flexGenerator('row', 'space-between', 'center'),
  { width: '100%', gap: '1.2rem' },
]);

export const rankingWrapper = style([flexGenerator(), { gap: '1.3rem' }]);

export const rankingLeftBox = style([flexGenerator(), { gap: '0.6rem' }]);

export const storeNameText = style([
  vars.fonts.body04_m_16,
  { color: vars.colors.gray800 },
]);

export const isLiked = style([
  vars.fonts.body08_r_12,
  { color: vars.colors.gray400 },
]);

export const rankingRightBox = style([flexGenerator(), { gap: '1.2rem' }]);

export const rightArrowButton = style({ width: '2rem' });
