import styled from '@emotion/styled';
import { breakPoints } from 'base-styles/variables';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
`;

export const Page = styled.div`
  margin-top: 88px;

  padding-bottom: 100px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-top: 148px;

    padding-bottom: 110px;
  }
`;
