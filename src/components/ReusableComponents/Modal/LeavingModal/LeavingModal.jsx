import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title } from './LeavingModal.styled';

const LeavingModal = ({ approveHandle }) => {
  return (
    <ModalApproveAction icon="ExitIcon" approveHandle>
      <Title>Already leaving?</Title>
    </ModalApproveAction>
  );
};

export default LeavingModal;
