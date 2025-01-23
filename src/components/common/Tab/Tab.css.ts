import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';

export const tabStyle = recipe({
  base: {
    display: 'flex',
    width: '100%',
    color: vars.colors.gray300,
  },
  variants: {
    tabType: {
      viewMyPage: {},
      store: {
        position: 'sticky',
        top: '5.8rem',
        zIndex: 1,
        backgroundColor: vars.colors.white,
      },
    },
  },
});

export const tabButton = recipe({
  base: {
    borderBottom: `2px solid ${vars.colors.gray300}`,
    width: '100%',
    textAlign: 'center',
    backgroundColor: vars.colors.white,
    transition: 'color 0.2s ease-in',
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
          padding: '1.6rem 0',
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
        },
      ],
      store: [
        vars.fonts.head06_sb_16,
        {
          color: vars.colors.gray900,
        },
      ],
    },
  },
});

export const tabIndicator = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    height: '0.2rem',
    transition: 'left 0.3s ease-out',
  },
  variants: {
    tabType: {
      viewMyPage: [
        {
          background: vars.colors.red1,
        },
      ],
      store: [
        {
          background: vars.colors.gray900,
        },
      ],
    },
  },
});
