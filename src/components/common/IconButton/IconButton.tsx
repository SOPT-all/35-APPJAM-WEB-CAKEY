import { ButtonHTMLAttributes } from 'react';

import {
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonStyle, countStyle } from './IconButton.css';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like';
  isActive?: boolean;
  count?: number;
  onMap: boolean;
}

const buttonIcon = {
  save: {
    active: <IcSavedOn24 width={24} height={24} />,
    inactive: <IcSavedOff24 width={24} height={24} />,
  },
  like: {
    active: <IcLineLikeOn20 width={20} height={20} />,
    inactive: <IcLineLikeOff20 width={20} height={20} />,
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
