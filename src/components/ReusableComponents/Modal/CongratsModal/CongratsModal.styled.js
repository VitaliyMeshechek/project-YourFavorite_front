import { TbPaw } from 'react-icons/tb';
import styled from '@emotion/styled';
import { colors, breakPoints } from 'base-styles/variables';

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 52px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  margin-bottom: 40px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 60px;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 8px 28px;
  margin-left: auto;
  margin-right: auto;
  gap: 12px;

  height: 40px;

  background: ${colors.blue};
  color: ${colors.white};

  border-radius: 40px;

  &:hover {
    background: ${colors.grBlue};
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 248px;
  }
`;

export const PrimaryButtonText = styled.span`
  font-weight: 700;
`;

export const IconPaw = styled(TbPaw)`
  width: 24px;
  height: 24px;
  transform: rotate(25deg);
  color: white;
  stroke-width: 1;
`;
