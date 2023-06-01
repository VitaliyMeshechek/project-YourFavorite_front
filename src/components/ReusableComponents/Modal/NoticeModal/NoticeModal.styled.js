import styled from '@emotion/styled';

import { BsSuitHeart } from 'react-icons/bs';

import {
  Img as NewsImg,
  Title as NewsTitle,
  Desc as NewsDesc,
  DescWrapper as NewsDescWrapper,
} from 'components/News/NewsItem/NewsItem.styled';

import {
  ButtonFlexWrapper as ApproveButtonFlexWrapper,
  CancelButton as ApproveCancelButton,
  CancelButtonText as ApproveCancelButtonText,
  ApproveButton as ApproveButtonCopy,
  ApproveButtonText as ApproveButtonTextCopy,
} from '../ModalApproveAction/ModalApproveAction.styled';
import { breakPoints, colors } from 'base-styles/variables';

export const ButtonFlexWrapper = styled(ApproveButtonFlexWrapper)`
  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-left: auto;
    flex-direction: row-reverse;
  }
`;
export const CancelButton = styled(ApproveCancelButton)``;
export const CancelButtonText = styled(ApproveCancelButtonText)``;
export const ApproveButton = styled(ApproveButtonCopy)`
  gap: 11px;
`;
export const ApproveButtonText = styled(ApproveButtonTextCopy)``;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
    gap: 24px;
    width: 100%;
    margin-bottom: 28px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Category = styled.div`
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;
  border-radius: 0px 40px 40px 0px;

  background: #cce4fb;
`;

export const Img = styled(NewsImg)`
  position: relative;
  display: block;

  width: 240px;
  height: 240px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  margin-bottom: 12px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-bottom: 0;
    width: 262px;
    height: 298px;
  }
`;

export const Title = styled(NewsTitle)`
  margin-bottom: 20px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 240px;
  }
`;

export const Desc = styled(NewsDesc)`
  text-align: start;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 12px;
  color: #000000;

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 70px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  /* align-items: center; */
  text-align: left;
  margin-bottom: 12px;
`;

export const InfoLink = styled.a`
  text-decoration-line: underline;
  color: #ffc107;
`;

export const InfoNameList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 20px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-right: 50px;
  }
`;

export const InfoName = styled.li`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const InfoValueList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding-top: 2px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
    gap: 8px;
    padding-top: 1px;
  }
`;

export const InfoValue = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DescWrapper = styled(NewsDescWrapper)`
  padding: 0;
  text-align: start;
  @media screen and (min-width: ${breakPoints.tablet}) {
  }
`;

export const HeartIcon = styled(BsSuitHeart)`
  width: 18px;
  height: 16px;
  color: ${colors.white};
  stroke-width: 0;
`;
