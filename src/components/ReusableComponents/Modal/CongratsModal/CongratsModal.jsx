import { useEffect, useState } from 'react';

import {
  Title,
  Description,
  PrimaryButton,
  IconPaw,
  PrimaryButtonText,
} from '../CongratsModal/CongratsModal.styled';

import ModalWrapper from '../ModalWrapper';

const CongratsModal = props => {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (openModal === true) {
      return;
    }
    return setOpenModal(true);
  }, [openModal]);

  return (
    <>
      <ModalWrapper buttonState={openModal}>
        <Title>Congrats!</Title>
        <Description>You`re registration is success</Description>
        <PrimaryButton
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <PrimaryButtonText>Go to profile</PrimaryButtonText>
          <IconPaw />
        </PrimaryButton>
      </ModalWrapper>
    </>
  );
};

export default CongratsModal;
