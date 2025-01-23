import React, { ButtonHTMLAttributes, useState } from 'react';

import {
  useDeleteCakeLikes,
  useDeleteStoreLikes,
  usePostCakeLikes,
  usePostStoreLikes,
} from '@apis/likes';

import { useModal } from '@hooks';

import {
  IcFillLikeOff36,
  IcFillLikeOn36,
  IcLineLikeOff20,
  IcLineLikeOn20,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonStyle, countStyle } from './IconButton.css';
import AuthModal from '../AuthModal/AuthModal';
import Modal from '../Modal/Modal';

import { ErrorType } from '@types';
import { useToast } from '@contexts';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'save24' | 'save28' | 'like20' | 'like36';
  isActive?: boolean;
  count?: number;
  itemId?: number;
}

const buttonIcon = {
  save24: {
    active: <IcSavedOn24 width={24} height={24} />,
    inactive: <IcSavedOff24 width={24} height={24} />,
  },
  save28: {
    active: <IcSavedOn24 width={28} height={28} />,
    inactive: <IcSavedOff24 width={28} height={28} />,
  },
  like20: {
    active: <IcLineLikeOn20 width={20} height={20} />,
    inactive: <IcLineLikeOff20 width={20} height={20} />,
  },
  like36: {
    active: <IcFillLikeOn36 width={36} height={36} />,
    inactive: <IcFillLikeOff36 width={36} height={36} />,
  },
};

const IconButton = ({
  buttonType,
  isActive,
  count,
  itemId,
}: IconButtonProps) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { showToast } = useToast();

  const [localActive, setLocalActive] = useState(isActive);
  const [localCount, setLocalCount] = useState<number | undefined>(count);

  const { mutate: postStoreLikes } = usePostStoreLikes();
  const { mutate: postCakeLikes } = usePostCakeLikes();
  const { mutate: deleteStoreLikes } = useDeleteStoreLikes();
  const { mutate: deleteCakeLikes } = useDeleteCakeLikes();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (itemId === undefined) return;

    const isStore = buttonType === 'save24' || buttonType === 'save28';

    const optimisticUpdate = () => {
      setLocalActive((prev) => !prev);
      if (localCount !== undefined) {
        setLocalCount(localCount + (localActive ? -1 : 1));
      }
    };

    const rollbackUpdate = () => {
      setLocalActive(isActive);
      setLocalCount(count);
    };

    optimisticUpdate();

    const mutationFn = localActive
      ? isStore
        ? deleteStoreLikes
        : deleteCakeLikes
      : isStore
        ? postStoreLikes
        : postCakeLikes;

    mutationFn(itemId, {
      onError: (error: ErrorType) => {
        rollbackUpdate();
        if (error.status === 401) {
          openModal();
        } else {
          showToast('error', '연결에 문제가 생겼어요');
        }
      },
    });
  };

  return (
    <>
      <button
        className={buttonStyle({ buttonType })}
        onClick={handleButtonClick}
      >
        {localActive
          ? buttonIcon[buttonType]?.active
          : buttonIcon[buttonType]?.inactive}
        {localCount !== undefined && (
          <span className={countStyle({ buttonType })}>{localCount}</span>
        )}
      </button>
      {isModalOpen && (
        <Modal variant="center" hasBackdrop backdropClick={closeModal}>
          <AuthModal
            modalText="로그인이 필요한 기능이에요!"
            closeButtonText="닫기"
            authActionButtonText="로그인 하러가기"
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default IconButton;
