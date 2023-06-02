// import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { selectNoticesError } from 'redux/notices/selectors';
// import { selectError } from 'redux/auth/selectors';

import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
// import { PawPrintIcon } from 'shared/utils/icons';
import { TbPaw } from "react-icons/tb";
import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import { AddFormModalWrapper } from './AddPetModal.styled';

const AddPetModal = ({ backLink, category }) => {
  const navigate = useNavigate();
  // const addMyPetError = useSelector(selectError);
  // const addPetError = useSelector(selectNoticesError);
  // const isError = Boolean(addMyPetError) || Boolean(addPetError);
  // const text = isError
  //   ? 'Something went wrong, please try again.'
  //   : 'Pet was successfully added!';

  const buttonText =
    category === 'your pet' ? 'Go to profile' : 'Go to your adds';
  const path = category === 'your pet' ? '/user' : '/notices';
  return (
    <AddFormModalWrapper>
      <p>'Pet was successfully added!'</p>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text={buttonText}
          icon={<TbPaw style={{ stroke: '#FEF9F9', width: '24px', height: '24px' }}/>}
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

// AddPetModal.propTypes = PropTypes.shape({
//   backLink: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// });

export default AddPetModal;
