import styled from '@emotion/styled';
import { breakPoints } from 'base-styles/variables';

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-top: 17px;
  margin-bottom: 44px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 48px;
  }
`;
