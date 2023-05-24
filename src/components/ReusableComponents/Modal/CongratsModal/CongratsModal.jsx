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

  return (
    <>
      <ModalWrapper>
        <Title>Congrats!</Title>
        <Description>You`re registration is success</Description>
        <PrimaryButton onClick={() => dispatch(showModal(false))}>
          <PrimaryButtonText>Go to profile</PrimaryButtonText>
          <IconPaw />
        </PrimaryButton>
      </ModalWrapper>
    </>
  );
};

export default CongratsModal;
