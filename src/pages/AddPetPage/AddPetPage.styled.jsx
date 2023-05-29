import styled from '@emotion/styled';
import { breakPoints, colors } from 'base-styles/variables';

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px;

  width: 100%;
  min-height: 496px;
  background:  ${colors.white};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (min-width:  ${breakPoints.tablet}) {
    margin: 0 auto;
    padding: 20px 32px;
    margin-top: 108px;
    width: fit-content;
    min-width: 458px;
  }
`;

// @media screen and (min-width: 768px){
//     width: 704px;
//     padding-bottom: 121px;
// }
// @media screen and (min-width: 1280px){
//  width:1248px;
//  display: flex;
// }