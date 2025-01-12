import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, countStyle, iconStyle } from './IconButton.css';
import {
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like';
  isActive?: boolean;
  count?: number;
  onMap: boolean;
}

const buttonIcon = {
  save: {
    active: <IcSavedOn24 />,
    inactive: <IcSavedOff24 />,
  },
  like: {
    active: <IcLineLikeOn20 />,
    inactive: <IcLineLikeOff20 />,
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
    <button className={buttonStyle({ onMap })} onClick={onClick}>
      <span className={iconStyle}>
        {isActive
          ? buttonIcon[buttonType].active
          : buttonIcon[buttonType].inactive}
      </span>
      {count !== undefined && <span className={countStyle}>{count}</span>}
    </button>
  );
};

export default IconButton;
