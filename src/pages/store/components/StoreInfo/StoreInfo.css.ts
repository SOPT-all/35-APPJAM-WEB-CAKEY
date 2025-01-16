import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { flexGenerator } from '@styles/generator.css';

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  padding: '2.6rem 2rem 11.5rem',
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

export const dayOff = style([
  flexGenerator(),
  vars.fonts.body06_r_16,
  {
    gap: '0.4rem',
    color: vars.colors.gray600,
  },
]);

export const toggleButton = recipe({
  base: style([
    {
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
  ]),
  variants: {
    isOpen: {
      false: {},
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
    color: vars.colors.gray600,
  },
]);
