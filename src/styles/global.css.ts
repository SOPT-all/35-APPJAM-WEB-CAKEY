import { globalStyle } from '@vanilla-extract/css';

import { base } from '@styles/layers.css';
import './reset.css';

// :root 변수 정의
globalStyle(':root', {
  '@layer': {
    [base]: {
      vars: {
        '--min-width': '375px',
        '--max-width': '430px',
      },
    },
  },
});

// HTML, Body 스타일
globalStyle('html, body', {
  '@layer': {
    [base]: {
      fontSize: '62.5%',
      scrollbarWidth: 'none',
      margin: 0,
      padding: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      scrollBehavior: 'smooth',
    },
  },
});

// 폰트 설정
globalStyle('body', {
  fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
});

// A 태그 스타일
globalStyle('a', {
  '@layer': {
    [base]: {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
});

// Select 태그 스타일
globalStyle('select', {
  '@layer': {
    [base]: {
      background: '#fff',
    },
  },
});

// U 태그 스타일
globalStyle('u', {
  '@layer': {
    [base]: {
      textDecorationLine: 'underline',
      textUnderlinePosition: 'from-font',
    },
  },
});

// #root 스타일
globalStyle('#root', {
  '@layer': {
    [base]: {
      width: '100%',
      minWidth: 'var(--min-width)',
      maxWidth: 'var(--max-width)',
      minHeight: '100dvh',
      backgroundColor: '#fff',
      margin: '0 auto',
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.4)',
    },
  },
});

// Webkit 스크롤바 숨기기
globalStyle('::-webkit-scrollbar', {
  '@layer': {
    [base]: {
      display: 'none',
    },
  },
});
