import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'components/Nav/Nav';
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';

export const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};