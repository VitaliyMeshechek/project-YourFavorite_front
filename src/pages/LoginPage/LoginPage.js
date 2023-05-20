import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
    <>
    <div>login page</div>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default LoginPage