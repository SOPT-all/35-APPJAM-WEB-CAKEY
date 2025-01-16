import { style } from '@vanilla-extract/css';

export const mapContainer = style({
  position: 'relative',
  width: '100%',
  height: '100dvh',
});

export const iconButtonWrapperStyle = style({
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  zIndex: '1',
});
