import { style } from '@vanilla-extract/css';

import { vars } from '@styles/theme.css';

export const gridStyle = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export const liStyle = style({
  position: 'relative',
  cursor: 'pointer',
});

export const dimmedStyle = style([
  vars.fonts.body02_sb_14,
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: vars.colors.dimmed,
    color: vars.colors.white,
  },
]);
