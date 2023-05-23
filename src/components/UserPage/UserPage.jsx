import { Formik, Form   } from "formik";
import { Error, Input, ContainerUser,ContainerPet, DataItemContainer,InputContainer, UserPageContainer,UserImg ,ButtonPhoto, ButtonEdit, Label,LabelPet, ButtonLogout, ButtonAddPet, Header, MyPetsHeaderContainer, InfoPetItem,InfoPet,InfoPetText, PetsItemUl,PetImg, ButtonDeletePet, DataContainer, PhotoContainer,UserBlock, PetBlock} from './UserPage.styled';
import {FiCamera,FiLogOut, FiTrash2} from 'react-icons/fi';
import{AiOutlineCheck}from 'react-icons/ai';
import{TbPencilMinus} from 'react-icons/tb';
// import * as Yup from 'yup';
import { useState } from "react";
import { useDispatch } from 'react-redux';
// import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
// import {  updateUser } from '../../redux/user/operations';

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
  const dispatch = useDispatch();
    return(<ButtonLogout type="button" onClick={() => dispatch(logOut())}><FiLogOut style={{rotate:"180deg", width: '22px', height: '21px', marginRight:'16px', }}/>Log Out</ButtonLogout>)
}
const PetsData =()=>{
  const  pets=[
    
        {
          id:"1",
          photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments:"trararar",},
    
        {
          id:"2",
          photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",}, {
          id:"3",
          photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",}, {
          id:"4",photo:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",name:"zuza",
        dateOfBirth:"01.01.2015",
        breed: "mongrel",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!",},
    ]
    return(
        <div>
    {pets.length===0 && <Header>You have not added your pets yet</Header>}
    <PetsList pets = {pets}/></div>)
}

const UserData =()=>{ 
  // const dispatch = useDispatch();
  // const { user } = useAuth();

const [isPhotoEdit, setisPhotoEdit] =useState(false);
const [isNameEdit, setisNameEdit] =useState(false);
const [isEmailEdit, setisEmailEdit] =useState(false);
const [isBirthEdit, setisBirthEdit] =useState(false);
const [isPhoneEdit, setisPhoneEdit] =useState(false);
const [isCityEdit, setisCityEdit] =useState(false);
const [isAllowedName, setisAllowedName ] = useState(true);
const [isAllowedEmail, setisAllowedEmail ] = useState(true);
const [isAllowedBIrth, setisAllowedBirth ] = useState(true);
const [isAllowedPhone, setisAllowedPhone ] = useState(true);
const [isAllowedCity, setisAllowedCity ] = useState(true);
// const [isPhotoEdit, setisPhotoEdit] =useState(false);

const initialValues = {
  name: 'User',
  email: 'user@pets.com',
  birthday:'00.00.0000',
  phone:'+380000000000',
  city:'Kyiv'


  // name: user.name,
  // email: user.email,
  // birthday:user.birthday,
  // phone:user.phone,
  // city:user.city

};
const [NameEdit, setNameEdit] =useState(initialValues.name);
const [EmailEdit, setEmailEdit] =useState(initialValues.email);
const [BirthEdit, setBirthEdit] =useState(initialValues.birthday);
const [PhoneEdit, setPhoneEdit] =useState(initialValues.phone);
const [CityEdit, setCityEdit] =useState(initialValues.city);


    const editing =()=>{
        setisPhoneEdit(false);
       setisBirthEdit(false)
       setisCityEdit(false)
       setisEmailEdit(false)
       setisNameEdit(false)
       setisPhoneEdit(false)
    }


 

  const handleSubmit = (values) => {
    console.log(",,mmm")
  };
  const updateUser = (values) => {
    console.log(values)
  };

  

function validateName(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u.test(value)) {
      error = 'You can use only letters, min 2 symbols';
    }
    setisAllowedName(true)
    if (error){setisAllowedName(false)}
    
  if(!error){
    setNameEdit(value)
  }
    return error;
  }
 
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    setisAllowedEmail(true)
    if(!error){
      setEmailEdit(value)}
      if (error){setisAllowedEmail(false)}
    
    return error;
  }

  function validateBirth(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[0-9]{2}?[.]?[0-9]{2}?[.]?[0-9]{4}$/.test(value)) {
      error = 'Should be in format 00.00.0000';
    }
    setisAllowedBirth(true)
    if(!error){
      setBirthEdit(value)}
      if (error){setisAllowedBirth(false)}
    
    return error;
  }
  function validatePhone(value) {
    let error;
    if (!value) {
      error = 'Required';
    }

    else if (!/^[+]?[(]?[380]{3}[)]?[0-9]{3}?[0-9]{6}$/.test(value)) {
      error = 'phone should start with +380 and have 12 symbols';
    }
    setisAllowedPhone(true)
    if(!error){
      setPhoneEdit(value)}
      if (error){setisAllowedPhone(false)}
    
    return error;
  }
  
  function validateCity(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u.test(value)) {
      error = 'You can use only letters, min 2 symbols';
    }
    setisAllowedCity(true)
    if(!error){
      setCityEdit(value)}
      if (error){setisAllowedCity(false)}
    
    return error;
  }


return(
 <div>
<Formik initialValues= {initialValues} validateOnChange onSubmit={handleSubmit} >
          
         <Form >
         <PhotoContainer><UserImg src=" https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />

         
         {!isPhotoEdit &&  <ButtonPhoto type="button" onClick={()=> {editing(); setisPhotoEdit(true)}}><FiCamera  style={{  width: '20px', height: '16px', marginRight:'6px' }}/>Edit photo</ButtonPhoto> }

{isPhotoEdit &&<ButtonPhoto type="button" onClick={()=> {editing(); setisPhotoEdit(false)}}><AiOutlineCheck  style={{  width: '22px', height: '18px', marginRight:'6px' }}/>Confirm</ButtonPhoto>}
         
         </PhotoContainer>
         <DataContainer>
             <DataItemContainer>
                 <Label>Name:</Label>
                 <InputContainer>  
  <Input
type="text"
name="name" readOnly={!isNameEdit} validate={validateName} autoComplete='off'/>

{!isNameEdit &&  <ButtonEdit type="button" onClick={(e)=> {editing(); setisNameEdit(true)} } ><TbPencilMinus style={{  width: '18px', height: '18px'}}/> </ButtonEdit> }

{isNameEdit && isAllowedName &&<ButtonEdit type="button" 
onClick={()=> {editing(); setisNameEdit(false); updateUser({"name":NameEdit})}} 
><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                  
                  </InputContainer>
                  
             </DataItemContainer>
             <Error name="name" component="div" />
             
             <DataItemContainer>
                 <Label>Email:</Label>
                 <InputContainer>  
  <Input
type="email"
name="email" readOnly={!isEmailEdit} validate={validateEmail}autoComplete='off'/>{ !isEmailEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisEmailEdit(true)}} ><TbPencilMinus style={{  hoverColor:'#00C3AD', width: '18px', height: '18px'}}/> </ButtonEdit>}
 { isEmailEdit && isAllowedEmail &&<ButtonEdit type="button" onClick={()=> {editing(); setisEmailEdit(false); updateUser({"email":EmailEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                   
                    </InputContainer>
               </DataItemContainer>
               <Error name="email" component="div" />
               <DataItemContainer>
                   <Label>Birthday:</Label>
                   <InputContainer> 
    <Input
  type="text"
  name="birthday" readOnly={!isBirthEdit} autoComplete='off' validate={validateBirth}/>
 {!isBirthEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisBirthEdit(true)}} ><TbPencilMinus style={{  width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isBirthEdit && isAllowedBIrth &&<ButtonEdit type="button" onClick={()=> {editing(); setisBirthEdit(false); updateUser({"birthday":BirthEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                   
               
                    </InputContainer>
                    </DataItemContainer>
                    <Error name="birthday" component="div" />
               
               <DataItemContainer>
               <Label>Phone:</Label>
               <InputContainer> 
    <Input
  type="text"
  name="phone" readOnly={!isPhoneEdit} validate={validatePhone} />
  {!isPhoneEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisPhoneEdit(true)}} ><TbPencilMinus style={{  width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isPhoneEdit && isAllowedPhone &&<ButtonEdit type="button" onClick={()=> {editing(); setisPhoneEdit(false); updateUser({"phone":PhoneEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                  
                    </InputContainer>
               </DataItemContainer>
               <Error name="phone" component="div" />
               <DataItemContainer>
               <Label>City:</Label>
               <InputContainer> 
    <Input
  type="text"
  name="city" readOnly={!isCityEdit} autoComplete='off' validate={validateCity}/>
  {!isCityEdit && <ButtonEdit type="button" onClick={()=> {editing(); setisCityEdit(true)}} ><TbPencilMinus style={{  width: '18px', height: '18px'}}/> </ButtonEdit>}
 {isCityEdit && isAllowedCity&&<ButtonEdit type="button" onClick={()=> {editing(); setisCityEdit(false);updateUser({"city":CityEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                    
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
            (<PetsItem key={item.id} item={item}  />))}</PetsItemUl>}
        </div>
    )
}
const PetsItem =({item})=>{
          // console.log(item)
      const {photo, name, dateOfBirth, breed, comments} = item
     
      return (
      
      <ContainerPet >
        <PetImg src={photo} alt={name} />

        <InfoPet><InfoPetItem><LabelPet>Name:</LabelPet><InfoPetText>{name}</InfoPetText><ButtonDeletePet><FiTrash2 style={{  width: '18px', height: '26px' }}/></ButtonDeletePet></InfoPetItem>
        <InfoPetItem><LabelPet>Date of birth:</LabelPet><InfoPetText>{dateOfBirth}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Breed:</LabelPet><InfoPetText>{breed}</InfoPetText></InfoPetItem>
        <InfoPetItem><LabelPet>Comments:</LabelPet><InfoPetText>{comments}</InfoPetText></InfoPetItem>
        </InfoPet>
  </ContainerPet>
    )}