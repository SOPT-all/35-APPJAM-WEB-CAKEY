import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const storeCardWrapper = style([
  flexGenerator('column'),
  {
    gap: '1rem',
    padding: '1.8rem 1.4rem',
    border: `1px solid ${vars.colors.gray200}`,
    borderRadius: '8px',
    backgroundColor: vars.colors.white,
  },
]);

export const storeCardLayout = style([
  flexGenerator('row', 'space-between', 'flex-start'),
  { gap: '1.2rem' },
]);

export const storeCardInformation = style([
  flexGenerator('column', 'center', 'flex-start'),
  { gap: '0.6rem' },
]);

export const storeNameLabel = style([
  flexGenerator('row', 'flex-start', 'center'),
  { gap: '0.6rem' },
]);

export const storeNameStyle = style({});

export const storeAddressStyle = style({});

export const storeCardimageList = style({});
