import { createGlobalTheme, fontFace } from '@vanilla-extract/css';

const pretendard = fontFace({
  src: "url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css')",
});

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
  },

  fonts: {
    // headline
    head01_b_24: {
      fontFamily: pretendard,
      fontWeight: 'bold',
      fontSize: '2.4rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head02_b_20: {
      fontFamily: pretendard,
      fontWeight: 'bold',
      fontSize: '2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head03_b_18: {
      fontFamily: pretendard,
      fontWeight: 'bold',
      fontSize: '1.8rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head04_b_16: {
      fontFamily: pretendard,
      fontWeight: 'bold',
      fontSize: '1.6rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head05_sb_20: {
      fontFamily: pretendard,
      fontWeight: 'semi-bold',
      fontSize: '2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head06_sb_16: {
      fontFamily: pretendard,
      fontWeight: 'semi-bold',
      fontSize: '1.6rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head07_m_20: {
      fontFamily: pretendard,
      fontWeight: 'medium',
      fontSize: '2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head08_m_18: {
      fontFamily: pretendard,
      fontWeight: 'medium',
      fontSize: '1.8rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    head09_r_18: {
      fontFamily: pretendard,
      fontWeight: 'regular',
      fontSize: '2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },

    // body
    body01_b_14: {
      fontFamily: pretendard,
      fontWeight: 'bold',
      fontSize: '1.4rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body02_sb_14: {
      fontFamily: pretendard,
      fontWeight: 'semi-bold',
      fontSize: '1.4rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body03_sb_12: {
      fontFamily: pretendard,
      fontWeight: 'semi-bold',
      fontSize: '1.2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body04_m_16: {
      fontFamily: pretendard,
      fontWeight: 'medium',
      fontSize: '1.6rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body05_m_14: {
      fontFamily: pretendard,
      fontWeight: 'medium',
      fontSize: '1.4rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body06_r_16: {
      fontFamily: pretendard,
      fontWeight: 'regular',
      fontSize: '1.6rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body07_r_14: {
      fontFamily: pretendard,
      fontWeight: 'regular',
      fontSize: '1.4rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body08_r_12: {
      fontFamily: pretendard,
      fontWeight: 'regular',
      fontSize: '1.2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body09_r_10: {
      fontWeight: 'regular',
      fontSize: '1rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
    body10_l_12: {
      fontFamily: pretendard,
      fontWeight: 'light',
      fontSize: '1.2rem',
      lineHeight: 'auto',
      letterSpacing: '-0.6px',
    },
  },
});
