import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const StoreTab = style({
  display: 'flex',
  width: '100%',
});

export const tabButton = style({
  color: '#D2D2D2',
  borderBottom: `0.2rem solid #D2D2D2`,
  width: '100%',
  padding: '1.4rem 0',
  textAlign: 'center',
  fontFamily: vars.fonts.head03_b_18.fontFamily,
  fontWeight: vars.fonts.head03_b_18.fontWeight,
  fontSize: vars.fonts.head03_b_18.fontSize,
  lineHeight: vars.fonts.head03_b_18.lineHeight,
  letterSpacing: vars.fonts.head03_b_18.letterSpacing,
});

export const activeTab = style({
  color: '#F24D4D',
  borderBottom: `0.2rem solid #F24D4D`,
});
