/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  BackButton,
  BackIcon,
  ForwardButton,
  ForwardIcon,
  PageButton,
  PaginationWrapper,
} from './Pagination.styled';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ length }) => {
  const pagesArr = [];
  const [currentPage, setCurrentPage] = useState(1);
  const mediaTablet = window.screen.width >= 768 && true;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    setSearchParams({ page: currentPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const pages = length < 20 ? 1 : length / 20;

  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  const preparePages = () => {
    const countMinus = mediaTablet ? 3 : 2;
    const countEnd = mediaTablet ? 5 : 4;

    const start = () => {
      if (currentPage === 1) {
        return currentPage - 1;
      }
      if (currentPage === 2) {
        return currentPage - 2;
      }

      if (pagesArr.length - currentPage <= 1) {
        return pagesArr.length - countEnd;
      }
      return currentPage - countMinus;
    };

    let end = start() + countEnd;

    if (pagesArr.length - currentPage <= 2) {
      end = pagesArr.length;
    }
    return pagesArr.slice(start(), end);
  };

  return (
    <PaginationWrapper>
      <BackButton
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage <= 1 && true}
      >
        <BackIcon></BackIcon>
      </BackButton>
      {preparePages().map(i => {
        const accent = i === currentPage && 'accent';
        return (
          <PageButton key={i} accent={accent} onClick={() => setCurrentPage(i)}>
            {i}
          </PageButton>
        );
      })}
      <ForwardButton
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage >= pagesArr.length && true}
      >
        <ForwardIcon></ForwardIcon>
      </ForwardButton>
    </PaginationWrapper>
  );
};

export default Pagination;
