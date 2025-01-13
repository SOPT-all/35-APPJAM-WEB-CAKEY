import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const tabStyle = style({
  display: 'flex',
  color: '#D2D2D2',
});

export const tabButton = recipe({
  base: {
    borderBottom: `0.2rem solid #D2D2D2`,
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
          color: '#F24D4D',
          borderBottom: `0.2rem solid #F24D4D`,
        },
      ],
      store: [
        vars.fonts.head06_sb_16,
        {
          color: 'black',
          borderBottom: `0.2rem solid rgb(17, 3, 3)`,
        },
      ],
    },
  },
});
