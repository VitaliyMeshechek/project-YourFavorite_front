import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title, Description, DescriptionAccent } from './RemoveModal.styled';

const RemoveModal = ({ approveHandle, title }) => {
  return (
    <ModalApproveAction icon="TrashIcon" approveHandle={approveHandle}>
      <Title>Delete adverstiment?</Title>
      <Description>
        Are you sure you want to delete
        <DescriptionAccent> {title} </DescriptionAccent>
        ?
        <br />
        You can`t undo this action.
      </Description>
    </ModalApproveAction>
  );
};

export default RemoveModal;
