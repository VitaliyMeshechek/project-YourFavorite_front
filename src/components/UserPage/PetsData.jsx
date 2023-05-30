
import { selectPet } from "redux/auth/selectors";
import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash2} from 'react-icons/fi';
import {  deletePet, fetchPets} from '../../redux/user/operations';
import { ContainerPet,LabelPet, Header, InfoPetItem,InfoPet,InfoPetText, PetsItemUl,PetImg, ButtonDeletePet} from './UserPage.styled';



export const PetsData =()=>{
    const dispatch = useDispatch();
  
  
    const pet = useSelector(selectPet)
   
    
    useEffect(() => {
      dispatch(fetchPets());
  }, [dispatch]);
  
    
  
  
    const visiblePets = pet? pet.filter(pet => pet.category.includes("your pet")) : [];
  
      return(
          <div>
      {visiblePets.length===0 && <Header>You have not added your pets yet</Header>}
      <PetsList pets = {visiblePets}/></div>)
  }

  const PetsList = (props)=>{
    const { pets} = props 
    return (
        <div>     
          {pets && <PetsItemUl >{pets.map(item =>           
            (<PetsItem key={item._id} item={item}  />))}</PetsItemUl>}
        </div>
    )
}
const PetsItem =({item})=>{

      const {photo, name, dateOfBirth, breed, comments, _id} = item
 
    const  dispatch=useDispatch()

     const HandleDeletePet =()=>{
      dispatch(deletePet(_id))
     }



      return (
      
      <ContainerPet >
        <PetImg src={photo} alt={name} />

        <InfoPet><InfoPetItem><LabelPet>Name:</LabelPet><InfoPetText>{name}</InfoPetText><ButtonDeletePet onClick={HandleDeletePet}><FiTrash2 style={{  width: '18px', height: '26px' }}/></ButtonDeletePet></InfoPetItem>
        <InfoPetItem><LabelPet>Date of birth:</LabelPet><InfoPetText>{dateOfBirth}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Breed:</LabelPet><InfoPetText>{breed}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Comments:</LabelPet><InfoPetText>{comments}</InfoPetText></InfoPetItem>
        </InfoPet>
  </ContainerPet>
    )}