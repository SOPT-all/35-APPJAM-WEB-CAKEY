import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';

export const mapContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const buttonSectionStyle = style([
  flexGenerator('column'),
  {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    gap: '1.6rem',
  },
]);

export const mapStyle = recipe({
  base: {
    position: 'relative',
    width: '100%',
  },
  variants: {
    animateState: {
      default: { height: 'calc(55vh - 9rem)' },
      closed: { height: 'calc(87vh - 9rem)' },
      opened: {},
    },
  },
  defaultVariants: {
    animateState: 'default',
  },
});
