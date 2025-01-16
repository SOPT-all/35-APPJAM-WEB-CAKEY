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
    gap: '0.7rem',
    padding: '0rem 2.8rem 0rem 2.8rem',
  },
]);

export const textWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    maxWidth: 'calc(100% - 12.1rem - 0.7rem)',
    gap: '0.3rem',
  },
]);

export const storeNameStyle = style([
  vars.fonts.head05_sb_20,
  {
    color: vars.colors.black,
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
]);

export const buttonWrapper = style({
  minWidth: '12.1rem',
});
