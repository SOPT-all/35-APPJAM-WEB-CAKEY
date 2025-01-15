import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const containerStyle = style({
  position: 'relative',
});

export const listContainer = style({
  display: 'flex',
  gap: '1rem',
  padding: '0 2rem',
  width: '100%',
  overflow: 'scroll',
  scrollBehavior: 'smooth',
});

export const scrollButton = recipe({
  base: style([
    {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      zIndex: 1,

      selectors: {
        '&:disabled': {
          display: 'none',
        },
      },
    },
  ]),
  variants: {
    position: {
      left: { left: '0.8rem' },
      right: { right: '0.8rem', transform: 'translateY(-50%) rotate(180deg)' },
    },
  },
});
