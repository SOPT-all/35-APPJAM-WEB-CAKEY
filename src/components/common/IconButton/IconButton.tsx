import React, { ButtonHTMLAttributes } from 'react';

import {
  IcFillLikeOff36,
  IcFillLikeOn36,
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonStyle, countStyle } from './IconButton.css';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like20' | 'like36';
  isActive?: boolean;
  count?: number;
  itemId?: number; // storeId | cakeId를 받아서 api 요청에 사용합니다
  onMap?: boolean;
  customStyle?: string;
}

const buttonIcon = {
  save: {
    active: <IcSavedOn24 width={24} height={24} />,
    inactive: <IcSavedOff24 width={24} height={24} />,
  },
  like20: {
    active: <IcLineLikeOn20 width={20} height={20} />,
    inactive: <IcLineLikeOff20 width={20} height={20} />,
  },
  like36: {
    active: <IcFillLikeOn36 width={36} height={36} />,
    inactive: <IcFillLikeOff36 width={36} height={36} />,
  },
};

const IconButton = ({
  buttonType,
  isActive,
  count,
  itemId,
  onMap = false,
  customStyle,
}: IconButtonProps) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('iconClick', itemId);
  };
  return (
    <button
      className={`${buttonStyle({ buttonType, onMap })} ${customStyle || ''}`}
      onClick={handleButtonClick}
    >
      {isActive
        ? buttonIcon[buttonType]?.active
        : buttonIcon[buttonType]?.inactive}
      {count !== undefined && <span className={countStyle}>{count}</span>}
    </button>
  );
};

export default IconButton;
