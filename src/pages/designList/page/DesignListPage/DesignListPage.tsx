import { Modal } from '@components';
import DesignSearchModal from '@pages/designList/components/DesignSearchModal/DesignSearchModal';
import useModal from 'src/hooks/useModal';

const data = {
  storeId: 1,
  storeName: '햄니케이크',
  station: '종로5가역',
  cakes: [
    {
      cakeId: 1,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 5,
      isLiked: false,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 3,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 2,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
  ],
};

const DesignListPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>모달 등장!</button>
      {isModalOpen && (
        <Modal variant="bottom" backdropClick={closeModal} hasBackdrop>
          <DesignSearchModal data={data} />
        </Modal>
      )}
    </div>
  );
};

export default DesignListPage;
