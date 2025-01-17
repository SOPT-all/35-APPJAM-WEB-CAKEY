import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonWrapper = style([
  flexGenerator('column'),
  {
    gap: '1.8rem',
    width: '100%',
    padding: '1.4rem 1rem',
    borderRadius: '10px',
    border: `1px solid ${vars.colors.gray200}`,
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
  vars.fonts.body05_m_14,
  {
    color: vars.colors.gray600,
  },
]);

export const hashtagTextWrapper = style([
  flexGenerator('row', 'flex-end'),
  { gap: '0.6rem', width: '100%' },
]);
