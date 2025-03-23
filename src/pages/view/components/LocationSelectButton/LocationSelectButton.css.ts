import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';

export const buttonStyle = recipe({
  base: [
    flexGenerator('row', 'space-between'),
    {
      width: '100%',
      height: '5.6rem',
      flexShrink: 0,
      padding: '1.4rem 1rem 1.4rem 1.8rem',
      backgroundColor: vars.colors.white,
      borderRadius: 10,
    },
  ],
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.yellow2,
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
});

export const buttonTextWrapper = style([flexGenerator(), {
  gap: '0.8rem'
}])

export const buttonLabelStyle = style([
  vars.fonts.body03_sb_12,
  {
  color: vars.colors.white,
  backgroundColor: vars.colors.gray500,
  padding: '0.4rem 1rem',
  borderRadius: '50px'
}])

export const buttonTextStyle = styleVariants({
  true: [
    vars.fonts.head08_m_18,
    {
      color: vars.colors.gray900,
    },
  ],
  false: [
    vars.fonts.head09_r_18,
    {
      color: vars.colors.gray500,
    },
  ],
});
