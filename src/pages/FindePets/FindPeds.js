import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { LisSearch } from 'components/MainContent/ListSearch/ListSearch';
import pets from '../../pets';
import { Container, Input, SearchForm, Title } from './FindPeds.styled';

const FindPeds = () => {
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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default FindPeds;
