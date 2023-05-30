import { Logout } from "./Logout";
import { PetsData } from "./PetsData";
import {UserData} from "./UserData";
import {  ContainerUser, UserPageContainer, NavLinkStyled, Header, MyPetsHeaderContainer,UserBlock, PetBlock} from './UserPage.styled';
import { useEffect, useState } from "react";
import { useDispatch
  // , useSelector 
} from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { BsPlus } from 'react-icons/bs'
// import {selectModal} from '../../redux/modal/selectors'
import CongratsModal from "components/ReusableComponents/Modal/CongratsModal";
import LeavingModal from "components/ReusableComponents/Modal/LeavingModal";
import{showModal} from  '../../redux/modal/slice'
import { Loader } from "components/Loader/Loader";
// import { useAuth} from '../../hooks/useAuth';


export const UserPageInfo =()=> {
const [isLoading, setisLoading] = useState(true)

  // const { user } = useAuth();
const firstLogin = false
// user.firstLogin


  // const modalState = useSelector(selectModal)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLogin) {
    dispatch(showModal(false));
  
}},[firstLogin,dispatch]);




  const toggleModal = () => {
  
    dispatch(showModal(true))
  }

  const approveLogOut= async() =>{
  
      
    await dispatch(logOut());
    
  }
  
  const toggleFirstLogin=()=>{
    
  }
  useEffect(() => {
    setisLoading(false);
}, [dispatch]);

    return (
      <div>
      { isLoading &&  <  Loader ></Loader>}
        {firstLogin && <CongratsModal func= {toggleFirstLogin}/>}
    {!firstLogin &&<LeavingModal approveHandle={approveLogOut}/>}

        <UserPageContainer>
<UserBlock>
        <Header>My information:</Header>

        <ContainerUser>
        <UserData/>
        <Logout toggleModal={toggleModal}/>
        </ContainerUser>
        </UserBlock>
        <PetBlock>
        <MyPetsHeaderContainer>
            <Header>My pets:</Header>
      <NavLinkStyled to="/add-pet" key="/add-pet">
          <span>Add pet</span>
            <BsPlus/>
          </NavLinkStyled>
        </MyPetsHeaderContainer>

        
        <PetsData/></PetBlock>
        </UserPageContainer>
        </div>
    )
}

