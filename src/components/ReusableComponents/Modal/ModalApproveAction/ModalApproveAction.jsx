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
import { IconPaw } from '../CongratsModal/CongratsModal.styled';

const ModalApproveAction = ({
  children,
  approveHandle,
  icon,
  canceled = 'Cancel',
  approved = 'Yes',
  approvedWidth = '128px',
}) => {
  const dispatch = useDispatch();

  const handleApprove = () => {
    approveHandle();
    dispatch(showModal(false));
  };

  return (
    <>
      <ModalWrapper>
        {children}
        <ButtonFlexWrapper>
          <CancelButton onClick={() => dispatch(showModal(false))}>
            <CancelButtonText>{canceled}</CancelButtonText>
          </CancelButton>
          <ApproveButton onClick={handleApprove} approvedWidth={approvedWidth}>
            <ApproveButtonText>
              {approved}
              {icon === 'TrashIcon' && <TrashIcon />}
              {icon === 'ExitIcon' && <ExitIcon />}
              {icon === 'IconPaw' && <IconPaw />}
            </ApproveButtonText>
          </ApproveButton>
        </ButtonFlexWrapper>
      </ModalWrapper>
    </>
  );
};

export default ModalApproveAction;
