import styled from '@emotion/styled';
import { Form } from 'formik';

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
//   font-family:
  
export const AddFormTitle = styled.h1`

  padding-left: 12px;
  margin-bottom: 24px;

  line-height: 1.35;
font-size: 20px;
  color: #111111;
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

    background-color: #CCE4FB;
    border-radius: 8px;
  }

  &.current::after {
    background-color: #54ADFF;
  }

  &.completed::after {
    background-color: #00C3AD;
  }
`;
//   font-family:
export const AddFormStepName = styled.p`

  font-size: 10px;
  line-height: 1.4;

  color: #CCE4FB;



  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    
    margin-top: 40px;
    column-gap: 24px;
  }
`;
// justify-content: ${({ category, isMoreInfo }) => category !== 'your-pet' ? 'center' && isMoreInfo : 'end'};
