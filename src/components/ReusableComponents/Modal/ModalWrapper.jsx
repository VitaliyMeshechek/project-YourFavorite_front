import { useEffect } from 'react';
import {
  Overlay,
  ModalView,
  CloseIcon,
  CloseButton,
} from './ModalWrapper.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from 'redux/modal/selectors';
import { showModal } from 'redux/modal/slice';

const ModalWrapper = ({ children }) => {
  let modal = useSelector(selectModal);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(showModal(false));
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(showModal(false));
    }
  };

  return (
    <>
      {modal && (
        <Overlay onClick={handleBackdropClick}>
          <ModalView>
            <CloseButton onClick={() => dispatch(showModal(false))}>
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
