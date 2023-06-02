import { useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    AddForm,
    AddFormTitle,
    AddFormList,
    AddFormItem,
    AddFormStepName,
  } from './PetPageForm.styled';

import { addNotice } from 'redux/noticesPage/operations';
// import { addMyPet } from 'redux/auth/operations';
import { addPet } from 'redux/user/operations';

import { validatePetSchema } from '../validatePet';
import Modal from '../Modal/Modal';
import AddPetModal from '../AddPetModal/AddPetModal';
// import AddModal from 'components/ReusableComponents/Modal/AddModal';

import MoreInfo from '../MoreInfoForm/MoreInfoForm';
import ChooseForm from '../ChooseForm/ChooseForm';
import PersonalForm from '../PersonalForm/PersonalForm';


const AddPetPageForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    title: '',
    birthday: '',
    breed: '',
    location: '',
    comments: '',
    avatar: null,
    sex: '',
    price: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const getPageTitle = useCallback(() => {
    if (step < 1) return 'Add Pet';

    const titles = {
      'your pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'for-free': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[formData.category] || 'Add Pet';
  }, [formData.category, step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const setClassName = index => {
    if (index > step) return '';
    if (index < step) return 'completed';
    return 'current';
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async () => {
    
    if (!formData.category) return;

    const newFormData = new FormData();
    newFormData.append('category', formData.category);
    newFormData.append('name', formData.name);
    newFormData.append('birthday', formData.birthday);
    newFormData.append('breed', formData.breed);
    newFormData.append('avatar', formData.avatar);

    if (formData.comments) {
      newFormData.append('comments', formData.comments);
    }

    if (formData.category === 'your pet') {
      dispatch(addPet(newFormData));
      toggleModal();
      return;
    }
    
    newFormData.delete('category', formData.category);
    newFormData.append('title', formData.title);
    newFormData.append('sex', formData.sex);
    newFormData.append('location', formData.location);

    if (formData.category === 'lost-found') {
      dispatch(addNotice({ category: 'lost-found', newFormData }));
      toggleModal();
      return;
    }

    if (formData.category === 'for-free') {
      dispatch(addNotice({ category: 'in-good-hands', newFormData }));
      toggleModal();
      return;
    }

    newFormData.append('price', formData.price);

    if (formData.category === 'sell') {
      dispatch(addNotice({ category: formData.category, newFormData }));
      toggleModal();
    }
  };
  
    return (
      <div step={step} category={formData.category}>
        <AddFormTitle>{title}</AddFormTitle>
        <AddFormList>
          {steps.map((stepName, index) => (
            <AddFormItem key={index} className={setClassName(index)}>
              <AddFormStepName>{stepName}</AddFormStepName>
            </AddFormItem>
          ))}
        </AddFormList>
        <Formik
          initialValues={formData}
          validationSchema={validatePetSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {() => (
            <AddForm autoComplete="on">
              {step === 0 && (
                <ChooseForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  cancel={backLink}
                />
              )}
              {step === 1 && (
                <PersonalForm
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={handleNextClick}
                  backStep={handlePrevClick}
                />
              )}
              {step === 2 && (
                <MoreInfo
                  formData={formData}
                  setFormData={setFormData}
                  backStep={handlePrevClick}
                  submit={handleSubmit}
                />
              )}
            </AddForm>
          )}
        </Formik>
        {isModalOpen &&
        (
          <Modal toggleModal={() => navigate(backLink)}>
            <AddPetModal backLink={backLink} category={formData.category} />
          </Modal>
        )}
      </div>
    );
  };
  
  export default AddPetPageForm;
  
