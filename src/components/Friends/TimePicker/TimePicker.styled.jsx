import styled from '@emotion/styled';
import { colors } from 'base-styles/variables';

export const List = styled.ul`
  position: absolute;
  display: grid;
  row-gap: 4px;
  top: 0;
  left: -6px;
  width: 160px;
  padding: 6px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #54adff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 8px;
  color: #000;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    top: 0;
    padding: 8px;
  }
  @media screen and (min-width: 1280px) {
    top: 0;
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const TextContent = styled.p`
  padding: 0;
  border: none;
  display: block;
  background-color: transparent;
  font-weight: 400;
  font-size: 12px;
  color: #54adff;
  width: 100%;
  text-align: inherit;
  cursor: pointer;
  transition: color 250ms ease-in-out;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
  &:hover {
    color: ${colors.blue};
  }
`;

export const Item = styled.li`
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: 'transparent';
`;

export const Days = styled.div`
  line-height: 12px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    line-height: 16px;
  }
`;
