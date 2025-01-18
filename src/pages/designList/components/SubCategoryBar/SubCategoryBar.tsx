import { forwardRef } from 'react';

import { SUB_CATEGORY_TEXT } from '@constants';

import {
  activeCategoryStyle,
  container,
  defaultCategoryStyle,
} from './SubCategoryBar.css';

import { SubCategoryType } from '@types';

interface SubCategoryProps {
  categories: SubCategoryType[];
  selectedSubCategory: SubCategoryType;
  onSubCategoryChange: (category: SubCategoryType) => void;
}

const SubCategoryBar = forwardRef<HTMLUListElement, SubCategoryProps>(
  ({ categories, selectedSubCategory, onSubCategoryChange }, ref) => {
    return (
      <ul ref={ref} className={container}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={
              category === selectedSubCategory
                ? activeCategoryStyle
                : defaultCategoryStyle
            }
            onClick={() => onSubCategoryChange(category)}
          >
            {SUB_CATEGORY_TEXT[category]}
          </li>
        ))}
      </ul>
    );
  }
);

export default SubCategoryBar;
