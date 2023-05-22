import styled, { keyframes, css } from '@emotion/styled';
import { Link } from 'react-router-dom';

const moveArrow = keyframes`
0% {
  transform: translateX(0);
}
15% {
  transform: translateX(15%);
}
60% {
  transform: translateX(-30%);
}
100% {
  transform: translateX(0);
}
`;

const buttonBack = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  max-height: 40px;


  font-weight: 700;
  line-height: 1.38;


  background-color: transparent;
  border: none;





  &:hover svg,
  &:focus svg {
    animation: ${moveArrow} 600ms linear infinite;
  }
`;

const buttonNext = css`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


  gap: 12px;

  min-width: 248px;


  font-weight: 700;
  line-height: 1.38;


  border: none;
  border-radius: 40px;

  overflow: hidden;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;

  }

  &:hover,
  &:focus {

  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    fill: currentColor;
  }

  &:disabled {

    pointer-events: none;
  }
`;

export const NextButton = styled.button`
  ${buttonNext}
`;

export const BackButton = styled.button`
  ${buttonBack}
`;

export const BackLink = styled(Link)`
  ${buttonBack}
`;
