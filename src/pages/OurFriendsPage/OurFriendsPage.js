import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const OurFriendsPage = () => {
    return (
    <>
    <div>friends page</div>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default OurFriendsPage