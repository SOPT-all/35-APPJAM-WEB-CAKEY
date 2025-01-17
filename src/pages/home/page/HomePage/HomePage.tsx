import CategoryCard from '@pages/home/components/CategoryCard/CategoryCard';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <CategoryCard category="생일" hashtag={['#생일축하', '#환갑']} />
      <CategoryCard category="기념일" hashtag={['#결혼기념일', '#연인']} />
    </div>
  );
};

export default HomePage;
