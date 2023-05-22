import styled from '@emotion/styled';
import { Field } from 'formik';
import { visuallyHidden } from 'utils/visuallyHidden';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 24px;
  row-gap: 12px;
`;

export const AddFormRadioButton = styled(Field)`
  ${visuallyHidden}
`;

export const RadioCategoryLabel = styled.label`
  padding: 8px 16px;

  width: fit-content;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: #54ADFF;
  background-color: #CCE4FB;
  border-radius: 40px;
  cursor: pointer;

  transition: color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19),
    background-color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);

  &:hover,
  &:focus,
  ${AddFormRadioButton}:checked + & {
    background-color: #54ADFF;
    color: #FDF7F2;
  }
`;
