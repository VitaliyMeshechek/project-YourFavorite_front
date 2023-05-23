import { useEffect, useState } from 'react';
import {
  Overlay,
  ModalView,
  CloseIcon,
  CloseButton,
} from './ModalWrapper.styled';

const ModalWrapper = ({ children, buttonState, handleOpenModal = false }) => {
  const [openModal, setOpenModal] = useState(handleOpenModal);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  useEffect(() => {
    if (buttonState === true) {
      return;
    }
    setOpenModal(false);
  }, [buttonState]);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setOpenModal(false);
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setOpenModal(false);
    }
  };

  return (
    <>
      {openModal && (
        <Overlay onClick={handleBackdropClick}>
          <ModalView>
            <CloseButton onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </CloseButton>
            {children}
          </ModalView>
        </Overlay>
      )}
    </>
  );
};

export default ModalWrapper;
