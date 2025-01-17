import { anivButton, bdayButton, cheerButton, seasonButton } from '@lotties';
import Lottie from 'lottie-react';

import {
  IcHomeAniv,
  IcHomeBday,
  IcHomeCheer,
  IcHomeSeason,
  IcSearchCategoryAnivUnactivate,
  IcSearchCategoryBdayUnactivate,
  IcSearchCategoryCheerUnactivate,
  IcSearchCategorySeasonUnactivate,
} from '@svgs';

import { CategoryType, SubCategoryType } from '@types';

export const CATEGORY: CategoryType[] = ['BIRTH', 'CHEER', 'ANNIV', 'SEASON'];

export const CATEGORY_COMPONENT = {
  ANNIV: {
    text: '기념일',
    hashtag: ['#연인', '#결혼기념일'],
    icon: <IcHomeAniv width={58} height={67} />,
    active: <Lottie animationData={anivButton} loop />,
    unActive: <IcSearchCategoryAnivUnactivate width={72} height={72} />,
  },
  BIRTH: {
    text: '생일',
    hashtag: ['#생일축하', '#환갑'],
    icon: <IcHomeBday width={58} height={67} />,
    active: <Lottie animationData={bdayButton} loop />,
    unActive: <IcSearchCategoryBdayUnactivate width={72} height={72} />,
  },
  CHEER: {
    text: '응원',
    hashtag: ['#입학', '#졸업', '#퇴사'],
    icon: <IcHomeCheer width={58} height={67} />,
    active: <Lottie animationData={cheerButton} loop />,
    unActive: <IcSearchCategoryCheerUnactivate width={72} height={72} />,
  },
  SEASON: {
    text: '시즌',
    hashtag: ['#새해', '#설날'],
    icon: <IcHomeSeason width={58} height={67} />,
    active: <Lottie animationData={seasonButton} loop />,
    unActive: <IcSearchCategorySeasonUnactivate width={72} height={72} />,
  },
};

export const SUB_CATEGORY: SubCategoryType[] = [
  'ALL',
  'THEME',
  'CUTE',
  'MINIMAL',
  'CHARAC',
  'LUXURY',
  'HUMOR',
  'FANTASY',
  'ELSE',
];

export const SUB_CATEGORY_TEXT = {
  ALL: '전체',
  THEME: '테마',
  CUTE: '귀여움',
  MINIMAL: '미니멀',
  CHARAC: '캐릭터',
  LUXURY: '럭셔리',
  HUMOR: '유머',
  FANTASY: '판타지',
  ELSE: '기타',
};
