import { useCallback } from 'react';

const useClipboard = () => {
  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(text.trim());
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  return { copyToClipboard };
};

export default useClipboard;
