import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { flexGenerator } from '@styles/generator.css';

const createButtonPlatformStyles = (
  backgroundColor: string,
  color: string
) => ({
  backgroundColor,
  color,
});

export const buttonStyle = recipe({
  base: [
    vars.fonts.head04_b_16,
    flexGenerator(),
    {
      width: '100%',
      gap: '0.8rem',
      padding: '1.8rem 8.9rem',
      borderRadius: 9.6,
    },
  ],
  variants: {
    platform: {
      kakao: createButtonPlatformStyles(
        vars.colors.kakaoYello,
        vars.colors.gray1
      ),
    },
  },
});

export const iconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});
