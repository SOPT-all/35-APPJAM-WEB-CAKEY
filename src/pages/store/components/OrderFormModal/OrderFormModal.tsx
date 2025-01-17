import { TextButton } from '@components';
import {
  modalContainer,
  modalHeader,
  headerContent,
  modalDescription,
  modalFooter,
  orderForm,
} from './OrderFormModal.css';
import { IcFormX20 } from '@svgs';

const OrderFormModal = () => {
  return (
    <dialog className={modalContainer}>
      <section className={modalHeader}>
        <div className={headerContent}>
          <span>주문 가이드</span>
          <IcFormX20 width={20} height={20} />
        </div>
        <p className={modalDescription}>
          *주문서 양식은 가게마다 다를 수 있으니 확인해주세요
        </p>
      </section>
      <form className={orderForm}></form>
      <section className={modalFooter}>
        <TextButton size={'small'}>주문서 복사</TextButton>
      </section>
    </dialog>
  );
};

export default OrderFormModal;
