import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
export const LogoImg = styled.img`
  width: 116px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px;
  }
`;
