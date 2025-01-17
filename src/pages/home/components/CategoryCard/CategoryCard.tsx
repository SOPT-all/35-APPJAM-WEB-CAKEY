import {
  buttonWrapper,
  categoryTextStyle,
  hashtagTextStyle,
  hashtagTextWrapper,
} from './CategoryCard.css';

interface CategoryCardProps {
  category: string;
  hashtag: string[];
}

const CategoryCard = ({ category, hashtag }: CategoryCardProps) => {
  return (
    <button className={buttonWrapper}>
      <h1 className={categoryTextStyle}>{category}</h1>
      <div className={hashtagTextWrapper}>
        {hashtag.map((tag) => (
          <h2 className={hashtagTextStyle}>{tag}</h2>
        ))}
      </div>
    </button>
  );
};

export default CategoryCard;
