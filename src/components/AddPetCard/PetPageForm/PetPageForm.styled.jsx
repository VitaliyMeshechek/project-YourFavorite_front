import styled from '@emotion/styled';
import { Form } from 'formik';
import { breakPoints, colors } from 'base-styles/variables';

export const FormBackground = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    ');
  }

  @media screen and (max-width: 1279px) {
    padding-top: 60px;
    ');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ');
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    padding-top: 20px;
    ');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ');
    }
  }
`;

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px;
margin-top: 30px;

  width: 290px;
  height: fit-content;
  min-height: 496px;
  background: ${colors.white};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    margin: 0 auto;
    padding: 20px 32px;
    width: fit-content;
    min-width: 458px;
  margin-top: 70px;
      }

  @media screen and (min-width: ${breakPoints.desktop}) {
    padding: ${({ step, category }) =>
      step === 2 && category !== 'your pet' ? '20px 74px' : '20px 32px'};
   margin-top: 60px;
    }
`;

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
  
export const AddFormTitle = styled.h1`
  font-weight: 600;
  padding-left: 12px;
  margin-bottom: 24px;
  line-height: 1.35;
  font-size: 20px;
  color: ${colors.black};
`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 10px;
  margin-bottom: 16px;
      @media screen and (min-width: ${breakPoints.tablet}) {
column-gap: 12px;
  }
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  
  width: 135px;
 
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
  font-weight: 400;
  font-size: 10px;
  line-height: 1.4;
  color:  ${colors.blue};

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    line-height: 1.62;
  }
`;

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: ${({ category, isMoreInfo }) => category !== 'your pet' ? 'center' && isMoreInfo : 'end'};
    margin-top: 40px;
    column-gap: 24px;
  }
`;
