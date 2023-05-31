import { useAuth } from 'hooks'
import {BsPlus} from 'react-icons/bs'
import {TbFilter} from 'react-icons/tb'
import { Btn, NavLinkStyled } from './Button.styled'

export const AddPetBtn = () => {
    const {isLoggedIn} = useAuth()

    const handleClick = () => {
        if(!isLoggedIn) {
            // toast('Sorry, this option is available only for authorized users')
            return
        } 
    }

    return(
        <NavLinkStyled to="/add-pet" key="/add-pet" onClick={handleClick}>
          <span>Add pet</span>
            <BsPlus/>
          </NavLinkStyled>
    )
}

export const FilterBtn = () => {

    return(
        <Btn type="button">
            <span>Filter</span>
            <TbFilter/> 
        </Btn>
    )
}