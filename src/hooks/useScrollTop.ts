import { useEffect } from 'react';

export const useScrollTop = (path: string) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [path]);
};

export const useSmoothScrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
