import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const cardStyle = recipe({
  base: style([
    {
      position: 'relative',
      padding: '1.2rem 1rem 0',
      width: '11.2rem',
      height: '18.2rem',
      flexShrink: '0',

      borderRadius: '10px',
      border: `1px solid ${vars.colors.gray200}`,
      overflow: 'hidden',
      transition: 'width 0.3s ease, background-color 0.3s ease',
      cursor: 'pointer',
    },
  ]),
  variants: {
    isSelected: {
      false: { backgroundColor: vars.colors.white },
      true: { backgroundColor: vars.colors.gray100, width: '15rem' },
    },
  },
});

export const textContainer = style([
  flexGenerator('column', 'center', 'flex-start'),
  vars.fonts.body08_r_12,
  { gap: '0.6rem' },
]);

export const sizeContainer = style([
  flexGenerator('row', 'space-between', 'center'),
  vars.fonts.head06_sb_16,
  { width: '100%' },
]);

export const sizeImgContainer = recipe({
  base: style([
    {
      position: 'absolute',
      bottom: '1rem',
      transition: 'right 0.3s ease',
    },
  ]),
  variants: {
    sizeName: {
      도시락: { right: -45 / 2 },
      미니: { right: -64 / 2 },
      '1호': { right: -81 / 2 },
      '2호': { right: -98 / 2 },
      '3호': { right: -112 / 2 },
    } as Record<string, { right?: string | number }>,
    isSelected: {
      false: {},
      true: { right: '0.6rem' },
    },
  },
  compoundVariants: [
    {
      variants: { isSelected: true, sizeName: '3호' },
      style: {
        right: '-2rem',
      },
    },
  ],
});
