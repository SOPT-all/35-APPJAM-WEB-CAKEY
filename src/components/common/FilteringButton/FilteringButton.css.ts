import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const filteringButtonStyle = style([
  flexGenerator(),
  {
    gap: '0.4rem',
    position: 'relative',
    width: '6.9rem',
    height: '2.4rem',
    padding: 0,
    cursor: 'pointer',
  },
]);

export const buttonTextStyle = style([
  vars.fonts.body06_r_16,
  {
    color: vars.colors.gray600,
  },
]);

export const iconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const ulStyle = style([
  flexGenerator('column'),
  {
    position: 'absolute',
    top: '3.6rem',
    right: 0,
    width: '9.5rem',
    height: '7rem',
    borderRadius: 4,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.18);',
    backgroundColor: vars.colors.white,
    zIndex: 2,
  },
]);

export const liStyle = style([
  vars.fonts.body06_r_16,
  {
    padding: '0.8rem 4.4rem 0.8rem 1rem',
    color: vars.colors.gray400,
    cursor: 'pointer',
    borderBottom: `1px solid ${vars.colors.gray200}`,
  },
]);

export const lastLiStyle = style({
  borderBottom: 'none',
});

export const selectedLiStyle = style({
  color: vars.colors.gray800,
});
