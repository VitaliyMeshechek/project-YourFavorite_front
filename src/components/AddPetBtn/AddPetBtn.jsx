// import PropTypes from 'prop-types';
import { BsPlus } from 'react-icons/bs'
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks'

const AddPetBtn = ({ text, path, isFixed }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const {isLoggedIn} = useAuth()
  const location = useLocation();
  const [screenWidth] = useWindowSize();

  const onAddBtnClick = e => {
    if (!isLoggedIn) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <Btn
      to={path}
      state={{ from: location }}
      onClick={onAddBtnClick}
 isFixed={isFixed}
    >
      {screenWidth < 768 && <BsPlus/>}
      {text}
      {screenWidth >= 768 && <BsPlus/>}
    </Btn>
  );
};

// AddPetBtn.propTypes = {
//   text: PropTypes.string.isRequired,
//   path: PropTypes.string.isRequired,
//   toggleUnauthorizeModal: PropTypes.func,
  // isFixed: PropTypes.bool.isRequired,
// };

export default AddPetBtn;
