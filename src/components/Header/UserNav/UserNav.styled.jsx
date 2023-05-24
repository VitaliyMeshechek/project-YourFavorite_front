import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-top: 38px;
  padding-bottom: 84px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 16px;
  text-decoration: none;
`;

export const UserName = styled.p`
  margin: 0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #ffc107;
`;

export const Avatar = styled(VscAccount)`
  cursor: pointer;
  fill: #ffc107;
  width: 28px;
  height: 28px;
`;
export const AvatarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
