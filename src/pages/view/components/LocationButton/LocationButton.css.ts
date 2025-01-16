import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonStyle = style([
  flexGenerator('row', 'space-between'),
  {
    width: '100%',
    padding: '0.8rem',
    border: `1px solid ${vars.colors.gray200}`,
    borderRadius: 10,
    backgroundColor: vars.colors.white,
    cursor: 'pointer',
  },
]);

export const sectionStyle = style({
  display: 'flex',
  gap: '0.5rem',
});

export const locationBox = style([
  flexGenerator(),
  {
    gap: '0.8rem',
  },
]);

export const currentLocationTextStyle = style([
  vars.fonts.head04_b_16,
  {
    color: vars.colors.gray900,
  },
]);

export const placeholderStyle = style([
  vars.fonts.body06_r_16,
  {
    color: vars.colors.gray500,
  },
]);
