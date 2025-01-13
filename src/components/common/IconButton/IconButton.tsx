import { ButtonHTMLAttributes, useState } from 'react';

import {
  IcGpsmarkerOff,
  IcGpsmarkerOn,
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonStyle, countStyle } from './IconButton.css';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save' | 'like' | 'gps';
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
      {buttonType === 'gps' ? (
        isHovered ? (
          <IcGpsmarkerOn width={24} height={24} />
        ) : (
          <IcGpsmarkerOff width={24} height={24} />
        )
      ) : isActive ? (
        buttonIcon[buttonType]?.active
      ) : (
        buttonIcon[buttonType]?.inactive
      )}
      {count !== undefined && buttonType !== 'gps' && (
        <span className={countStyle}>{count}</span>
      )}
    </button>
  );
};

export default IconButton;
