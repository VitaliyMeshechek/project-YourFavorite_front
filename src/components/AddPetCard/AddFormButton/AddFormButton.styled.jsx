import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { colors } from 'base-styles/variables';

export const NextButton = styled.button`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8 0;
  gap: 12px;
  min-width: 248px;
  color: ${colors.white};
  background-color: ${colors.blue};
  font-weight: 700;
  line-height: 1.38;
  border: none;
  border-radius: 40px;
  transition: color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19),
  background-color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
  overflow: hidden;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    opacity: 0;
    transition: opacity 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
  }
  &:hover,
  &:focus {
    background-color: ${({ filled }) => filled && 'transparent'};
  }
  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
  & svg {
    fill: currentColor;
  }
  &:disabled {
    color: ${colors.gray};
    background-color: ${colors.blueLight};
    border-color: ${colors.blueLight};
    pointer-events: none;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8 0;
  max-height: 40px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: ${colors.blue};
  background-color: transparent;
  border: none;
  transition: color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
  & svg {
    stroke: currentColor;
  }
`;

export const BackLink = styled(Link)`
 display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${colors.blue};
  max-height: 40px;
  font-weight: 700;
  line-height: 1.38;
  background-color: transparent;
  border-radius: 40px;
  cursor: pointer;
  }
`;

