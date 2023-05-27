import { useState } from 'react';
import {
  AppBarWrapper,
  Header,
  SiteNavWrapper,
  NavWrapper,
  UserNavWrapper,
} from './AppBar.styled';
import { Container } from '../../ReusableComponents/MainContainer/MainContainer.styled';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { UserNav, NavAvatar } from '../UserNav/UserNav';
import { AuthNav } from '../AuthNav/AuthNav';
import { BurgerBtn } from '../Burger/BurgerBtn';
import { BurgerMenu } from '../Burger/BurgerMenu';

import { useAuth } from 'hooks';

export const AppBar = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };
  const closeMenu = () => {
    if (menuOpen) {
      setIsMenuOpen(false);
    }
    return;
  };

  return (
    <>
      <AppBarWrapper>
        <Container>
          <Header>
            <Logo close={closeMenu} />
            <SiteNavWrapper>
              <Nav></Nav>
            </SiteNavWrapper>
            <NavWrapper>
              <UserNavWrapper>
                {isLoggedIn ? <UserNav /> : <AuthNav />}
              </UserNavWrapper>
              {isLoggedIn && !menuOpen && <NavAvatar />}
              <BurgerBtn toggle={toggleMenu} isMenuOpen={menuOpen} />
            </NavWrapper>
          </Header>
        </Container>
        <BurgerMenu
          isMenuOpen={menuOpen}
          user={isLoggedIn}
          openMenu={toggleMenu}
        />
      </AppBarWrapper>
    </>
  );
};
