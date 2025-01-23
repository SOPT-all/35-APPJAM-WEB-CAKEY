import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const modalContainer = style([
  flexGenerator('row', 'center', 'flex-end'),
  {
    gap: '1.6rem',
    padding: '2rem',
    width: '100%',
  },
]);

export const imageSection = style({
  width: '16rem',
  height: '16rem',
  flexShrink: 0,
});

export const infoSection = style([
  flexGenerator('column'),
  {
    gap: '1.2rem',
    width: '100%',
  },
]);

export const textWrapper = style([
  flexGenerator('column'),
  {
    gap: '0.8rem',
    width: '100%',
  },
]);

export const storeNameWrapper = style([
  flexGenerator('row', 'space-between'),
  vars.fonts.head05_sb_20,
  {
    width: '100%',
    color: vars.colors.black,
  },
]);

export const addressWrapper = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '0.6rem',
    width: '100%',
  },
]);

export const addressStyle = style([
  vars.fonts.body07_r_14,
  {
    height: '3.4rem',
    color: vars.colors.gray600,
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    wordBreak: 'break-all',
  },
]);
