import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const tabStyle = style({
  display: 'flex',
  color: vars.colors.gray300,
});

export const tabButton = recipe({
  base: {
    borderBottom: `0.2rem solid ${vars.colors.gray300}`,
    width: '100%',
    textAlign: 'center',
  },
  variants: {
    tabType: {
      viewMyPage: [
        vars.fonts.head08_m_18,
        {
          padding: '1.4rem 0',
        },
      ],
      store: [
        vars.fonts.body04_m_16,
        {
          padding: '1rem 0',
        },
      ],
    },
  },
});

export const clickTab = recipe({
  base: {},
  variants: {
    tabType: {
      viewMyPage: [
        vars.fonts.head03_b_18,
        {
          color: vars.colors.red1,
          borderBottom: `0.2rem solid ${vars.colors.red1}`,
        },
      ],
      store: [
        vars.fonts.head06_sb_16,
        {
          color: vars.colors.gray900,
          borderBottom: `0.2rem solid ${vars.colors.gray900}`,
        },
      ],
    },
  },
});
