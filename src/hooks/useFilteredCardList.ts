import { startTransition, useState } from 'react';

import { OptionType } from '@types';

const useFilteredCardList = () => {
  const [option, setOption] = useState<OptionType>('latest');

  const handleOptionSelect = (newOption: OptionType) => {
    startTransition(() => {
      setOption(newOption);
    });
  };

  return {
    option,
    handleOptionSelect,
  };
};

export default useFilteredCardList;
