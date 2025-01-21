import React, { ButtonHTMLAttributes } from 'react';

import { usePostStoreLikes } from '@apis/likes';

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
  buttonType: 'save24' | 'save28' | 'like20' | 'like36';
  isActive?: boolean;
  count?: number;
  itemId?: number;
}

const buttonIcon = {
  save24: {
    active: <IcSavedOn24 width={24} height={24} />,
    inactive: <IcSavedOff24 width={24} height={24} />,
  },
  save28: {
    active: <IcSavedOn24 width={28} height={28} />,
    inactive: <IcSavedOff24 width={28} height={28} />,
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
}: IconButtonProps) => {
  const { mutate } = usePostStoreLikes();
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (itemId !== undefined) {
      mutate(itemId);
    }
  };
  return (
    <button className={buttonStyle({ buttonType })} onClick={handleButtonClick}>
      {isActive
        ? buttonIcon[buttonType]?.active
        : buttonIcon[buttonType]?.inactive}
      {count !== undefined && (
        <span className={countStyle({ buttonType })}>{count}</span>
      )}
    </button>
  );
};

export default IconButton;
