import { NavLink } from 'react-router-dom';

const links = [
  { href: '/sell', text: 'sell' },
  { href: '/lost-found', text: 'lost/found' },
  { href: '/for-free', text: 'in good hands' },
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