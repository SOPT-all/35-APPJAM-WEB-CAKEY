import { Modal } from '@components';
import { useModal } from '@hooks';
import OrderFormModal from '@pages/store/components/OrderFormModal/OrderFormModal';

const StorePage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>모달 오픈</button>
      {isModalOpen && (
        <Modal variant="center" backdropClick={closeModal} hasBackdrop>
          <OrderFormModal onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default StorePage;
