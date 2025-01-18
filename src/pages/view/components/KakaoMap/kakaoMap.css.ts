import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';

export const mapContainer = style({
  position: 'relative',
  width: '100%',
  height: '100dvh',
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
