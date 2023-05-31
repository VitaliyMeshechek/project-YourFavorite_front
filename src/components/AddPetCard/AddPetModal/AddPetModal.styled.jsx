import styled from '@emotion/styled';
import { breakPoints } from 'base-styles/variables';


export const AddFormModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 20px;

  text-align: center;
  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    padding: 64px 32px;
    font-size: 28px;
  }
`;
