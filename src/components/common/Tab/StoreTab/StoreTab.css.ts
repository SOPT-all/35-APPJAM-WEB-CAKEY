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
  padding: '1rem 0',
  textAlign: 'center',
  fontFamily: vars.fonts.body04_m_16.fontFamily,
  fontWeight: vars.fonts.body04_m_16.fontWeight,
  fontSize: vars.fonts.body04_m_16.fontSize,
  lineHeight: vars.fonts.body04_m_16.lineHeight,
  letterSpacing: vars.fonts.body04_m_16.letterSpacing,
});

export const activeTab = style({
  color: '#313131',
  borderBottom: `0.2rem solid #313131`,
  fontWeight: vars.fonts.head06_sb_16.fontWeight,
});
