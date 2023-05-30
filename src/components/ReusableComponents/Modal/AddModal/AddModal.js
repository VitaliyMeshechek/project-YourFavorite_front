import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title } from '../LeavingModal/LeavingModal.styled';

const AddModal = ({ approveHandle }) => {
  return (
    <ModalApproveAction
      icon="IconPaw"
      approveHandle={approveHandle}
      canceled="Back"
      approved="Go to your adds"
      approvedWidth="248px"
    >
      <Title>Pet was successfully added!</Title>
    </ModalApproveAction>
  );
};

export default AddModal;
