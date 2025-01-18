import { useState } from 'react';

type BottomSheetState = 'closed' | 'default' | 'opened';

export const useBottomSheet = () => {
  const [animateState, setAnimateState] = useState<BottomSheetState>('default');

  const handleAnimateChange = (animate: BottomSheetState) => {
    setAnimateState(animate);
  };

  return {
    animateState,
    handleAnimateChange,
  };
};
