import { Formik, Form   } from "formik";


import { Error, Input, DataItemContainer,InputContainer, UserImg ,ButtonPhoto, ButtonEdit, Label, DataContainer, PhotoContainer, InputPhoto, ButtonPhotoEdit} from './UserPage.styled';
import {FiCamera} from 'react-icons/fi';
import{AiOutlineCheck}from 'react-icons/ai';
import{TbPencilMinus} from 'react-icons/tb';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useAuth} from '../../hooks/useAuth';
import {  updateUser ,updateUserPhoto} from '../../redux/user/operations';
import PhotoDef from '../../../src/images/UserPhotoDefault.png'




export const UserData =()=>{ 
    const dispatch = useDispatch();
    const { user } = useAuth();
   

  
    
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




 const defaultName = user.email ? user.email.split('@')[0] : 'User'

 const initialValues = {
 
 
   avatarUrl: user.avatarUrl ? user.avatarUrl : PhotoDef,
   name: user.name? user.name : defaultName,
   email: user.email? user.email:'user@pets.com',
   birthday:user.birthday? user.birthday:'00.00.0000',
   phone:user.phone? user.phone:'+380000000000',
   city:user.city?user.city:"City"
 
 };
 const [NameEdit, setNameEdit] =useState(initialValues.name);
 const [EmailEdit, setEmailEdit] =useState(initialValues.email);
 const [BirthEdit, setBirthEdit] =useState(initialValues.birthday);
 const [PhoneEdit, setPhoneEdit] =useState(initialValues.phone);
 const [CityEdit, setCityEdit] =useState(initialValues.city);
 const [PhotoEdit, setPhotoEdit] =useState(null);

 const [previewUrl, setPreviewUrl] = useState(initialValues.avatarUrl);

 
     const editing =()=>{
         setisPhoneEdit(false);
        setisBirthEdit(false)
        setisCityEdit(false)
        setisEmailEdit(false)
        setisNameEdit(false)
        setisPhoneEdit(false)
     }
 
 
 
   useEffect(() => {
       if(PhotoEdit){
 
     }
   },[PhotoEdit]);
 
  
 

   const handleUpload = async () => {
    if (!PhotoEdit) {
      alert("Please first select a file");
      return;
    }
  
    const formData = new FormData();
    formData.append("avatar", PhotoEdit);
  
    dispatch(updateUserPhoto(PhotoEdit)).then((response) => {
      // Assuming the API response returns the URL of the uploaded image
      setPreviewUrl(response.data.avatarUrl);
    });
  };
  


   const handleUpdateUser = (values) => {
   
     dispatch(updateUser(values))
     
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
     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(value)) {
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
     } else if (! /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(value)) {
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
 
     else if (!/^\+38(0\d{9})$/.test(value)) {
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
 <Formik initialValues = {initialValues} validateOnChange  >
           
          <Form >
          <PhotoContainer>
           
           <InputPhoto type="file" onChange={(e) => {
  setPhotoEdit(e.target.files[0]);
  setPreviewUrl(URL.createObjectURL(e.target.files[0]));
}} onClick={()=> {editing(); setisPhotoEdit(true);}} name="avatarUrl"
            value ={''}  
           />
 
           <UserImg src={previewUrl} alt="" />
 
          
          {!isPhotoEdit &&  <ButtonPhotoEdit><FiCamera  style={{  width: '20px', height: '16px', marginRight:'6px' }}/>Edit photo</ButtonPhotoEdit> }
 
 {isPhotoEdit &&<ButtonPhoto  onClick={()=> {editing(); setisPhotoEdit(false);handleUpload() }}><AiOutlineCheck  style={{  width: '22px', height: '18px', marginRight:'6px' }}/>Confirm</ButtonPhoto>}
          
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
 onClick={()=> {editing(); setisNameEdit(false); handleUpdateUser({"name":NameEdit})}} 
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
  { isEmailEdit && isAllowedEmail &&<ButtonEdit type="button" onClick={()=> {editing(); setisEmailEdit(false); handleUpdateUser({"email":EmailEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                    
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
  {isBirthEdit && isAllowedBIrth &&<ButtonEdit type="button" onClick={()=> {editing(); setisBirthEdit(false); handleUpdateUser({"birthday":BirthEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                    
                
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
  {isPhoneEdit && isAllowedPhone &&<ButtonEdit type="button" onClick={()=> {editing(); setisPhoneEdit(false); handleUpdateUser({"phone":PhoneEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                   
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
  {isCityEdit && isAllowedCity&&<ButtonEdit type="button" onClick={()=> {editing(); setisCityEdit(false);handleUpdateUser({"city":CityEdit})}} ><AiOutlineCheck  style={{ color: '#00C3AD', width: '22px', height: '18px' }}/> </ButtonEdit>}
                     
                     </InputContainer>
                </DataItemContainer>
                <Error name="city" component="div" /></DataContainer>
 
 </Form></Formik></div>
 )
 }