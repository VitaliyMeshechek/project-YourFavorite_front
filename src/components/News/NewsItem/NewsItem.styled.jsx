import styled from '@emotion/styled';
import { breakPoints, colors } from 'base-styles/variables';
export const Rectangle = styled.div`
  width: 280px;
  height: 8px;
  background: ${colors.grBlue};
  border-radius: 40px;
  margin-bottom: 12px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-bottom: 14px;
    width: 336px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) {
    width: 395px;
  }
`;

export const Item = styled.li`
  width: 280px;
  margin-bottom: 24px;

  background: #ffffff;
  /* Shadow default */

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${breakPoints.desktop}) {
    width: 395px;
  }
`;

export const ItemWrapper = styled.div`
  @media screen and (min-width: ${breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  height: 252px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(image.png);

  margin-bottom: 16px;

  border-radius: 20px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  margin-bottom: 16px;

  color: #111111;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DescWrapper = styled.div`
  padding: 0px 12px 12px 12px;
`;

export const Desc = styled.p`
  margin-bottom: 40px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReadMoreButton = styled.button`
  font-weight: 500;
  color: #54adff;
`;

export const Date = styled.div`
  color: ${colors.gray};
`;
