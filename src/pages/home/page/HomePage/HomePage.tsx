import { CATEGORY, CATEGORY_COMPONENT } from '@constants';
import CategoryCard from '@pages/home/components/CategoryCard/CategoryCard';

const HomePage = () => {
  return (
    <div>
      {CATEGORY.map((category) => (
        <CategoryCard
          category={CATEGORY_COMPONENT[category].text}
          hashtag={CATEGORY_COMPONENT[category].hashtag}
        />
      ))}
    </div>
  );
};

export default HomePage;
