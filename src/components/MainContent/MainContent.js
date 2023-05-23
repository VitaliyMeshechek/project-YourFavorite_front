import { Container } from 'pages/FindePets/FindPeds.styled';
import { FirstTitle, MainImg, WrapperContainer } from './MainContent.styled';
import mainPage_bg_desktop1 from '../../images/backgrounds/mainPage_bg_desktop@1x.png';
import mainPage_bg_desktop2 from '../../images/backgrounds/mainPage_bg_desktop@2x.png';
export const FirstMainPage = () => {
  return (
    <Container>
      <WrapperContainer>
        <FirstTitle>Take good care of your small pets</FirstTitle>
        <MainImg
          src={mainPage_bg_desktop1}
          srcSet={`${mainPage_bg_desktop1} 1x,   ${mainPage_bg_desktop2} 2x`}
          size="(max-weight:767.98px) 474px,(min-weight:768px) 985px, (min-weight:1280px) 917px,"
          alt="mainPage"
        />
      </WrapperContainer>
    </Container>
  );
};
