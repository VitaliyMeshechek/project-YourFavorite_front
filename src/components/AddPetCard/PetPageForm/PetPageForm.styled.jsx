import styled from '@emotion/styled';
import { Form } from 'formik';

import { breakPoints, colors } from 'base-styles/variables';


export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
  
export const AddFormTitle = styled.h1`
  font-weight: 500;
  padding-left: 12px;
  margin-bottom: 24px;

  line-height: 1.35;
  font-size: 20px;
  color: ${colors.black};
`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-bottom: 16px;
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  flex-basis: calc((100% - 24px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color:  ${colors.blueLight};
    border-radius: 8px;
  }

  &.current::after {
    background-color:  ${colors.blue};
  }

  &.completed::after {
    background-color: ${colors.green};
  }
`;

export const AddFormStepName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;

  color:  ${colors.blue};

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 1.62;
  }
`;
  // ${AddFormItem}.current & {
  //   color: #54ADFF;
  // }

  // ${AddFormItem}.completed & {
  //   color: #00C3AD;
  // }

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: ${({ category, isMoreInfo }) => category !== 'your-pet' ? 'center' && isMoreInfo : 'end'};

    margin-top: 40px;
    column-gap: 24px;
  }
`;
