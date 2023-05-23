// import PropTypes from 'prop-types';
import { BackButton, BackLink } from './AddFormButton.styled';
import { BsArrowLeft } from 'react-icons/bs';

const AddFormButtonBack = ({ text, clickHandler, type, isLink, path }) => {
  if (isLink) {
    return (
      <BackLink onClick={clickHandler} type={type} to={path}>
        <BsArrowLeft style={{ fill: '#54ADFF', width: '16px', height: '12px' }}/>
        {text}
      </BackLink>
    );
  }

  return (
    <BackButton onClick={clickHandler} type={type}>
      <BsArrowLeft style={{ fill: '#54ADFF', width: '16px', height: '12px' }}/>
      {text}
    </BackButton>
  );
};

// AddFormButtonBack.propTypes = {
//   text: PropTypes.string.isRequired,
//   clickHandler: PropTypes.func,
//   isLink: PropTypes.bool.isRequired,
//   type: PropTypes.string,
//   path: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.objectOf(PropTypes.string),
//   ]),
// };

export default AddFormButtonBack;
