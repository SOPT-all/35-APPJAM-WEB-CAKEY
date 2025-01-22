import { useState } from 'react';

import { OptionType } from '@types';

const useFilteredCardList = () => {
  const [option, setOption] = useState<OptionType>('latest');

  const handleOptionSelect = (newOption: OptionType) => {
    setOption(newOption);
    console.log(option);
  };

  return {
    option,
    handleOptionSelect,
  };
};

export default useFilteredCardList;
