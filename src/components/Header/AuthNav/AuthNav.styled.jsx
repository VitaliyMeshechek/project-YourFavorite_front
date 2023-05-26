import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TbPaw } from 'react-icons/tb';
import { colors, breakPoints } from '../../../base-styles/variables';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 38px;
  padding-bottom: 40px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 0;
  }
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 9px;
  padding-bottom: 9px;
  min-width: 165px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  color: ${colors.yellow};
  text-decoration: none;
  border: 2px solid ${colors.yellow};
  border-radius: 40px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (min-width: ${breakPoints.tablet}) {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  :hover,
  :focus {
    color: ${colors.background};
    background-color: ${colors.yellow};
  }

  &.active {
    color: ${colors.background};
    background-color: ${colors.yellow};
  }
`;

export const Icon = styled(TbPaw)`
  transform: rotate(25deg);
  width: 24px;
  height: 24px;
`;
