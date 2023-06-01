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

const CongratsModal = ({ func }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showModal(false));
    console.log('close');
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
