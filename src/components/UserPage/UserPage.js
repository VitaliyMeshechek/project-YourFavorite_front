import { Formik, Form   } from "formik";
import { Error, Input, ContainerUser,ContainerPet, DataItemContainer,InputContainer, UserPageContainer,UserImg ,ButtonPhoto, ButtonEdit, Label,LabelPet, ButtonLogout, ButtonAddPet, Header, MyPetsHeaderContainer, InfoPetItem,InfoPet,InfoPetText, PetsItemUl,PetImg, ButtonDeletePet, DataContainer, PhotoContainer,UserBlock, PetBlock} from './UserPage.styled';
import {FiCamera,FiLogOut, FiTrash2} from 'react-icons/fi';
import{AiOutlineCheck}from 'react-icons/ai';
import{TbPencilMinus} from 'react-icons/tb';
// import * as Yup from 'yup';
import { useState } from "react";



export const UserPageInfo =()=> {

    return (
        <UserPageContainer>
<UserBlock>
        <Header>My information:</Header>

        <ContainerUser>
        <UserData/>
        <Logout/>
        </ContainerUser>
        </UserBlock>
        <PetBlock>
        <MyPetsHeaderContainer>
            <Header>My pets:</Header>
        <ButtonAddPet>Add Pet + </ButtonAddPet>
        </MyPetsHeaderContainer>

        
        <PetsData/></PetBlock>
        </UserPageContainer>
    )
}


const Logout =()=>{
    return(<ButtonLogout><FiLogOut style={{rotate:"180deg", color:'#54adff', width: '22px', height: '21px', marginRight:'16px', }}/>Log Out</ButtonLogout>)
}
const PetsData =()=>{
  const  pets=[
        {photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments:"trararar",},
    
        {photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",}, {photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",}, {photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",},
    ]
    return(
        <div>
    {pets.length===0 && <Header>You have not added your pets yet</Header>}
    <PetsList pets = {pets}/></div>)
}




const initialValues = {

    name: "Anna",
    email: "Anna.@djl.com",
    birthday:"00.00.0000",
    phone:"+3800000000000",
    city:"Kyiv"

};


const UserData =()=>{ 
    const [isPhotoEdit, setisPhotoEdit] =useState(false);
const [isNameEdit, setisNameEdit] =useState(false);
const [isEmailEdit, setisEmailEdit] =useState(false);
const [isBirthEdit, setisBirthEdit] =useState(false);
const [isPhoneEdit, setisPhoneEdit] =useState(false);
const [isCityEdit, setisCityEdit] =useState(false);
const [isAllowed, setisAllowed ] = useState(true);




    const editing =()=>{
        setisPhoneEdit(false);
       setisBirthEdit(false)
       setisCityEdit(false)
       setisEmailEdit(false)
       setisNameEdit(false)
       setisPhoneEdit(false)
    }
    // const dispatch = useDispatch();

    // const handleSubmit = (values) => {
    //   console.log(values)
    // //   dispatch(
    // //     console.log(
    // //       values
    // //     )
    // //   );
    // };


    function validateEmail(value) {
      let error;
      if (!value) {
        error = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
      }
      setisAllowed(true)
      if (error){setisAllowed(false)}
      
      return error;
    }

    function validateBirth(value) {
      let error;
      if (!value) {
        error = 'Required';
      } else if (!/^[0-9]{2}?[.]?[0-9]{2}?[.]?[0-9]{4}$/.test(value)) {
        error = 'Should be in format 00.00.0000';
      }
      setisAllowed(true)
      if (error){setisAllowed(false)}
      
      return error;
    }
    function validatePhone(value) {
      let error;
      if (!value) {
        error = 'Required';
      }

      else if (!/^[+]?[(]?[380]{3}[)]?[0-9]{3}?[0-9]{6}$/.test(value)) {
        error = 'phone should start with +380 and <br> have 12 symbols';
      }
      setisAllowed(true)
      if (error){setisAllowed(false)}
      
      return error;
    }
    
    function validateCity(value) {
      let error;
      if (!value) {
        error = 'Required';
      } else if (!/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u.test(value)) {
        error = 'You can use only letters, min 2 symbols';
      }
      setisAllowed(true)
      if (error){setisAllowed(false)}
      console.log(isAllowed)
      return error;
    }

    function validateName(value) {
      let error;
      if (!value) {
        error = 'Required';
      } else if ( !/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u.test(value)) {
        error = 'You can use only letters, min 2 symbols';
      }
     
      setisAllowed(false)
      if (error){setisAllowed(false)}
      
      return error;
    }

return(
   <div>
<Formik initialValues= {initialValues}   >
            
           <Form >
           <PhotoContainer><UserImg src=" https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />

           
           {!isPhotoEdit &&  <ButtonPhoto type="button" onClick={()=> {editing(); setisPhotoEdit(true)}}><FiCamera  style={{ color: '#54adff', width: '20px', height: '16px', marginRight:'6px' }}/>Edit photo</ButtonPhoto> }

{isPhotoEdit &&<ButtonPhoto type="button" onClick={()=> {editing(); setisPhotoEdit(false)}}><AiOutlineCheck  style={{ color: '#54adff', width: '22px', height: '18px', marginRight:'6px' }}/>Confirm</ButtonPhoto>}
           
           </PhotoContainer>
           <DataContainer>
               <DataItemContainer>
                   <Label>Name:</Label>
                   <InputContainer>  
    <Input
  type="text"
  name="name" readOnly={!isNameEdit} validate={validateName} autoComplete='off'/>

{!isNameEdit &&  <ButtonEdit type="button" onClick={()=> {editing(); setisNameEdit(true)}} ><TbPencilMinus style={{ color: '#54adff', width: '18px', height: '18px'}}/> </ButtonEdit> }

{isNameEdit && isAllowed &&<ButtonEdit type="button" onClick={()=> {editing(); setisNameEdit(false)}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                    
                    </InputContainer>
                    
               </DataItemContainer>
               <Error name="name" component="div" />
               
               <DataItemContainer>
                   <Label>Email:</Label>
                   <InputContainer>  
    <Input
  type="email"
  name="email" readOnly={!isEmailEdit} validate={validateEmail}autoComplete='off'/>


  { !isEmailEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisEmailEdit(true)}} ><TbPencilMinus style={{ color: '#54adff', hoverColor:'#00C3AD', width: '18px', height: '18px'}}/> </ButtonEdit>}
 { isEmailEdit && isAllowed &&<ButtonEdit type="button" onClick={()=> {editing(); setisEmailEdit(false)}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                   
                    </InputContainer>
               </DataItemContainer>
               <Error name="email" component="div" />
               <DataItemContainer>
                   <Label>Birthday:</Label>
                   <InputContainer> 
    <Input
  type="text"
  name="birthday" readOnly={!isBirthEdit} autoComplete='off' validate={validateBirth}/>
 {!isBirthEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisBirthEdit(true)}} ><TbPencilMinus style={{ color: '#54adff', width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isBirthEdit && isAllowed &&<ButtonEdit type="button" onClick={()=> {editing(); setisBirthEdit(false)}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                   
               
                    </InputContainer>
                    </DataItemContainer>
                    <Error name="birthday" component="div" />
               
               <DataItemContainer>
               <Label>Phone:</Label>
               <InputContainer> 
    <Input
  type="text"
  name="phone" readOnly={!isPhoneEdit} validate={validatePhone} />
  {!isPhoneEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisPhoneEdit(true)}} ><TbPencilMinus style={{ color: '#54adff', width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isPhoneEdit && isAllowed &&<ButtonEdit type="button" onClick={()=> {editing(); setisPhoneEdit(false)}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                  
                    </InputContainer>
               </DataItemContainer>
               <Error name="phone" component="div" />
               <DataItemContainer>
               <Label>City:</Label>
               <InputContainer> 
    <Input
  type="text"
  name="city" readOnly={!isCityEdit} autoComplete='off' validate={validateCity}/>
  {!isCityEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisCityEdit(true)}} ><TbPencilMinus style={{ color: '#54adff', width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isCityEdit && isAllowed&&<ButtonEdit type="button" onClick={()=> {editing(); setisCityEdit(false)}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                    
                    </InputContainer>
               </DataItemContainer>
               <Error name="city" component="div" /></DataContainer>




</Form></Formik></div>
)



}

const PetsList = (props)=>{
    const { pets} = props 
    return (
        <div>
        
          
      
          {pets && <PetsItemUl >{pets.map(item => 
          
            (
          
          <PetsItem key={item.id} item={item}  />))}</PetsItemUl>}
        </div>
    )
}
const PetsItem =({item})=>{
    
  
      // console.log(item)
      const {photo, name, dateOfBirth, breed, comments} = item
     
      return (
      
      <ContainerPet >
        <PetImg src={photo} alt={name} />

        <InfoPet><InfoPetItem><LabelPet>Name:</LabelPet><InfoPetText>{name}</InfoPetText><ButtonDeletePet><FiTrash2 style={{ color: '#54adff', width: '18px', height: '26px' }}/></ButtonDeletePet></InfoPetItem>
        <InfoPetItem><LabelPet>Date of birth:</LabelPet><InfoPetText>{dateOfBirth}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Breed:</LabelPet><InfoPetText>{breed}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Comments:</LabelPet><InfoPetText>{comments}</InfoPetText></InfoPetItem>
        </InfoPet>
  </ContainerPet>
    )}