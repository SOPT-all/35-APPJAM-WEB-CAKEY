import { globalStyle } from '@vanilla-extract/css';
import { reset } from '@styles/layers.css';

globalStyle('*', {
  '@layer': {
    [reset]: {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  },
});

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    '@layer': {
      [reset]: {
        display: 'block',
      },
    },
  }
);

globalStyle('body', {
  '@layer': {
    [reset]: {
      lineHeight: '1',
    },
  },
});

globalStyle('ol, ul', {
  '@layer': {
    [reset]: {
      listStyle: 'none',
    },
  },
});

globalStyle('blockquote, q', {
  '@layer': {
    [reset]: {
      quotes: 'none',
    },
  },
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  '@layer': {
    [reset]: {
      content: '',
    },
  },
});

globalStyle('table', {
  '@layer': {
    [reset]: {
      borderCollapse: 'collapse',
      borderSpacing: '0',
    },
  },
});

globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    '@layer': {
      [reset]: {
        all: 'unset',
        display: 'revert',
      },
    },
  }
);

/**
 * 기본 box-sizing border-box로 설정
 * Preferred box-sizing value
 */
globalStyle('*, *::before, *::after', {
  '@layer': {
    [reset]: {
      boxSizing: 'border-box',
    },
  },
});

/**
 * 모바일 사파리에서 가로 모드로 전환할 때 글꼴 크기가 자동으로 커지는 현상을 방지
 * Fix mobile Safari increase font-size on landscape mode
 */
globalStyle('html', {
  '@layer': {
    [reset]: {
      MozTextSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none',
      textSizeAdjust: 'none',
    },
  },
});

/**
 * a 태그와 button 태그에 pointer 재적용
 * Reapply the pointer cursor for anchor tags
 */
globalStyle('a, button', {
  '@layer': {
    [reset]: {
      cursor: 'pointer',
    },
  },
});

/**
 * 리스트 스타일 제거 (불릿/넘버)
 * Remove list styles (bullets/numbers)
 */
globalStyle('ol, ul, menu, summary', {
  '@layer': {
    [reset]: {
      listStyle: 'none',
    },
  },
});

/**
 * 이미지 요소가 컨테이너의 크기를 넘지 않도록 설정
 * For images to not be able to exceed their container
 */
globalStyle('img', {
  '@layer': {
    [reset]: {
      maxInlineSize: '100%',
      maxBlockSize: '100%',
    },
  },
});
