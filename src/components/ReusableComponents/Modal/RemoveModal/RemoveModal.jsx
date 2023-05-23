import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import { Title, Description, DescriptionAccent } from './RemoveModal.styled';

const RemoveModal = () => {
  return (
    <ModalApproveAction icon="TrashIcon">
      <Title>Delete adverstiment?</Title>
      <Description>
        Are you sure you want to delete
        <DescriptionAccent>“Cute dog looking for a home”</DescriptionAccent>?
        <br />
        You can`t undo this action.
      </Description>
    </ModalApproveAction>
  );
};

export default RemoveModal;
