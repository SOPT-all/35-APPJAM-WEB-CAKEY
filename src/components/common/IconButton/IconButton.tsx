import { ButtonHTMLAttributes, useState } from 'react';

import {
  IcGpsmarkerOff,
  IcGpsmarkerOn,
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonStyle, countStyle, iconStyle } from './IconButton.css';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like' | 'gps';
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <button
      className={buttonStyle({ buttonType, onMap })}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={iconStyle({ buttonType })}>
        {buttonType === 'gps' ? (
          isHovered ? (
            <IcGpsmarkerOn />
          ) : (
            <IcGpsmarkerOff />
          )
        ) : isActive ? (
          buttonIcon[buttonType]?.active
        ) : (
          buttonIcon[buttonType]?.inactive
        )}
      </span>
      {count !== undefined && buttonType !== 'gps' && (
        <span className={countStyle}>{count}</span>
      )}
    </button>
  );
};

export default IconButton;
