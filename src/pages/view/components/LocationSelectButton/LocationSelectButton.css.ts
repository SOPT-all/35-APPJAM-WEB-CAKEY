import { flexGenerator } from '@styles/generator.css';
import { vars } from '@styles/theme.css';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = recipe({
  base: [
    flexGenerator('row', 'space-between'),
    {
      width: '100%',
      height: '5.6rem',
      maxHeight: '5.6rem',
      minHeight: '5.6rem',
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
