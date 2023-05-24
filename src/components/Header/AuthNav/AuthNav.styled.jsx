import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TbPaw } from 'react-icons/tb';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 38px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
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
  color: #ffc107;
  text-decoration: none;
  border: 2px solid #ffc107;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 7px;
    padding-bottom: 7px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover,
  :focus {
    color: #fef9f9;
    background-color: #ffc107;
  }

  &.active {
    color: #fef9f9;
    background-color: #ffc107;
  }
`;

export const Icon = styled(TbPaw)`
  transform: rotate(25deg);
  width: 24px;
  height: 24px;
`;
