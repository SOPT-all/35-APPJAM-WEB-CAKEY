import { useState } from 'react';

import { BottomSheetState } from '@types';

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
