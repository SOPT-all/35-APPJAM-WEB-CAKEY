import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

const createButtonSizeStyles = (
  font: object,
  height: string,
  padding: string
) => [font, { height, padding }];

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
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: '10px',
  },
  variants: {
    size: {
      small: createButtonSizeStyles(
        vars.fonts.body02_sb_14,
        '4,4rem',
        '1.25rem'
      ),
      medium: createButtonSizeStyles(
        vars.fonts.head06_sb_16,
        '4.8rem',
        '1.45rem'
      ),
      large: createButtonSizeStyles(vars.fonts.head03_b_18, '6rem', '2.05rem'),
    },

    color: {
      blue: createButtonColorStyles(vars.colors.mainBlue, vars.colors.white),
      gray: createButtonColorStyles(vars.colors.gray7, vars.colors.gray3),
      stroke: createButtonColorStyles(
        vars.colors.white,
        vars.colors.mainBlue,
        `1px solid ${vars.colors.mainBlue}`
      ),
    },
  },
});
