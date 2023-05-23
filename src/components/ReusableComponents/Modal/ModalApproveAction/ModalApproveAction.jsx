import { useEffect, useState } from 'react';

import {
  ButtonFlexWrapper,
  CancelButton,
  CancelButtonText,
  ApproveButton,
  ApproveButtonText,
  TrashIcon,
  ExitIcon,
} from '../ModalApproveAction/ModalApproveAction.styled';

import ModalWrapper from '../ModalWrapper';

const ModalApproveAction = ({
  children,
  approveHandle,
  icon,
  handleOpenModal,
}) => {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (openModal === true) {
      return;
    }
    return setOpenModal(true);
  }, [openModal]);

  return (
    <>
      <ModalWrapper buttonState={openModal} handleOpenModal>
        {children}
        <ButtonFlexWrapper>
          <CancelButton
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
          <ApproveButton onClick={() => approveHandle('approve')}>
            <ApproveButtonText>
              Yes
              {icon === 'TrashIcon' && <TrashIcon />}
              {icon === 'ExitIcon' && <ExitIcon />}
            </ApproveButtonText>
          </ApproveButton>
        </ButtonFlexWrapper>
      </ModalWrapper>
    </>
  );
};

export default ModalApproveAction;
