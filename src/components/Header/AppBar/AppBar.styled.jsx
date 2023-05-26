import styled from '@emotion/styled';
import { colors, breakPoints } from '../../../base-styles/variables';

export const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-top: 20px;
  padding-bottom: 5px;
  align-items: center;
  width: 100vw;
  height: 55px;
  z-index: 999;

  background-color: ${colors.background};
  border: 0;

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 24px;
    height: 70px;
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    padding-top: 20px;
    height: 65px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const SiteNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${breakPoints.desktop}) {
    margin-left: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media screen and (min-width: ${breakPoints.tablet}) {
    gap: 22px;
  }
`;
export const UserNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${breakPoints.tablet}) {
    display: block;
  }
`;
