import {
  Title,
  Description,
  PrimaryButton,
  IconPaw,
  PrimaryButtonText,
} from '../CongratsModal/CongratsModal.styled';

import ModalWrapper from '../ModalWrapper';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modal/slice';

const CongratsModal = () => {
  const dispatch = useDispatch();

  const handleClose = ({ func }) => {
    dispatch(showModal(false));
    func();
  };
  return (
    <>
      <ModalWrapper>
        <Title>Congrats!</Title>
        <Description>You`re registration is success</Description>
        <PrimaryButton onClick={handleClose}>
          <PrimaryButtonText>Go to profile</PrimaryButtonText>
          <IconPaw />
        </PrimaryButton>
      </ModalWrapper>
    </>
  );
};

export default CongratsModal;
