import styled from '@emotion/styled';
import { Field } from 'formik';
import { colors } from 'base-styles/variables';


export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 24px;
  row-gap: 12px;
`;


export const AddFormRadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

`;

export const RadioCategoryLabel = styled.label`
  padding: 8px 16px;

  width: fit-content;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: ${colors.blue};
  background-color: ${colors.blueLight};
  border-radius: 40px;
  cursor: pointer;

  transition: color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19),
  background-color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
    &:hover,
  &:focus,
  &:checked + & {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
  


`;


  // &:hover,
  // &:focus,
  // ${AddFormRadioButton}:checked + & {
  //   background-color: ${colors.blue};
  //   color: ${colors.white};
  // }