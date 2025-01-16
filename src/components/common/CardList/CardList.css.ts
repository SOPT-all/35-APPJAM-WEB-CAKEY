import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const cardListContainer = style([
  flexGenerator('column'),
  {
    gap: '1.2rem',
    width: '100%',
  },
]);

export const cardListTextWrapper = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
  },
]);

export const countNumberStyle = style([
  vars.fonts.body04_m_16,
  {
    color: vars.colors.red1,
  },
]);

export const countTextStyle = style([
  vars.fonts.body04_m_16,
  {
    color: vars.colors.gray800,
  },
]);

export const storeCardListWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    gap: '1.2rem',
  },
]);
export const designCardListWrapper = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.2rem 1.5rem',
});

export const cardListNullTextStyle = style([
  vars.fonts.body04_m_16,
  flexGenerator(),
  { color: vars.colors.gray400, height: 'calc(100dvh - 23.6rem - 1.2rem)' },
]);
