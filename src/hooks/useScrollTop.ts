import { useEffect } from 'react';

const useScrollTop = (path: string) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [path]);
};

export default useScrollTop;
