import { Container } from 'pages/FindePets/FindPeds.styled';
import { FirstImg, FirstTitle, SecondImg, ThirdImg, WrapperContainer } from './MainContent.styled';
import pet1 from '../../images/1.png';
import pet2 from '../../images/2.png';
import pet3 from '../../images/3.png';

export const FirstMainPage = () => {
  return (
    <Container>
      <WrapperContainer>
        <FirstTitle>Take good care of your small pets</FirstTitle>
        <FirstImg src={pet1} alt="dog" />
        <SecondImg src={pet2} alt="dog" />
        <ThirdImg src={pet3} alt="dog" />
      </WrapperContainer>
    </Container>
  );
};
