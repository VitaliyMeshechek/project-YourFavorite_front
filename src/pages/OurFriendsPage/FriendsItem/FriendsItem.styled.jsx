import styled from '@emotion/styled';

export const Item = styled.li`
  @media screen and (max-width: 767.98px) {
    padding: 16px 0;
    padding-left: 12px;
    max-width: 280px;
    width: 100%;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;
    padding-right: 18px;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px 0;
    padding-left: 12px;
    width: 335px;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 0;
    padding-left: 12px;
    width: 395px;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;
    padding-right: 18px;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    outline: 1px solid #54adff;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    transform: scale(1.1);
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: 1px solid #54adff;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and(max-width:767.98px) {
    display: block;
  }
`;

export const ItemLinkTitle = styled.a`
  text-decoration: none;
  text-align: center;
  color: #54adff;
  display: block;

  @media screen and (max-width: 767.98px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.35;
    color: #54adff;
    margin-bottom: 16px;
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

  &:hover {
    color: #ffc107;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const WrapperContent = styled.div`
  @media screen and (max-width: 767.98px) {
  }
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
  @media screen and(max-width: 767.98px) {
    width: 118px;
  }
`;

export const TextContent = styled.div`
  @media screen and (max-width: 767.98px) {
    width: 114px;
    margin-top: 12px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  color: #111111;

  &:hover {
    color: #ffc107;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    color: #ffc107;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ImgWrapper = styled.img`
  @media screen and (max-width: 767.98px) {
    max-width: 100px;
    width: 100%;
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 124px;
    margin-right: 12px;
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 59px;
    margin-bottom: 128px; */
    width: 124px;
    margin-right: 20px;
  }
`;

export const LinkItem = styled.a`
  @media screen and (max-width: 767.98px) {
    width: 114px;
    display: block;
  }
`;

export const TimeText = styled.div`
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 11px;
    color: #111111;
  `;