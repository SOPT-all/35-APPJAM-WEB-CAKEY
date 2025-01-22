import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const viewPageContainer = style({
  position: 'relative',
  width: '100%',
});

export const locationButtonWrapper = style({
  position: 'absolute',
  width: '100%',
  padding: '0 2rem 1.2rem',
  backgroundColor: vars.colors.yellow2,
  zIndex: 1,
});
