import Lottie from 'lottie-react';

import {
  anivButton,
  bdayButton,
  cheerButton,
  seasonButton,
} from 'src/assets/lotties';

import {
  IcSearchCategoryAnivUnactivate,
  IcSearchCategoryBdayUnactivate,
  IcSearchCategoryCheerUnactivate,
  IcSearchCategorySeasonUnactivate,
} from '@svgs';

export const CATEGORY_COMPONENT = {
  ANNIV: {
    text: '기념일',
    active: <Lottie animationData={anivButton} loop />,
    unActive: <IcSearchCategoryAnivUnactivate width={72} height={72}/>,
  },
  BIRTH: {
    text: '생일',
    active: <Lottie animationData={bdayButton} loop />,
    unActive: <IcSearchCategoryBdayUnactivate width={72} height={72}/>,
  },
  CHEER: {
    text: '응원',
    active: <Lottie animationData={cheerButton} loop />,
    unActive: <IcSearchCategoryCheerUnactivate width={72} height={72}/>,
  },
  SEASON: {
    text: '시즌',
    active: <Lottie animationData={seasonButton} loop />,
    unActive: <IcSearchCategorySeasonUnactivate width={72} height={72}/>,
  },
};
