import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const containerStyle = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '1rem',
    width: '100%',
    padding: '1.8rem 2.4rem',
    borderRadius: '10px',
    backgroundColor: vars.colors.gray100,
  },
]);

export const buttonWrapper = style([
  flexGenerator('row', 'space-between'),
  vars.fonts.head03_b_18,
  {
    width: '100%',
    height: '2.8rem',
    color: vars.colors.gray700,
  },
]);

export const orderButton = style([
  flexGenerator(),
  vars.fonts.body08_r_12,
  {
    padding: '0.6rem 0.4rem',
  },
]);

export const orderGuideSubText = style([
  vars.fonts.body07_r_14,
  {
    width: '100%',
    color: vars.colors.red2,
  },
]);
