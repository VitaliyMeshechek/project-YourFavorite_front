<<<<<<< HEAD
import { Formik, Form } from 'formik';

import {
  Error,
  Input,
  ContainerUser,
  ContainerPet,
  DataItemContainer,
  InputContainer,
  UserPageContainer,
  UserImg,
  ButtonPhoto,
  ButtonEdit,
  Label,
  LabelPet,
  ButtonLogout,
  NavLinkStyled,
  Header,
  MyPetsHeaderContainer,
  InfoPetItem,
  InfoPet,
  InfoPetText,
  PetsItemUl,
  PetImg,
  ButtonDeletePet,
  DataContainer,
  PhotoContainer,
  UserBlock,
  PetBlock,
  InputPhoto,
  ButtonPhotoEdit,
} from './UserPage.styled';
import { FiCamera, FiLogOut, FiTrash2 } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';
import { TbPencilMinus } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import {
  updateUser,
  updateUserPhoto,
  deletePet,
} from '../../redux/user/operations';
import { BsPlus } from 'react-icons/bs';
import { selectModal } from '../../redux/modal/selectors';

import CongratsModal from 'components/ReusableComponents/Modal/CongratsModal';
import LeavingModal from 'components/ReusableComponents/Modal/LeavingModal';

import PhotoDef from '../../../src/images/UserPhotoDefault.png';

import { showModal } from '../../redux/modal/slice';
import { useAuth } from 'hooks';

export const UserPageInfo = () => {
  const isFirstTime = false;
  const { user } = useAuth();
=======
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
>>>>>>> main

  // коли буде в БД в Юзера буде це поле треба підтягнути

<<<<<<< HEAD
  const modalState = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFirstTime) {
      dispatch(showModal(false));
    }
  }, [isFirstTime, dispatch]);
=======
  // const modalState = useSelector(selectModal)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLogin) {
    dispatch(showModal(false));
  
}},[firstLogin,dispatch]);
>>>>>>> main

  console.log(modalState);
  // if (modalState &&isLogoutModal) {
  //   setIsFirstTime(false);

  // }

  // console.log(modalState)
  // console.log(isFirstTime)

  const toggleModal = () => {
<<<<<<< HEAD
    console.log('Are you sure you want');
    dispatch(showModal(true));
  };

  const approveLogOut = async () => {
    console.log('want to log out');

    await dispatch(logOut());
  };

  const toggleFirstLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const firstLogin = user.firstLogin;
  };
=======
  
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
>>>>>>> main

  return (
    <div>
      {isFirstTime && <CongratsModal func={toggleFirstLogin} />}
      {!isFirstTime && <LeavingModal approveHandle={approveLogOut} />}

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

<<<<<<< HEAD
const Logout = ({ toggleModal }) => {
  return (
    <ButtonLogout type="button" onClick={toggleModal}>
      <FiLogOut
        style={{
          rotate: '180deg',
          width: '22px',
          height: '21px',
          marginRight: '16px',
        }}
      />
      Log Out
    </ButtonLogout>
  );
};
const PetsData = () => {
  const pets = [
    {
      id: '1',
      photo:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      name: 'zuza',
      dateOfBirth: '01.01.2015',
      breed: 'mongrel',
      comments: 'trararar',
    },

    {
      id: '2',
      photo:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      name: 'zuza',
      dateOfBirth: '01.01.2015',
      breed: 'mongrel',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!',
    },
    {
      id: '3',
      photo:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      name: 'zuza',
      dateOfBirth: '01.01.2015',
      breed: 'mongrel',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!',
    },
    {
      id: '4',
      photo:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      name: 'zuza',
      dateOfBirth: '01.01.2015',
      breed: 'mongrel',
      comments:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab mollitia praesentium iste reiciendis impedit, accusamus rerum aliquam tempora tenetur aspernatur similique, odit velit a itaque quidem dolorem magni possimus!',
    },
  ];
  return (
    <div>
      {pets.length === 0 && <Header>You have not added your pets yet</Header>}
      <PetsList pets={pets} />
    </div>
  );
};

const UserData = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  const [isPhotoEdit, setisPhotoEdit] = useState(false);
  const [isNameEdit, setisNameEdit] = useState(false);
  const [isEmailEdit, setisEmailEdit] = useState(false);
  const [isBirthEdit, setisBirthEdit] = useState(false);
  const [isPhoneEdit, setisPhoneEdit] = useState(false);
  const [isCityEdit, setisCityEdit] = useState(false);
  const [isAllowedName, setisAllowedName] = useState(true);
  const [isAllowedEmail, setisAllowedEmail] = useState(true);
  const [isAllowedBIrth, setisAllowedBirth] = useState(true);
  const [isAllowedPhone, setisAllowedPhone] = useState(true);
  const [isAllowedCity, setisAllowedCity] = useState(true);

  const initialValues = {
    photo: PhotoDef,
    name: 'User',
    email: 'user@pets.com',
    birthday: '00.00.0000',
    phone: '+380000000000',
    city: 'Kyiv',

    // name: user.name,
    // email: user.email,
    // birthday:user.birthday,
    // phone:user.phone,
    // city:user.city
  };
  const [NameEdit, setNameEdit] = useState(initialValues.name);
  const [EmailEdit, setEmailEdit] = useState(initialValues.email);
  const [BirthEdit, setBirthEdit] = useState(initialValues.birthday);
  const [PhoneEdit, setPhoneEdit] = useState(initialValues.phone);
  const [CityEdit, setCityEdit] = useState(initialValues.city);
  const [PhotoEdit, setPhotoEdit] = useState(null);

  const editing = () => {
    setisPhoneEdit(false);
    setisBirthEdit(false);
    setisCityEdit(false);
    setisEmailEdit(false);
    setisNameEdit(false);
    setisPhoneEdit(false);
  };

  // function handleFileSelect(event) {
  //   const files = event.target.files;
  //   const file = files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = function (e) {
  //       const imgElement = document.getElementById('userPhoto');
  //       imgElement.src = e.target.result;
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }

  // const [, setSelectedFile] = useState(null);

  //   const handleFileChange = (e) => {

  //     const file = e.target.files[0];
  //     setPhotoEdit(file);
  //  };

  useEffect(() => {
    if (PhotoEdit) {
      console.log('File has been set.');
    }
  }, [PhotoEdit]);

  const handleUpload = async () => {
    if (!PhotoEdit) {
      alert('Please first select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', PhotoEdit);

    console.log('api process upload');
    dispatch(updateUserPhoto(PhotoEdit));
    // // 👇 Uploading the file using the fetch API to the server
    // fetch('https://httpbin.org/post', {
    //   method: 'POST',
    //   body: file,
    //   // 👇 Set headers manually for single file upload
    //   headers: {
    //     'content-type': file.type,
    //     'content-length': `${file.size}`, // 👈 Headers need to be a string
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
  };

  const handleUpdateUser = values => {
    console.log(values);
    dispatch(updateUser(values));
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^([A-Za-z\-']{1,20})|([А-Яа-я\-']{1,20})$/u.test(value)) {
      error = 'You can use only letters, min 2 symbols';
    }
    setisAllowedName(true);
    if (error) {
      setisAllowedName(false);
    }

    if (!error) {
      setNameEdit(value);
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
    setisAllowedEmail(true);
    if (!error) {
      setEmailEdit(value);
    }
    if (error) {
      setisAllowedEmail(false);
    }

    return error;
  }

  function validateBirth(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (
      !/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(
        value
      )
    ) {
      error = 'Should be in format 00.00.0000';
    }
    setisAllowedBirth(true);
    if (!error) {
      setBirthEdit(value);
    }
    if (error) {
      setisAllowedBirth(false);
    }

    return error;
  }
  function validatePhone(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^\+38(0\d{9})$/.test(value)) {
      error = 'phone should start with +380 and have 12 symbols';
    }
    setisAllowedPhone(true);
    if (!error) {
      setPhoneEdit(value);
    }
    if (error) {
      setisAllowedPhone(false);
    }

    return error;
  }

  function validateCity(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/u.test(value)) {
      error = 'You can use only letters, min 2 symbols';
    }
    setisAllowedCity(true);
    if (!error) {
      setCityEdit(value);
    }
    if (error) {
      setisAllowedCity(false);
    }

    return error;
  }

  return (
    <div>
      <Formik initialValues={initialValues} validateOnChange>
        <Form>
          <PhotoContainer>
            <InputPhoto
              type="file"
              onChange={e => setPhotoEdit(e.target.files[0])}
              onClick={() => {
                editing();
                setisPhotoEdit(true);
              }}
              name="photo"
              value={''}
            />

            <UserImg src={initialValues.photo} alt="" />

            {!isPhotoEdit && (
              <ButtonPhotoEdit>
                <FiCamera
                  style={{ width: '20px', height: '16px', marginRight: '6px' }}
                />
                Edit photo
              </ButtonPhotoEdit>
            )}

            {isPhotoEdit && (
              <ButtonPhoto
                onClick={() => {
                  editing();
                  setisPhotoEdit(false);
                  handleUpload();
                }}
              >
                <AiOutlineCheck
                  style={{ width: '22px', height: '18px', marginRight: '6px' }}
                />
                Confirm
              </ButtonPhoto>
            )}
          </PhotoContainer>
          <DataContainer>
            <DataItemContainer>
              <Label>Name:</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="name"
                  readOnly={!isNameEdit}
                  validate={validateName}
                  autoComplete="off"
                />

                {!isNameEdit && (
                  <ButtonEdit
                    type="button"
                    onClick={e => {
                      editing();
                      setisNameEdit(true);
                    }}
                  >
                    <TbPencilMinus style={{ width: '18px', height: '18px' }} />{' '}
                  </ButtonEdit>
                )}

                {isNameEdit && isAllowedName && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisNameEdit(false);
                      handleUpdateUser({ name: NameEdit });
                    }}
                  >
                    <AiOutlineCheck
                      style={{
                        color: '#00C3AD',
                        width: '22px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
              </InputContainer>
            </DataItemContainer>
            <Error name="name" component="div" />

            <DataItemContainer>
              <Label>Email:</Label>
              <InputContainer>
                <Input
                  type="email"
                  name="email"
                  readOnly={!isEmailEdit}
                  validate={validateEmail}
                  autoComplete="off"
                />
                {!isEmailEdit && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisEmailEdit(true);
                    }}
                  >
                    <TbPencilMinus
                      style={{
                        hoverColor: '#00C3AD',
                        width: '18px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
                {isEmailEdit && isAllowedEmail && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisEmailEdit(false);
                      handleUpdateUser({ email: EmailEdit });
                    }}
                  >
                    <AiOutlineCheck
                      style={{
                        color: '#00C3AD',
                        width: '22px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
              </InputContainer>
            </DataItemContainer>
            <Error name="email" component="div" />
            <DataItemContainer>
              <Label>Birthday:</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="birthday"
                  readOnly={!isBirthEdit}
                  autoComplete="off"
                  validate={validateBirth}
                />
                {!isBirthEdit && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisBirthEdit(true);
                    }}
                  >
                    <TbPencilMinus style={{ width: '18px', height: '18px' }} />{' '}
                  </ButtonEdit>
                )}
                {isBirthEdit && isAllowedBIrth && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisBirthEdit(false);
                      handleUpdateUser({ birthday: BirthEdit });
                    }}
                  >
                    <AiOutlineCheck
                      style={{
                        color: '#00C3AD',
                        width: '22px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
              </InputContainer>
            </DataItemContainer>
            <Error name="birthday" component="div" />

            <DataItemContainer>
              <Label>Phone:</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="phone"
                  readOnly={!isPhoneEdit}
                  validate={validatePhone}
                />
                {!isPhoneEdit && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisPhoneEdit(true);
                    }}
                  >
                    <TbPencilMinus style={{ width: '18px', height: '18px' }} />{' '}
                  </ButtonEdit>
                )}
                {isPhoneEdit && isAllowedPhone && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisPhoneEdit(false);
                      handleUpdateUser({ phone: PhoneEdit });
                    }}
                  >
                    <AiOutlineCheck
                      style={{
                        color: '#00C3AD',
                        width: '22px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
              </InputContainer>
            </DataItemContainer>
            <Error name="phone" component="div" />
            <DataItemContainer>
              <Label>City:</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="city"
                  readOnly={!isCityEdit}
                  autoComplete="off"
                  validate={validateCity}
                />
                {!isCityEdit && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisCityEdit(true);
                    }}
                  >
                    <TbPencilMinus style={{ width: '18px', height: '18px' }} />{' '}
                  </ButtonEdit>
                )}
                {isCityEdit && isAllowedCity && (
                  <ButtonEdit
                    type="button"
                    onClick={() => {
                      editing();
                      setisCityEdit(false);
                      handleUpdateUser({ city: CityEdit });
                    }}
                  >
                    <AiOutlineCheck
                      style={{
                        color: '#00C3AD',
                        width: '22px',
                        height: '18px',
                      }}
                    />{' '}
                  </ButtonEdit>
                )}
              </InputContainer>
            </DataItemContainer>
            <Error name="city" component="div" />
          </DataContainer>
        </Form>
      </Formik>
    </div>
  );
};

const PetsList = props => {
  const { pets } = props;
  return (
    <div>
      {pets && (
        <PetsItemUl>
          {pets.map(item => (
            <PetsItem key={item.id} item={item} />
          ))}
        </PetsItemUl>
      )}
    </div>
  );
};
const PetsItem = ({ item }) => {
  // console.log(item)
  const { photo, name, dateOfBirth, breed, comments, id } = item;
  const dispatch = useDispatch();

  const HandleDeletePet = () => {
    dispatch(deletePet(id));
  };
  return (
    <ContainerPet>
      <PetImg src={photo} alt={name} />

      <InfoPet>
        <InfoPetItem>
          <LabelPet>Name:</LabelPet>
          <InfoPetText>{name}</InfoPetText>
          <ButtonDeletePet onClick={HandleDeletePet}>
            <FiTrash2 style={{ width: '18px', height: '26px' }} />
          </ButtonDeletePet>
        </InfoPetItem>
        <InfoPetItem>
          <LabelPet>Date of birth:</LabelPet>
          <InfoPetText>{dateOfBirth}</InfoPetText>
        </InfoPetItem>
        <InfoPetItem>
          <LabelPet>Breed:</LabelPet>
          <InfoPetText>{breed}</InfoPetText>
        </InfoPetItem>
        <InfoPetItem>
          <LabelPet>Comments:</LabelPet>
          <InfoPetText>{comments}</InfoPetText>
        </InfoPetItem>
      </InfoPet>
    </ContainerPet>
  );
};
=======
>>>>>>> main
