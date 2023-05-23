import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

const AddPetBtn = ({ text, path }) => {
  const location = useLocation();
  const [screenWidth] = useWindowSize();

  return (
    <Btn to={path} state={{ from: location }}>
      {screenWidth < 768 && (
        <BsPlus style={{ fill: '#FEF9F9', width: '16px', height: '16px' }} />
      )}
      {text}
      {screenWidth >= 768 && (
        <BsPlus style={{ fill: '#FEF9F9', width: '10px', height: '10px' }} />
      )}
    </Btn>
  );
};

AddPetBtn.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default AddPetBtn;
