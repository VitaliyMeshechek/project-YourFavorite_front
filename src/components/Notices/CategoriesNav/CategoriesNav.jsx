import { Nav, NavLinkStyled } from './CategoriesNav.styled';

const links = [
  { href: 'sell', text: 'sell' },
  { href: 'lost-found', text: 'lost/found' },
  { href: 'for-free', text: 'in good hands' },
  
];

const userLinks = [
  { href: 'favorite', text: 'favorite ads' },
  { href: 'own', text: 'my ads' },
]

export const NoticesCategoriesNav = () => {
  return (
      <Nav>
        {links.map(({ href, text }) => (
          <NavLinkStyled to={href} key={href}>
            {text}
          </NavLinkStyled>
        ))}
        {userLinks.map(({ href, text }) => (
          <NavLinkStyled to={href} key={href}>
            {text}
          </NavLinkStyled>
        ))}
      </Nav>
  );
};