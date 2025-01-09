import { flexGenerator } from '@styles/generator';
import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const buttonStyle = style([
  vars.fonts.head04_b_16,
  {
    width: '100%',
    gap: '0.8rem',
    padding: '1.8rem 8.9rem',
    borderRadius: 9.6,
    color: vars.colors.gray1,
    backgroundColor: vars.colors.kakaoYello,
    textAlign: 'center',
  },
]);

export const flexButtonStyle = `${buttonStyle} ${flexGenerator()}`;

export const iconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});
