import { useNavigate } from 'react-router-dom';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import { AddFormModalWrapper } from './AddPetModal.styled';

const AddPetModal = ({ backLink, category }) => {
  const navigate = useNavigate();
  const buttonText =
    category === 'your pet' ? 'Go to profile' : 'Go to your adds';
  const path = category === 'your pet' ? '/user' : '/notices/own';
  return (
    <AddFormModalWrapper>
      <p>'Pet was successfully added!'</p>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text={buttonText}
          clickHandler={() => {
            navigate(path);
          }}
          filled={false}
          isDisabled={false}
          />
        <AddFormButtonBack
          type="button"
          clickHandler={() => navigate(backLink)}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </AddFormModalWrapper>
  );
};

export default AddPetModal;
