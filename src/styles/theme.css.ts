import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    // Main colors
    red1: '#F24D4D',
    red2: '#FF7878',
    red3: '#FFF4F4',
    yellow1: '#FFF7BE',
    yellow2: '#FFFCE0',
    yellow3: '#FFFDEF',

    // Blue colors
    blue1: '#6A88FF',
    blue2: 'rgba(65, 103, 255, 0.8)', // 80% opacity

    // Opacity (gray with different transparencies)
    number: 'rgba(43, 43, 43, 0.7)', // 70% opacity
    dimmed: 'rgba(0, 0, 0, 0.5)', // 50% opacity
    like_off: 'rgba(196, 196, 196, 0.65)', // 65% opacity

    // Gray scale
    gray900: '#1D1D1D',
    gray800: '#313131',
    gray700: '#454545',
    gray600: '#6A6A6A',
    gray500: '#828282',
    gray400: '#A9A9A9',
    gray300: '#D2D2D2',
    gray200: '#ECECEC',
    gray100: '#F8F8F8',

    // Common colors
    black: '#171717',
    white: '#FFFFFF',

    // Kakao colors
    kakao_brown: '#000000',
    kakao_yellow: '#FAE100',
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
