import { IconButton } from '@components';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <IconButton buttonType="save" onMap={true} isActive={false} />
      <IconButton buttonType="like" onMap={false} />
    </div>
  );
};

export default HomePage;
