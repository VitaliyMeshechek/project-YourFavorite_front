import { Logout } from './Logout';
import { PetsData } from './PetsData';
import { UserData } from './UserData';
import {
  ContainerUser,
  UserPageContainer,
  NavLinkStyled,
  Header,
  MyPetsHeaderContainer,
  UserBlock,
  PetBlock,
} from './UserPage.styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { BsPlus } from 'react-icons/bs';
import { useState, useEffect } from "react";
import CongratsModal from 'components/ReusableComponents/Modal/CongratsModal';
import LeavingModal from 'components/ReusableComponents/Modal/LeavingModal';
import { showModal } from '../../redux/modal/slice';
import { updateUser } from '../../redux/user/operations';
import { useAuth } from '../../hooks/useAuth';

export const UserPageInfo = () => {
  const { user } = useAuth();
const[firstLog, setfirstLog ] = useState( user.firstLogin)



  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLog) {
      dispatch(showModal(false));
    } else {
      dispatch(showModal(true));
    }
  }, [firstLog, dispatch]);


  const toggleModal = () => {
    dispatch(showModal(true));
  };

  const approveLogOut = async () => {
    await dispatch(logOut());
  };

  const toggleFirstLogin = () => {
    console.log("inmodalclose")
    setfirstLog(false);
    dispatch(updateUser({ firstLogin: 'false' }));
    console.log(user)
   

  };

  return (
    <div>
      {firstLog && <CongratsModal func={toggleFirstLogin} />}
      {!firstLog && <LeavingModal approveHandle={approveLogOut} />}

      <UserPageContainer>
        <UserBlock>
          <Header>My information:</Header>

          <ContainerUser>
            <UserData />
            <Logout toggleModal={toggleModal} />
          </ContainerUser>
        </UserBlock>
        <PetBlock>
          <MyPetsHeaderContainer>
            <Header>My pets:</Header>
            <NavLinkStyled to="/add-pet" key="/add-pet">
              <span>Add pet</span>
              <BsPlus />
            </NavLinkStyled>
          </MyPetsHeaderContainer>

          <PetsData />
        </PetBlock>
      </UserPageContainer>
    </div>
  );
};
