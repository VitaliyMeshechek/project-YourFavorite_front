import { Container } from 'pages/FindePets/FindPeds.styled';
import {
  Img,
  FirstTitle,
  ImgFirstPaw,
  ImgSecondPaw,
  ImgThirdPaw,
  ImgForthPaw,
} from './MainContent.styled';

export const FirstMainPage = () => {
  return (
    <Img>
      <Container>
        <FirstTitle>Take good care of your small pets</FirstTitle>
        <ImgFirstPaw></ImgFirstPaw>
        <ImgSecondPaw></ImgSecondPaw>
        <ImgThirdPaw></ImgThirdPaw>
        <ImgForthPaw></ImgForthPaw>
      </Container>
    </Img>
  );
};
