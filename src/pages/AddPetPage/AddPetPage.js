import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AddFormWrapper } from './AddPetPage.styled';
import AddPetPageForm from '../../components/AddPetCard/PetPageForm/PetPageForm';
const AddPetPage = () => {
    return (
    <>
    <AddFormWrapper>
      <AddPetPageForm />
    </AddFormWrapper>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default AddPetPage;
