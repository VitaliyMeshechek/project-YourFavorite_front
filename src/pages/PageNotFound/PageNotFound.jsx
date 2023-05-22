import {
  NotFoundSection,
  NotFoundTitle,
  Image,
  NotFoundButton,
  Icon,
} from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundTitle>
        Ooops!<br></br> This page not found :(
      </NotFoundTitle>
      <Image />
      <NotFoundButton to="/main">
        To main page <Icon />
      </NotFoundButton>
    </NotFoundSection>
  );
};

export default PageNotFound;
