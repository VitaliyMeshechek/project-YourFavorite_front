// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Title, Page } from './NewsPage.styled';
import { Container } from 'pages/FindePets/FindPeds.styled';
import SearchInput from 'components/News/Search/SearchInput';
import NewsList from 'components/News/NewsList/NewsList';
import NewsPagination from 'components/News/NewsPagination/NewsPagination';
const NewsPage = () => {
  return (
    <Page>
      <Container>
        <Title>News</Title>
        <SearchInput />
        <NewsList></NewsList>
        <NewsPagination></NewsPagination>
        {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
      </Container>
    </Page>
  );
};

export default NewsPage;
