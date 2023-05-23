import { useEffect, useState } from 'react';
import {
  Overlay,
  ModalView,
  CloseIcon,
  CloseButton,
} from './ModalWrapper.styled';

const ModalWrapper = ({ children, buttonState }) => {
  const [openModal, setOpenModal] = useState(false);
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
      <button
        type="button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
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
