import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modal/slice';
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

const ModalApproveAction = ({ children, approveHandle, icon }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ModalWrapper>
        {children}
        <ButtonFlexWrapper>
          <CancelButton onClick={() => dispatch(showModal(false))}>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
          <ApproveButton onClick={() => approveHandle()}>
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
