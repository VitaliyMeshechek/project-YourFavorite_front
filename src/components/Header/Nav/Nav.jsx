import { NavLink } from 'react-router-dom';

const links = [
  { href: '/news', text: 'News' },
  { href: '/FindPets', text: 'Find pet' },
  { href: '/friends', text: 'Our friends' },
];

export const Nav = () => {
  return (
    <nav>
      {links.map(({ href, text }) => (
        <NavLink to={href} key={href}>
          {text}
        </NavLink>
      ))}
    </nav>
  );
};
