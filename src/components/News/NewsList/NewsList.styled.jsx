import styled from '@emotion/styled';
import { breakPoints } from 'base-styles/variables';

export const List = styled.ul`
  width: 100%;
  margin-bottom: 40px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 24px;

    margin-bottom: 60px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    margin-bottom: 60px;
  }
`;
