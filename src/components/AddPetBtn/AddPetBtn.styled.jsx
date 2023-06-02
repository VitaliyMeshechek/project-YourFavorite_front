import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { breakPoints, colors } from 'base-styles/variables';


const Btn = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 129px;
  height: 40px';
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  font-width: 600;
  font-size: 16px;
  color: #fff;

  background-color: ${colors.blue};
  border-radius: 40px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  z-index: 1;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: #fff;
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    position: static;
    translate: 0 0;

    flex-direction: row;
    gap: 8px;

    width: 134px;
    height: 40px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 5px;
    padding-right: 5px;

    font-width: 700;
    font-size: 16px;

    border-radius: 40px;
  }
`;

export { Btn };
// cursor: pointer;
//    border: none;
//    width: 129px;
//    height: 40px;
//    border-radius: 40px;
//  background: #54ADFF;
//  color: #fff;
// font-weight: 700;
// font-size: 16px;
// padding: 9px 16px;
// margin-left: auto;
// :hover{
//    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)
// }