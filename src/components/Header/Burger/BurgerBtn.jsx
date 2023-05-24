import { Button, Bar } from './Burger.styled';

export const BurgerBtn = ({ toggle, isMenuOpen }) => {
  return (
    <Button
      className={isMenuOpen ? 'active' : ''}
      aria-label="Open main menu"
      onClick={toggle}
    >
      <Bar />
      <Bar />
      <Bar />
    </Button>
  );
};
