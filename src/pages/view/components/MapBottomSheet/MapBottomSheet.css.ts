import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const listContainer = style({
  paddingBottom: '1.4rem',
  width: '100%',
});

export const sectionContainer = style([
  flexGenerator('column', 'flex-start', 'center'),
  {
    gap: '1.2rem',
  },
]);

export const tabWrapper = style({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
});
