import styled from '@emotion/styled';
import { breakPoints, colors } from 'base-styles/variables';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 52px;

  background: #fef9f9;
  /* Shadow default */

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 310px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Button = styled.button`
  color: ${colors.blue};

  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #cce4fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(Button)``;
export const BackIcon = styled(BsArrowLeft)``;

export const ForwardButton = styled(Button)``;
export const ForwardIcon = styled(BsArrowRight)``;

export const PageButton = styled(Button)``;
