import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
    return (
    <>
    <div>notices page</div>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default NoticesPage