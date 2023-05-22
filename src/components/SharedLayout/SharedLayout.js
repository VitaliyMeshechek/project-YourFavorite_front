import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';
import { AppBar } from 'components/Header/AppBar/AppBar';
import { FirstMainPage } from 'components/MainContent/MainContent';

const SharedLayout = () => {
  return (
    <>
      <AppBar />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </>
  );
};

export default SharedLayout;
