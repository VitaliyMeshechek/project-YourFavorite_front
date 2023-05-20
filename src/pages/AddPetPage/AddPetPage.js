import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AddPetPage = () => {
    return (
    <>
    <div>add pet page</div>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default AddPetPage;
