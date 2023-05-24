import { NavList, NavItem, Link } from './Nav.styled';

const links = [
  { id: 1, href: '/news', text: 'News' },
  { id: 2, href: '/FindPets', text: 'Find pet' },
  { id: 3, href: '/friends', text: 'Our friends' },
];

export const Nav = () => {
  return (
    <nav>
      <NavList>
        {links.map(({ id, href, text }) => (
          <NavItem key={id}>
            <Link to={href}>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};
