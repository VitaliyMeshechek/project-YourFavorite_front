import styled from '@emotion/styled';
import { BiTrash } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';
import {
  PrimaryButton,
  PrimaryButtonText,
} from '../CongratsModal/CongratsModal.styled';
import { colors } from 'base-styles/variables';

export const CancelButton = styled(PrimaryButton)`
  padding: 8px 20px;
  gap: 8px;
  width: 129px;
  border: 2px solid #54adff;
  background-color: ${colors.white};

  color: ${colors.blue};

  &:hover {
    background: ${colors.grBlue};
    color: ${colors.background};
  }
`;

export const CancelButtonText = styled(PrimaryButtonText)``;

export const ApproveButton = styled(CancelButton)`
  background: ${colors.blue};
  color: ${colors.white};
`;

export const ApproveButtonText = styled(PrimaryButtonText)`
  color: ${colors.background};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 17px;
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
