import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

const createButtonSizeStyles = (
  font: object,
  height: string,
) => [font, { height }];

const createButtonColorStyles = (
  backgroundColor: string,
  color: string,
  border?: string
) => ({
  backgroundColor,
  color,
  border,
});

export const buttonStyle = recipe({
  base: [
    flexGenerator(),
    {
      width: '100%',
      borderRadius: '10px',
    },
  ],
  variants: {
    size: {
      small: createButtonSizeStyles(
        vars.fonts.body02_sb_14,
        '4,4rem',
      ),
      medium: createButtonSizeStyles(
        vars.fonts.head06_sb_16,
        '4.8rem',
      ),
      large: createButtonSizeStyles(vars.fonts.head03_b_18, '6rem'),
    },

    color: {
      red: createButtonColorStyles(
        vars.colors.red1,
        vars.colors.white,
      ),
      gray: createButtonColorStyles(
        vars.colors.gray200,
        vars.colors.gray500,
      ),
      stroke: createButtonColorStyles(
        vars.colors.white,
        vars.colors.red1,
        `1px solid ${vars.colors.red1}`
      ),
    },

    // isDisabled: {
    //   true: createButtonColorStyles(
    //     vars.colors.gray7,
    //     vars.colors.gray3,
    //   ),
    // },
  },
});
