import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #111111;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  :hover,
  :focus {
    color: #ffc107;
  }
  &.active {
    color: #ffc107;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
  }
`;
