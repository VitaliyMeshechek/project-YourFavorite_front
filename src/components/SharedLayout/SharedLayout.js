import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';
import { AppBar } from 'components/Header/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar/>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};