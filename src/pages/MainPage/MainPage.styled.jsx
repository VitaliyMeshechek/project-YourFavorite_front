import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.38;
  color: #111111;

  margin-top: 80px;
  margin-bottom: 40px;
`;
export const SearchForm = styled.form`
  position: relative;
`;
export const Input = styled.input`
  width: 608px;
  height: 44px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1, 2;
  align-items: center;
  letter-spacing: 0.04em;
  color: #888888;
  background: #ffffff;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  padding: 10px 20px;
  border: none;
  outline: none;
  &:hover {
    outline: 2px solid #ffc107;
  }
  &:focus {
    outline: 2px solid #ffc107;
  }
`;
