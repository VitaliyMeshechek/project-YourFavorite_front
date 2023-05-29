import styled from '@emotion/styled';
import { colors } from 'base-styles/variables';

export const ErrorText = styled.p`
  position: absolute;
  bottom: -4px;
  left: 16px;
  font-size: 12px;
  line-height: 1.33;
  color: ${colors.red};
  transform: translateY(100%);
`;
