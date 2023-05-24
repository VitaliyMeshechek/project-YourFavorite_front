import styled from '@emotion/styled';
import { breakPoints } from 'base-styles/variables';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 14px;

  color: #000000;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  max-width: 393px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 44px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 48px;
  }
`;

export const DescriptionAccent = styled.span`
  font-weight: 700;
`;
