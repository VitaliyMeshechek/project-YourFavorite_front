import { Container } from 'pages/FindePets/FindPeds.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FriendsContainer, FriendsTitle } from './OurFriendsPage.styled';
import { FriendsList } from './FriendsList/FriendsList';
import sponsors from '../../sponsors.json';

const OurFriendsPage = () => {
  return (
    <Container>
      <FriendsContainer>
     <FriendsTitle>Our friends</FriendsTitle>
        <FriendsList friends={sponsors} />
      </FriendsContainer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default OurFriendsPage;
