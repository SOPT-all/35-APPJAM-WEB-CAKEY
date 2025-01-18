import { useState } from 'react';

import { BottomSheetState } from '@types';

export const useBottomSheet = () => {
  const [animateState, setAnimateState] = useState<BottomSheetState>('default');

  const handleAnimateChange = (animate: BottomSheetState) => {
    console.log("발동");
    setAnimateState(animate);
  };

  return {
    animateState,
    handleAnimateChange,
  };
};
