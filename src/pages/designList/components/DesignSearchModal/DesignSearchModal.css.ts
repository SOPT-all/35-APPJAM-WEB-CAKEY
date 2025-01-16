import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const searchModalContainer = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    padding: '2.8rem 0rem 2.2rem 0rem',
    gap: '2.4rem',
  },
]);

export const carouselWrapper = style({
  overflow: 'auto',
  width: '100%',
});

export const infoWrapper = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
    gap: '1.2rem',
    padding: '0rem 2.8rem 0rem 2.8rem',
  },
]);

export const textWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    width: 'fit-content',
    gap: '0.3rem',
  },
]);

export const storeNameStyle = style([
  vars.fonts.head05_sb_20,
  {
    color: vars.colors.black,
  },
]);

export const buttonWrapper = style({
  width: '12.1rem',
});
