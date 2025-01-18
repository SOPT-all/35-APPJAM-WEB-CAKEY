import { useState } from 'react';

import { Input, TextButton } from '@components';
import { ORDER_FORM_FIELDS } from '@constants';
import { useToast } from '@contexts';
import { useClipboard } from '@hooks';

import { IcFormX20 } from '@svgs';

import {
  modalContainer,
  modalHeader,
  headerContent,
  modalDescription,
  modalFooter,
  modalForm,
  formContent,
  designDescription,
} from './OrderFormModal.css';

interface OrderFormModalProps {
  onClose: () => void;
}

const OrderFormModal = ({ onClose }: OrderFormModalProps) => {
  const { copyToClipboard } = useClipboard();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    user: '',
    pickup: '',
    size: '',
    flavor: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ''
  );

  const handleCopy = () => {
    const textToCopy = Object.entries(formData)
      .map(
        ([key, value]) =>
          `${ORDER_FORM_FIELDS.find((field) => field.id === key)?.label}: ${value}`
      )
      .join('\n');

    copyToClipboard(textToCopy).then((success) => {
      if (success) {
        onClose();
        showToast('check', '주문서가 복사되었어요');
      } else {
        showToast('error', '주문서 복사에 실패했어요');
      }
    });
  };

  return (
    <div className={modalContainer}>
      <section className={modalHeader}>
        <div className={headerContent}>
          <h1>주문 가이드</h1>
          <IcFormX20 width={20} cursor="pointer" onClick={onClose} />
        </div>
        <p className={modalDescription}>
          *주문서 양식은 가게마다 다를 수 있으니 확인해주세요
        </p>
      </section>

      <section className={modalForm}>
        <form className={formContent}>
          {ORDER_FORM_FIELDS.map((field) => (
            <Input key={field.id}>
              <Input.Label htmlFor={field.id}>{field.label}</Input.Label>
              <Input.InputField
                id={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
              />
            </Input>
          ))}
          <Input>
            <Input.Label>디자인</Input.Label>
            <p className={designDescription}>
              <u>카카오톡에서 이미지를 첨부</u>해주세요
            </p>
          </Input>
        </form>
      </section>

      <section className={modalFooter}>
        <TextButton
          size={'small'}
          disabled={!isFormComplete}
          onClick={handleCopy}
        >
          주문서 복사
        </TextButton>
      </section>
    </div>
  );
};

export default OrderFormModal;
