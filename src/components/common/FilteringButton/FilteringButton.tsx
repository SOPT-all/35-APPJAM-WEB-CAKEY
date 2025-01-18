import { useEffect, useRef, useState } from 'react';

import { IcArrowDown20, IcArrowUp20 } from '@svgs';

import {
  buttonTextStyle,
  filteringButtonStyle,
  lastLiStyle,
  liStyle,
  selectedLiStyle,
  ulStyle,
} from './FilteringButton.css';

import { OptionType } from '@types';

interface FilteringButtonProps {
  onOptionSelect: (option: OptionType) => void;
}

const OPTION = {
  latest: '최신순',
  popularity: '인기순',
};

const FilteringButton = ({ onOptionSelect }: FilteringButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>('latest');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: OptionType[] = ['latest', 'popularity'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={filteringButtonStyle}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <button className={buttonTextStyle}>{OPTION[selectedOption]}</button>

      {isOpen ? (
        <IcArrowUp20 width={24} height={24} />
      ) : (
        <IcArrowDown20 width={24} height={24} />
      )}
      {isOpen && (
        <ul className={ulStyle}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${liStyle} ${index === options.length - 1 && lastLiStyle} ${
                selectedOption === option && selectedLiStyle
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {OPTION[option]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilteringButton;
