import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainPage;
