import IconButton from '../IconButton/IconButton';
import Image from '../Image/Image';
import Label from '../Label/Label';

const DesignCard = () => {
  return (
    <div>
      <Image src="../public/example-img.png" width="100%" />
      <div>
        <h1>햄니케이크</h1>
        <Label text="종로5가역" />
      </div>

      <IconButton buttonType="like20" onMap={false} />
    </div>
  );
};

export default DesignCard;
