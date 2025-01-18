import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const listStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  padding: '2.6rem 2rem',
});

export const listContainer = style([
  flexGenerator('row', 'flex-start', 'flex-start'),
  {
    gap: '0.8rem',
  },
]);

export const listBox = style([
  flexGenerator('column', 'center', 'flex-start'),
  {
    gap: '1rem',
    color: vars.colors.gray600,
  },
]);

export const listTitle = style([
  flexGenerator(),
  vars.fonts.head03_b_18,
  {
    height: '2.4rem',
    color: vars.colors.gray700,
  },
]);

export const listHour = style([
  flexGenerator('row', 'flex-start', 'center'),
  vars.fonts.body06_r_16,
  {
    gap: '0.4rem',
    height: '2.4rem',
  },
]);

export const toggleButton = recipe({
  base: {
    cursor: 'pointer',
  },
  variants: {
    isToggleOpen: {
      true: { transform: 'rotate(180deg)' },
    },
  },
});

export const listContent = style([
  vars.fonts.body06_r_16,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
]);
