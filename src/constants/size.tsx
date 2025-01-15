import {
  ImgStore11Cm,
  ImgStore13Cm,
  ImgStore16Cm,
  ImgStore19Cm,
  ImgStore22Cm,
} from '@svgs';

interface SizeMapping {
  chipText: string;
  image: JSX.Element | null;
}

export const sizeMapping: Record<string, SizeMapping> = {
  도시락: {
    chipText: '1인',
    image: <ImgStore11Cm width={77} height={45} />,
  },
  미니: {
    chipText: '1-2인',
    image: <ImgStore13Cm width={98} height={64} />,
  },
  '1호': {
    chipText: '3-4인',
    image: <ImgStore16Cm width={115} height={81} />,
  },
  '2호': {
    chipText: '5-6인',
    image: <ImgStore19Cm width={131} height={98} />,
  },
  '3호': {
    chipText: '6인 이상',
    image: <ImgStore22Cm width={153} height={111} />,
  },
};
