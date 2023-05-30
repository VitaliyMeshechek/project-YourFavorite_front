import styled from '@emotion/styled';
import { BiTrash } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';
import {
  PrimaryButton,
  PrimaryButtonText,
} from '../CongratsModal/CongratsModal.styled';
import { colors, breakPoints } from 'base-styles/variables';

export const CancelButton = styled(PrimaryButton)`
  padding: 8px 20px;
  gap: 8px;
  border: 2px solid #54adff;
  background-color: ${colors.white};

  color: ${colors.blue};

  &:hover {
    background: ${colors.grBlue};
    color: ${colors.background};
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 129px;
  }
`;

export const CancelButtonText = styled(PrimaryButtonText)``;

export const ApproveButton = styled(CancelButton)`
  background: ${colors.blue};
  color: ${colors.white};
  @media screen and (min-width: ${breakPoints.tablet}) {
    width: ${({ approvedWidth }) => {
      return approvedWidth;
    }};
  }
`;

export const ApproveButtonText = styled(PrimaryButtonText)`
  color: ${colors.background};
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 8px;
`;

export const ButtonFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
    gap: 17px;
    width: auto;
  }
`;

export const TrashIcon = styled(BiTrash)`
  width: 24px;
  height: 24px;
  color: ${colors.white};
  stroke-width: 0;
`;

export const ExitIcon = styled(RxExit)`
  width: 24px;
  height: 24px;
  color: ${colors.white};
  stroke-width: 0;
`;
