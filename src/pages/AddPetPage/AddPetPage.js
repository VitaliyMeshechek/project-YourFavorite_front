import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AddPetPageForm from '../../components/AddPetCard/PetPageForm/PetPageForm';
const AddPetPage = () => {
  return (
    <>
      <div>
        <AddPetPageForm />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AddPetPage;
