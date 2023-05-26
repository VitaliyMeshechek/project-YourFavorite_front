import { Menu } from './Burger.styled';
import { UserNavWrapper, NawWrapper } from './Burger.styled';
import { UserNav } from '../UserNav/UserNav';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
// import { useEffect } from 'react';

export const BurgerMenu = ({ isMenuOpen, user, openMenu }) => {
  // useEffect(() => {
  //   // toggleEventListener(isMenuOpen);
  //   //   window.addEventListener('keydown', handleKeydown);
  //   //   return () => window.removeEventListener('keydown', handleKeydown);
  //   const handleKeydown = e => {
  //     if (e.code === 'Escape') {
  //       openMenu();
  //     }
  //   };
  //   isMenuOpen
  //     ? window.addEventListener('keydown', handleKeydown)
  //     : window.removeEventListener('keydown', handleKeydown);
  // }, [isMenuOpen, openMenu]);

  const onBurgerMenuClick = e => {
    if (e.target) {
      openMenu();
    }
  };
  return (
    <Menu isOpen={isMenuOpen} onClick={onBurgerMenuClick}>
      <UserNavWrapper>{user ? <UserNav /> : <AuthNav />}</UserNavWrapper>
      <NawWrapper>
        <Nav />
      </NawWrapper>
    </Menu>
  );
};
