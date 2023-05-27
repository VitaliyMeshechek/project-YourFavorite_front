import styled from '@emotion/styled';
import { breakPoints, colors } from 'base-styles/variables';
import { FiSearch } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import { Field, Form } from 'formik';

export const SearchForm = styled(Form)`
  width: auto;
  height: 44px;
  margin-bottom: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-bottom: 40px;
  }
`;

export const Input = styled(Field)`
  font-family: 'Inter';

  width: 280px;
  height: 44px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: ${colors.gray};

  background: ${colors.white};

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border: none;
  border-radius: 24px;
  padding-left: 20px;

  &::placeholder {
    font-size: 14px;
    line-height: 17px;
    color: ${colors.gray};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::-webkit-search-cancel-button {
    margin-right: 20px;
  }

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 608px;
    height: 44px;
    border-radius: 20px;

    &::placeholder {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const inputNotification = styled.div`
  position: absolute;
  bottom: -4px;
  transform: translateY(100%);
  left: 20px;

  font-size: 10px;
  font-weight: 400;
  color: ${colors.red};
  line-height: 14px;
  @media screen and (min-width: ${breakPoints.tablet}) {
    font-size: 12px;
  }
`;

export const Icon = styled(FiSearch)`
  color: ${colors.blue};
  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 17px;
    height: 17px;
  }
`;

export const CancelIcon = styled(VscClose)`
  color: ${colors.yellow};

  width: 24px;
  height: 24px;
`;

export const CancelButton = styled.button(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ dirty, isSubmitting, isValid }) => {
    if (!dirty || isSubmitting) {
      return { display: 'none' };
    }
  }
);

export const FindButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 608px;
    height: 44px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 13px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    margin-right: 14px;
  }
`;
