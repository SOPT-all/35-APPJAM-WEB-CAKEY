import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const searchModalContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '2.8rem 0rem 2.2rem 0rem',
  gap: '2.4rem',
});

export const carouselWrapper = style({
  overflow: 'auto',
  width: '100%',
});

export const infoWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.2rem',
  padding: '0rem 2.8rem 0rem 2.8rem',
});

export const textWrapper = style({
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.3rem',
});

export const storeNameStyle = style([
  vars.fonts.head05_sb_20,
  {
    color: vars.colors.black,
    // width: 'fit-content',
  },
]);

export const buttonWrapper = style({
    width: '12.1rem',
});
