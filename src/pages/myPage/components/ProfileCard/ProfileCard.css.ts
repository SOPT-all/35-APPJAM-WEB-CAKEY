import { style } from '@vanilla-extract/css';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const profileImg = style({ width: '8rem', height: '8rem' });

export const profileContainer = style([
  flexGenerator('column'),
  { gap: '1.6rem' },
]);

export const userInfo = style([flexGenerator('column'), { gap: '0.4rem' }]);

export const profileText = style([
  vars.fonts.head05_sb_20,
  { color: vars.colors.gray800 },
]);

export const profileEmail = style([
  vars.fonts.body08_r_12,
  { color: vars.colors.gray400 },
]);

export const profileSubText = style([
  vars.fonts.body07_r_14,
  {
    color: vars.colors.gray400,
  },
]);

export const zzim = style({ color: vars.colors.red1 });
