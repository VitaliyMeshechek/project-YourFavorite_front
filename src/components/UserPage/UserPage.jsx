import { Logout } from './Logout';
import { PetsData } from './PetsData';
import { UserData } from './UserData';
import {
  ContainerUser,
  UserPageContainer,
  Header,
  MyPetsHeaderContainer,
  UserBlock,
  PetBlock,
} from './UserPage.styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import AddPetBtn from '../AddPetBtn/AddPetBtn';
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
    
    setfirstLog(false);
    dispatch(updateUser({ firstLogin: 'false' }));
    
   

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

            <AddPetBtn text="Add pet" path="/add-pet"/>
          </MyPetsHeaderContainer>

          <PetsData />
        </PetBlock>
      </UserPageContainer>
    </div>
  );
};
