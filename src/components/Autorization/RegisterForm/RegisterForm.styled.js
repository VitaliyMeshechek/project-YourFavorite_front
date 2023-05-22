import styled from '@emotion/styled';

import { ErrorMessage, Field } from 'formik';

export const RegisterInput = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #54adff;
  border-radius: 40px;
  outline: none;
  :hover {
    fill: #54adff;
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
