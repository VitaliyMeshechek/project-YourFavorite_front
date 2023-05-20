import { NavLink } from 'react-router-dom';

const links = [
  { href: '/register', text: 'Registration' },
  { href: '/login', text: 'Log IN' },
];

export const AuthNav = () => {
  return (
      <>
        {links.map(({ href, text }) => (
          <NavLink to={href} key={href}>
            {text}
          </NavLink>
        ))}
      </>
  );
};