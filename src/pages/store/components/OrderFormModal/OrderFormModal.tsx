import { TextButton } from '@components';

import { IcFormX20 } from '@svgs';

import {
  modalContainer,
  modalHeader,
  headerContent,
  modalDescription,
  modalFooter,
  modalForm,
  formContent,
} from './OrderFormModal.css';

interface OrderFormModalProps {
  onClose: () => void;
}

const OrderFormModal = ({ onClose }: OrderFormModalProps) => {
  return (
    <div className={modalContainer}>
      <section className={modalHeader}>
        <div className={headerContent}>
          <span>주문 가이드</span>
          <IcFormX20
            width={20}
            height={20}
            cursor="pointer"
            onClick={onClose}
          />
        </div>
        <p className={modalDescription}>
          *주문서 양식은 가게마다 다를 수 있으니 확인해주세요
        </p>
      </section>
      <section className={modalForm}>
        <form className={formContent}></form>
      </section>
      <section className={modalFooter}>
        <TextButton size={'small'}>주문서 복사</TextButton>
      </section>
    </div>
  );
};

export default OrderFormModal;
