import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const footerLayout = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    width: '100%',
    height: '14.2rem',
    backgroundColor: vars.colors.gray200,
    padding: '2.2rem 2rem 2.1rem',
    gap: '4.7rem',
  },
]);

export const footerInfoTextWrapper = style([
  flexGenerator('column', 'flex-start', 'flex-start'),
  {
    gap: '0.6rem',
  },
]);

export const footerInfoText = style([
  vars.fonts.body08_r_12,
  {
    color: vars.colors.gray500,
  },
]);

export const footerSubWrapper = style([
  flexGenerator('row', 'space-between'),
  { width: '100%' },
]);

export const footerSubTextWrapper = style([flexGenerator(), { gap: '1.3rem' }]);

export const footerSubText = style([
  vars.fonts.body09_r_10,
  { color: vars.colors.gray600 },
]);
