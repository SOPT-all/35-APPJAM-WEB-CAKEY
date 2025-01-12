import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

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
        vars.colors.kakao_yellow,
        vars.colors.kakao_brown
      ),
    },
  },
});

export const iconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
});
