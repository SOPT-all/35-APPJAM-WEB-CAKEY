import { useState } from 'react';

import {
  activeCategoryStyle,
  container,
  defaultCategoryStyle,
} from './SubCategoryBar.css';

interface SubCategoryProps {
  categories: string[];
}

const SubCategoryBar = ({ categories }: SubCategoryProps) => {
  const [activeCategory, setIsCategory] = useState(categories[0]);

  const handleClickCategory = (category: string) => {
    setIsCategory(category);
  };

  return (
    <ul className={container}>
      {categories.map((category) => {
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
