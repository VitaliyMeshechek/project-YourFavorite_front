import {
  BackButton,
  BackIcon,
  ForwardButton,
  ForwardIcon,
  PageButton,
  PaginationWrapper,
} from './NewsPagination.styled';

const NewsPagination = () => {
  return (
    <PaginationWrapper>
      <BackButton>
        <BackIcon></BackIcon>
      </BackButton>
      <PageButton>1</PageButton>
      <PageButton>2</PageButton>

      <PageButton>3</PageButton>

      <PageButton>4</PageButton>
      <ForwardButton>
        <ForwardIcon></ForwardIcon>
      </ForwardButton>
    </PaginationWrapper>
  );
};

export default NewsPagination;
