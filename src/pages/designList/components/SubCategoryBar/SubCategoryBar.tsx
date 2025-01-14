import { useState } from 'react';

import {
  activeCategoryStyle,
  container,
  defaultCategoryStyle,
} from './SubCategoryBar.css';

interface SubCategoryProps {
  subCategory: string[];
}

const SubCategoryBar = ({ subCategory }: SubCategoryProps) => {
  const [activeCategory, setIsCategory] = useState(subCategory[0]);

  const handleClickCategory = (category: string) => {
    setIsCategory(category);
  };

  return (
    <ul className={container}>
      {subCategory.map((category) => {
        return (
          <li
            className={
              category === activeCategory
                ? activeCategoryStyle
                : defaultCategoryStyle
            }
            onClick={() => handleClickCategory(category)}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default SubCategoryBar;
