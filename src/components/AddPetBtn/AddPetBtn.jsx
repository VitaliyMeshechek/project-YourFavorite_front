import { BsPlus } from 'react-icons/bs'
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAuth } from 'hooks'

const AddPetBtn = ({ text, path }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const {isLoggedIn} = useAuth()
  const location = useLocation();
  const [screenWidth] = useWindowSize();

  const onAddBtnClick = e => {
    if (!isLoggedIn) {
      e.preventDefault();
      // toast('Sorry, this option is available only for authorized users');
      alert('Sorry, this option is available only for authorized users');
      return false;
    }
  };

  return (
    <Btn
      to={path}
      state={{ from: location }}
      onClick={onAddBtnClick}
    >
      {screenWidth < 768 && <BsPlus/>}
      {text}
      {screenWidth >= 768 && <BsPlus/>}
    </Btn>
  );
};

export default AddPetBtn;
