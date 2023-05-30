/* eslint-disable react-hooks/exhaustive-deps */
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { Title, Page } from './NewsPage.styled';
import { Container } from 'pages/FindePets/FindPeds.styled';
import SearchInput from 'components/News/Search/SearchInput';
import NewsList from 'components/News/NewsList/NewsList';
import Pagination from 'components/ReusableComponents/Pagination/Pagination';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectNews } from 'redux/news/selectors';
import { fetchNews } from 'redux/news/operations';
import { useSearchParams } from 'react-router-dom';

const NewsPage = () => {
  const dispatch = useDispatch();

  const [filteredArr, setFilteredArr] = useState([]);
  const filter = useSelector(selectFilter);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const news = useSelector(selectNews);
  const end = page * 20;
  const start = end - 20;

  const newNews = arr => {
    return [...arr]
      .sort((x, y) => {
        let xDate = new Date(x.date).getTime();
        let yDate = new Date(y.date).getTime();

        return xDate + yDate;
      })
      .slice(start, end);
  };

  useEffect(() => {
    if (filter !== '') {
      const filteredArr = news.filter(({ title }) => {
        return title.includes(filter);
      });
      setFilteredArr(filteredArr);
      return;
    }
    setFilteredArr('');
    return;
  }, [filter]);

  return (
    <Page>
      <Container>
        <Title>News</Title>
        <SearchInput />
        {filteredArr.length ? (
          <NewsList news={newNews(filteredArr)}></NewsList>
        ) : (
          <NewsList news={newNews(news)}></NewsList>
        )}
        {filteredArr.length ? (
          <Pagination length={filteredArr.length}></Pagination>
        ) : (
          <Pagination length={news.length}></Pagination>
        )}

        {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
      </Container>
    </Page>
  );
};

export default NewsPage;
