import styled from '@emotion/styled';

export const Item = styled.li`
  @media screen and (max-width: 767.98px) {
    padding: 16px 0;
    padding-left: 12px;
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 0;
    padding-left: 12px;
    width: 335px;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 0;
    padding-left: 12px;
    width: 395px;
  }
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemLink = styled.a`
  @media screen and (max-width: 767.98px) {
  }
  @media screen and (min-width: 1280px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    display: block;
    text-align: center;
    color: #54adff;
    margin-bottom: 16px;
  }
  text-decoration: none;
`;

export const WrapperContent = styled.div`
  @media screen and (min-width: 1280px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.38;
    color: #111111;
  }
`;

export const SpanColor = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  color: #111111;
`;

export const TextContent = styled.p`
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    &:first-child {
      margin-top: 0;
    }
  }
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  color: #111111;
`;

export const ImgWrapper = styled.img`
  @media screen and (min-width: 1280px) {
    margin-top: 59px;
    margin-bottom: 128px;
    width: 124px;
    margin-right: 20px;
  }
`;
