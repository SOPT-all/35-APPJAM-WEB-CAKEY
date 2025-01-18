import {
  StoreDefault32,
  StoreDefault54,
  StoreLike32,
  StoreLike54,
} from '@constants';

const markerIcon = {
  saveOff: {
    normal: StoreDefault32,
    clicked: StoreLike54,
  },
  saveOn: {
    normal: StoreLike32,
    clicked: StoreDefault54,
  },
};

export const getMarkerIcon = (
  marker: { clicked: boolean },
  isSaveActive: boolean
) => {
  const icons = isSaveActive ? markerIcon.saveOn : markerIcon.saveOff;
  const iconSrc = marker.clicked ? icons.clicked : icons.normal;

  const size =
    iconSrc === StoreDefault32 || iconSrc === StoreLike32
      ? { width: 32, height: 32 }
      : { width: 54, height: 54 };

  return { src: iconSrc, size };
};
