import { IconButton } from '@components';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <IconButton buttonType="like20" isActive={true} onMap={false} />
      <IconButton buttonType="save" isActive={true} onMap={false} />
      <IconButton buttonType="like36" isActive={true} onMap={false} />
      <IconButton buttonType="like36" isActive={false} onMap={false} />
    </div>
  );
};

export default HomePage;
