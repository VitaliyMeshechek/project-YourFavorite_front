import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Input, Title } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <Container>
        <Title> Find your favorite pet</Title>
        <Input placeholder="search"></Input>
      </Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainPage;
