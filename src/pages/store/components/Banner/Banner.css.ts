import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const bannerContainer = style([
  flexGenerator('column', 'center', 'flex-start'),
  { width: '100%', padding: '0 2rem' },
]);

export const locationStyle = style([
  flexGenerator(),
  vars.fonts.body04_m_16,
  {
    margin: '0.6rem 0 1.8rem',
    width: '100%',
    height: '3rem',
    color: vars.colors.gray600,
  },
]);

export const stationText = style({
  margin: '0 1rem 0 0.2rem',
});

export const line = style({
  flex: 1,
  height: '0.1rem',
  backgroundColor: vars.colors.gray200,
});

export const storeInfoWrapper = style([
  flexGenerator('row', 'space-between', 'flex-start'),
  {
    marginBottom: '1.6rem',
    gap: '1.4rem',
    width: '100%',
  },
]);

export const storeInfoBox = style([
  flexGenerator('column', 'center', 'flex-start'),
  vars.fonts.head01_b_24,
  {
    gap: '1.6rem',
    color: vars.colors.black,
  },
]);

export const storeAddress = style([
  vars.fonts.body07_r_14,
  {
    width: '100%',
    color: vars.colors.gray500,
  },
]);
