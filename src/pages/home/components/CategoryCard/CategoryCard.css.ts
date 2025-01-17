import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonWrapper = style([
  flexGenerator('column', 'flex-start'),
  {
    gap: '0.4rem',
    width: '100%',
    height: '8.7rem',
    padding: '1.4rem 1rem',
    borderRadius: '10px',
    border: `1px solid ${vars.colors.gray200}`,
    position: 'relative',
  },
]);

export const categoryTextStyle = style([
  vars.fonts.head02_b_20,
  flexGenerator('row', 'flex-start'),
  {
    color: vars.colors.black,
    width: '100%',
  },
]);

export const hashtagTextStyle = style([
  vars.fonts.body08_r_12,
  {
    color: vars.colors.gray600,
  },
]);

export const hashtagTextWrapper = style([
  flexGenerator('row', 'flex-start'),
  { gap: '0.6rem', width: '100%' },
]);

export const categoryIconWrapper = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
});
