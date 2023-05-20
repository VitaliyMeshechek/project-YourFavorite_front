import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: #111111;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  gap: 24px;
  text-align: center;
  margin: 50px auto 0;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding: 40px 12px;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    padding: 60px 75px;
    width: 608px;
    margin: 82px auto 0;
  }
`;

export const Input = styled(Field)`
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

export const Label = styled.label`
  position: relative;
  color: #888888;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const IconButton = styled.button`
  position: absolute;
  border: none;
  top: 10px;
  right: 16px;
  width: 30px;
  height: 30px;
  background: transparent;
  outline: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #54adff;
  border-radius: 40px;
  padding: 10px 100px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;
  border: none;
  transition: all 300ms ease;
  :hover {
    scale: 1.02;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 201px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: #888888;
  text-align: center;
`;
