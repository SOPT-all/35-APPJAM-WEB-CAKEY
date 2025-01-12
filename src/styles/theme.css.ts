import { createGlobalTheme } from '@vanilla-extract/css';


export const vars = createGlobalTheme(':root', {
  colors: {
    //main-color
    mainBlue: '#4863FF',
    blue2: '#647BFF',
    blue3: '#97A6FF',
    blue4: '#D2D9FF',
    blue5: '#EDF0FF',
    subYellow: '#FFE374',
    yellow2: '#FFEDA7',
    yellow3: '#FFF6D4',
    yellow4: '#FFFBEC',

    //gray-scale
    black: '#171719',
    white: '#FFFFFF',
    gray1: '#46474C',
    gray2: '#5A5C63',
    gray3: '#878A93',
    gray4: '#AEB0B6',
    gray5: '#C2C4C8',
    gray6: '#DBDCDF',
    gray7: '#F7F7F8',

    kakaoYello: '#FAE100',
  },

  fonts: {
    // headline
    head01_b_24: {
      fontWeight: '700',
      fontSize: '2.4rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head02_b_20: {
      fontWeight: '700',
      fontSize: '2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head03_b_18: {
      fontWeight: '700',
      fontSize: '1.8rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head04_b_16: {
      fontWeight: '700',
      fontSize: '1.6rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head05_sb_20: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head06_sb_16: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head07_m_20: {
      fontWeight: '500',
      fontSize: '2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head08_m_18: {
      fontWeight: '500',
      fontSize: '1.8rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    head09_r_18: {
      fontWeight: '400',
      fontSize: '2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },

    // body
    body01_b_14: {
      fontWeight: '700',
      fontSize: '1.4rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body02_sb_14: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body03_sb_12: {
      fontWeight: '600',
      fontSize: '1.2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body04_m_16: {
      fontWeight: '500',
      fontSize: '1.6rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body05_m_14: {
      fontWeight: '500',
      fontSize: '1.4rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body06_r_16: {
      fontWeight: '400',
      fontSize: '1.6rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body07_r_14: {
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body08_r_12: {
      fontWeight: '400',
      fontSize: '1.2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body09_r_10: {
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
    body10_l_12: {
      fontWeight: '300',
      fontSize: '1.2rem',
      lineHeight: 'normal',
      letterSpacing: '-0.6px',
    },
  },
});
