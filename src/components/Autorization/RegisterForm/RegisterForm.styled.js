import styled from '@emotion/styled';
import { colors } from 'base-styles/variables';

import { ErrorMessage, Field } from 'formik';

export const RegisterInput = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${colors.blue};
  border-radius: 40px;
  outline: none;
  :hover {
    fill: ${colors.blue};
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 14px;
  color: ${colors.red};
`;

export const PasswordMessage = styled.div`
font-size: 12px;
line-height: 16px;
color: ${colors.green};
`
