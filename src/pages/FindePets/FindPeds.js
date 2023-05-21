import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LisSearch } from 'components/MainContent/ListSearch/ListSearch';
import pets from '../../pets';
import {
  Container,
  Input,
  SearchForm,
  SvgSearch,
  Title,
} from './FindPeds.styled';

const FindPeds = () => {
  return (
    <>
      <Container>
        <Title> Find your favorite pet</Title>
        <SearchForm>
          <Input placeholder="Search"></Input>
          <SvgSearch />
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
