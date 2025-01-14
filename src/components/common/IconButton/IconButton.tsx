import { ButtonHTMLAttributes } from 'react';

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
  onMap: boolean;
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
  onMap,
  onClick,
}: IconButtonProps) => {
  return (
    <button className={buttonStyle({ buttonType, onMap })} onClick={onClick}>
      {isActive
        ? buttonIcon[buttonType]?.active
        : buttonIcon[buttonType]?.inactive}
      {count !== undefined && <span className={countStyle}>{count}</span>}
    </button>
  );
};

export default IconButton;
