import { ButtonLogout} from './UserPage.styled';
import {FiLogOut} from 'react-icons/fi';

export const Logout =({toggleModal})=>{
  
    return(<ButtonLogout type="button" onClick={toggleModal}><FiLogOut style={{rotate:"180deg", width: '22px', height: '21px', marginRight:'16px', }}/>Log Out</ButtonLogout>)
  }

    