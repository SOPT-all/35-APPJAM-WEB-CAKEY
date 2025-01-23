import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const listContainer = style({
  paddingBottom: '1.4rem',
  width: '100%',
  padding: '0rem 2rem',
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

export const spacing = style({
  height: '1.4rem',
});
