import { IconButton } from '@components';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <IconButton buttonType="save" onMap={true} />
      <IconButton buttonType="save" count={23} onMap={false} />
      <IconButton buttonType="save" count={23} isActive={true} onMap={false} />
    </div>
  );
};

export default HomePage;
