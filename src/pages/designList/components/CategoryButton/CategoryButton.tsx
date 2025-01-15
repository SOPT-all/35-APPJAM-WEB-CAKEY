import { CATEGORY_COMPONENT } from '@constants';

import { activeTextStyle, CategoryButtonStyle, unActiveTextStyle } from './CategoryButton.css';

import { CategoryType } from '@types';

interface CategoryButtonProps {
  isActive: boolean;
  category: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const CategoryButton = ({
  isActive,
  category,
  onCategoryChange,
}: CategoryButtonProps) => {
  return (
    <button className={CategoryButtonStyle} onClick={() => onCategoryChange(category)}>
      {isActive
        ? CATEGORY_COMPONENT[category].active
        : CATEGORY_COMPONENT[category].unActive}
        <p className={isActive ? activeTextStyle : unActiveTextStyle}>{CATEGORY_COMPONENT[category].text}</p>
    </button>
  );
};

export default CategoryButton;
