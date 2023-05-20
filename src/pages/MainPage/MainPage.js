import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Input, SearchForm, Title } from './MainPage.styled';
import { CiSearch } from 'react-icons/ci';
import { LisSearch } from 'components/MainContent/ListSearch/ListSearch';
import pets from '../../pets';
const MainPage = () => {
  return (
    <>
      <Container>
        <Title> Find your favorite pet</Title>
        <SearchForm>
          <Input placeholder="Search"></Input>
          <CiSearch
            style={{
              width: 24,
              height: 24,
              position: 'absolute',
              right: 12,
              top: 16,
              color: '#54ADFF',
            }}
          />
        </SearchForm>
        <LisSearch pets={pets} />
      </Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainPage;
