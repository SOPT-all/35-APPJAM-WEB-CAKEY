import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const storeCardContainer = style([
  flexGenerator('column'),
  {
    gap: '1rem',
    padding: '1.8rem 1.4rem',
    border: `1px solid ${vars.colors.gray200}`,
    borderRadius: '8px',
    backgroundColor: vars.colors.white,
  },
]);

export const storeCardWrapper = style([
  flexGenerator('row', 'space-between', 'flex-start'),
  { width: '100%', gap: '1.2rem' },
]);

export const storeCardInformation = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '0.6rem',
    width: '100%',
    overflow: 'hidden',
  },
]);

export const storeNameLabel = style([
  flexGenerator('row', 'flex-start', 'center'),
  { gap: '0.6rem' },
]);

export const storeNameStyle = style([
  vars.fonts.head05_sb_20,
  {
    color: vars.colors.black,
  },
]);

export const storeAddressStyle = style([
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '100%',
  },
]);

export const storeCardImageList = style([flexGenerator(), { gap: '0.3rem' }]);

export const roundedLeftImage = style({
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  overflow: 'hidden',
});

export const roundedRightImage = style({
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
  overflow: 'hidden',
});
