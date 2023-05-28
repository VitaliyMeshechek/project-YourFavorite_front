// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Title, Page } from './NewsPage.styled';
import { Container } from 'pages/FindePets/FindPeds.styled';
import SearchInput from 'components/News/Search/SearchInput';
import NewsList from 'components/News/NewsList/NewsList';
import Pagination from 'components/ReusableComponents/Pagination/Pagination';
const NewsPage = () => {
  return (
    <Page>
      <Container>
        <Title>News</Title>
        <SearchInput />
        <NewsList></NewsList>
        <Pagination></Pagination>
        {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
      </Container>
    </Page>
  );
};

export default NewsPage;
