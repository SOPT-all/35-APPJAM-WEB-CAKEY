import { useCallback, useRef } from 'react';

export function useDebounce<T>(
  callback: (args: T) => void,
  delay: number = 500
): {
  debouncedFunction: (args: T) => void;
  clear: () => void;
} {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (args: T) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callback(args);
      }, delay);
    },
    [callback, delay]
  );

  const clear = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return { debouncedFunction, clear };
}
