import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title } from './LeavingModal.styled';

const LeavingModal = ({ approveHandle, handleOpenModal }) => {
  return (
    <ModalApproveAction icon="ExitIcon" approveHandle handleOpenModal>
      <Title>Already leaving?</Title>
    </ModalApproveAction>
  );
};

export default LeavingModal;
