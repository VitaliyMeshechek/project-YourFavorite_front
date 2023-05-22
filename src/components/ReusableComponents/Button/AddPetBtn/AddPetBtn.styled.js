import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
  position: fixed;
  top: 460px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;

  width: 80px;
  height: 80px;
  padding-top: 5px;
  padding-bottom: 2px;

  /* font-family: ;
  font-size: ; */
  color: #fff;

  background-color: #54adff;
  border-radius: 50%;

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

    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
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

  @media screen and (min-width: 768px) {
    position: relative;
    top: 0;
    right: 0;

    flex-direction: row;
    gap: 8px;

    width: 134px;
    height: 40px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 5px;
    padding-right: 5px;

    border-radius: 40px;
  }
`;
