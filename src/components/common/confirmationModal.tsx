import React from 'react';
import { Modal } from '../index';
import { constants } from '../../constants';

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  onDelete: () => void;
  title: string;
  message: string;
  isLoading: boolean;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  isModalVisible,
  toggleModal,
  onDelete,
  title,
  message,
  isLoading,
}) => {
  const { footerButtons } = constants.confirmationModal;

  const modalFooterButtons = [
    {
      label: footerButtons.cancel,
      className: 'cancel-btn',
      isLoading: false,
      isDisabled: false,
      onClick: toggleModal,
      variant: 'secondary',
    },
    {
      label: footerButtons.delete,
      className: 'delete-btn',
      isLoading: isLoading,
      isDisabled: isLoading,
      onClick: onDelete,
      variant: 'danger',
    },
  ];
  return (
    <Modal
      title={title}
      isModalVisible={isModalVisible}
      buttons={modalFooterButtons}
      toggleModal={toggleModal}
      modalClass="delete-notification-modal">
      <p>{message}</p>
    </Modal>
  );
};

export default ConfirmationModal;
