import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title } from './LeavingModal.styled';

const LeavingModal = () => {
  return (
    <ModalApproveAction icon="ExitIcon">
      <Title>Already leaving?</Title>
    </ModalApproveAction>
  );
};

export default LeavingModal;
