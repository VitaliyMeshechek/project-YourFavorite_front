import styled from '@emotion/styled';
import { Field } from 'formik';
import { breakPoints, colors } from 'base-styles/variables';

export const MoreInfoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 0 24px;
  gap: 20px;
  
    @media screen and (min-width: ${breakPoints.tablet}) {
    ${({ category }) =>
      category !== 'your pet' ? 'flex-direction: row; column-gap: 44px' : ''};

    }

`;


export const FirstPartFormWrapper = styled.div`
  display: flex;
  ${({ category }) => (category !== 'your pet' ? 'flex-direction: column;' : '')};
  gap: 20px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    ${({ category }) => (category !== 'your pet' ? 'row-gap: 38px;' : '')};
  
  }
`;

export const SecondPartFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media screen and (min-width: ${breakPoints.tablet}) {
    gap: 24px;
    
  }
`;

export const FileInput = styled(Field)`
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

export const AddFormTextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.black};
  @media screen and (min-width: ${breakPoints.tablet}) {
    gap: 8px;
    font-size: 20px;
    line-height: 1.3;
    height: 100%;
  }
`;


export const AddFormTextArea = styled(Field)`
  padding: 10px 16px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid ${colors.blue};
  border-radius: 40px;
  outline-color: ${colors.blue};
  transition: outline 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
    &.invalid {
    border-color: ${colors.red};
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 16px;
    min-width: 394px;
    padding: 12px 16px;
    height: 108px;
  }
  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
  resize: none;
  height: 92;
  flex-grow: 1;
  border-radius: 20px;

`;

export const AddFormSexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 16px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    row-gap: 20px;
  
  }
  & svg {
    fill: ${colors.blue};
    width: 25px;
    height: 25px;
  }

  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;

    color:  ${colors.black};

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.3;
    }
  }
`;

export const AddFormRadioWrapper = styled.div`
  display: inherit;
`;

export const AddFormSexLabel = styled.label`
  display: flex;
  column-count: 12px;
  align-items: center;
  margin-right: 10px;
 
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 300ms 3px 8px 14px rgba(136, 198, 253, 0.19);
  &:hover {
    color: ${colors.blue};
    font-weight: 600;
      margin-right: 8px;
  }
   ${props => 
    props.checked && 
  `color: ${colors.blue}; 
    font-weight: 600;
    margin-right: 8px;
  `}
`;

//   ${AddFormRadioButton}:checked + & {   color: #111111;  }

export const AddFormImageLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  column-gap: 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.black};

  @media screen and (min-width: ${breakPoints.tablet}) {
    gap: 8px;
    font-size: 20px;
    line-height: 1.3;
       ${({ category }) =>
      category !== 'your pet' ? 'flex-direction: column' : ''};
  }

  
`;
export const AddFormImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  background-color: ${colors.blueLight};
  border-radius: 20px;
  color: ${colors.blue};
  cursor: pointer;
  overflow: hidden;
  object-position: center;
  object-fit: cover;

  & svg {
    stroke: currentColor;
    width: 60px;
    height: 60px
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    min-width: 182px;
    height: 182px;
  }
`;
